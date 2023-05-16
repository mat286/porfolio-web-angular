
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

  Loading:any;
  
  img: String = "";
  urlCv: String = "";
  info: String = "";

  constructor(private datosPorfolio: PorfolioService) {
    this.Loading=false;
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
    this.Loading = true;
    if (this.miPorfolio.id == id && this.admin == true) {

      if (this.img != "") this.miPorfolio.img = this.img;
      if (this.urlCv != "") this.miPorfolio.urlCv = this.urlCv;
      if (this.info != "") this.miPorfolio.info = this.info;

      this.datosPorfolio.editarDatos("sobremi/editar/" + this.miPorfolio.id, this.miPorfolio).subscribe(respuesta => {
      });

    }
    setTimeout( () => {
      this.Loading=false;
    }, 2000);
    setTimeout( () => {
      window.location.reload();
    }, 2000);
    

  }

  mostrarBoton(){
    let pepe = this.datosPorfolio.validadors();
    this.mostrar = pepe.vista;
    this.admin = pepe.edicion;
  }

/*   mostrarto(){
    let pepe=this.Loading
    return pepe;
  } */

}