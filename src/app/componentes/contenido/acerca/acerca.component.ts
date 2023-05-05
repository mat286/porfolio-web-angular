import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  miPorfolio: any;
  img: String = "";
  urlCv: String = "";
  info: String = "";

  constructor(private datosPorfolio: PorfolioService) {
  }
  ngOnInit(): void {
    this.cargaData();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("sobremi/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta[0];
    });
  }
  enviarMensaje(id: String) {

    if (this.miPorfolio.id = id) {

      if (this.img != "") this.miPorfolio.img = this.img;
      if (this.urlCv != "") this.miPorfolio.urlCv = this.urlCv;
      if (this.info != "") this.miPorfolio.info = this.info;

      this.datosPorfolio.editarDatos("/sobremi/editar/" + this.miPorfolio.id, this.miPorfolio).subscribe(respuesta => {
      });

    }
    window.location.reload();

  }

}