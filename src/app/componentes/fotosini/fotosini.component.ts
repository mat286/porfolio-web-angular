import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-fotosini',
  templateUrl: './fotosini.component.html',
  styleUrls: ['./fotosini.component.css']
})
export class FotosiniComponent {
  miPorfolio: any;

  mostrar: boolean = false;
  admin: boolean = false;

  foto = ["./assets/fotos/imagen1.jpg", "https://www.campusmvp.es/recursos/image.axd?picture=/2019/3T/front-vs-back-campusmvp.png",
    "./assets/fotos/utn.jpg", "https://static.vecteezy.com/system/resources/previews/002/792/944/original/cloud-computing-circuit-future-technology-concept-background-free-vector.jpg"
  ];
  fotov: any;

  fotoPersona: string = "";
  urlInstagram: string = "";
  urlLinkedin: string = "";
  urlGithub: string = "";
  info: string = "";


  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.cargaData();
    this.mostrarBoton();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("personas/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta[0];
    });
  }

  editar(id: string) {
    if (this.miPorfolio.id == id && this.admin==true) {

      if (this.fotoPersona != "") this.miPorfolio.fotoPersona = this.fotoPersona;
      if (this.urlInstagram != "") this.miPorfolio.urlInstagram = this.urlInstagram;
      if (this.urlLinkedin != "") this.miPorfolio.urlLinkedin = this.urlLinkedin;
      if (this.urlGithub != "") this.miPorfolio.urlGithub = this.urlGithub;
      if (this.info != "") this.miPorfolio.info = this.info;

      this.datosPorfolio.editarDatos("personas/editar/" + id, this.miPorfolio).subscribe(respuesta => {
      });
    }
    window.location.reload();
  }

  mostrarBoton() {
    let pepe = this.datosPorfolio.validadors();
    this.mostrar = pepe.vista;
    this.admin = pepe.edicion;
  }
}