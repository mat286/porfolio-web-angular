
import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  miPorfolio: any;
  mostrar:boolean=false;
  admin:boolean=false;

  mostrarSpinner = false;
  
  img: String = "";
  urlCv: String = "";
  info: String = "";

  constructor(private datosPorfolio: PorfolioService) {
  }
  ngOnInit(): void {
    this.cargaData();
    this.mostrarBoton();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("sobremi/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta[0];
    });
  }
  enviarMensaje(id: String) {
    if (this.miPorfolio.id == id && this.admin == true) {
      this.mostrarSpinner=true;

      if (this.img != "") this.miPorfolio.img = this.img;
      if (this.urlCv != "") this.miPorfolio.urlCv = this.urlCv;
      if (this.info != "") this.miPorfolio.info = this.info;

      this.datosPorfolio.editarDatos("sobremi/editar/" + this.miPorfolio.id, this.miPorfolio).subscribe(respuesta => {
      });

    }
    this.mostrarSpinner=false;
    window.location.reload();

  }

  mostrarBoton(){
    let pepe = this.datosPorfolio.validadors();
    this.mostrar = pepe.vista;
    this.admin = pepe.edicion;
  }

}