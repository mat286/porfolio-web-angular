import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  miPorfolio: any;
  varibleId: Number = 0;

  titulo: string = "";
  url: string = "";
  img: string = "";
  fecha: string = "";
  info: string = "";


  objeto = { "titulo": "", "url": "", "img": "", "fecha": "", "info": "" }

  constructor(private datosPorfolio: PorfolioService) { }

  /*   ngOnInit(): void {
  
      this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
        console.log(data);
        this.miPorfolio=data.contenido.Proyectos;
      });
  
    } */
  ngOnInit(): void {
    this.cargaData();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("proyectos/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta;
      console.log("user");
    });
  }

  eliminar() {
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId) {
        this.datosPorfolio.eliminarDatos("proyectos/borrar/" + this.varibleId).subscribe(respuesta => {
          console.log("oka");
        });
      }
    }
    window.location.reload();

  }

  mostrarId(id: Number) {
    console.log(id);
    this.varibleId = id;
  
  }

  agregar() {

    this.objeto = { "titulo": this.titulo, "url": this.url, "img": this.img, "fecha": this.fecha, "info": this.info }

    this.datosPorfolio.crearDatos("/proyectos/crear", this.objeto).subscribe(respuesta => {
      console.log("oka");
    });

    window.location.reload();

  }

  editar() {
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId) {

        if (this.titulo != "") element.titulo = this.titulo;
        if (this.img != "") element.img = this.img;
        if (this.url != "") element.url = this.url;
        if (this.fecha != "") element.fecha = this.fecha;
        if (this.info != "") element.info = this.info;
  
  
        this.datosPorfolio.editarDatos("/proyectos/editar/" +this.varibleId, element).subscribe(respuesta => {
          console.log("ok");
        });
      }
    }
    window.location.reload();
  }
}