import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  miPorfolio: any;
  mostrar:boolean=false;
  admin:boolean=false;

  varibleId: string = "";

  titulo: string = "";
  img: string = "";
  tipo: string = "";
  inicio: string = "";
  fin: string = "";
  info: string = "";
  institucion: string = "";

  objeto = { "titulo": "", "institucion": "", "img": "", "tipo": "", "inicio": "", "fin": "", "info": "" }

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.cargaData();
    this.mostrarBoton();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("Educaciones/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta;
    });
  }

  mostrarBoton(){
    let pepe = this.datosPorfolio.validadors();
    this.mostrar = pepe.vista;
    this.admin = pepe.edicion;
  }


  agregar() {
    if (this.admin==true) {
      this.objeto = { "titulo": this.titulo, "institucion": this.institucion, "img": this.img, "tipo": this.tipo, "inicio": this.inicio, "fin": this.fin, "info": this.info }
    this.datosPorfolio.crearDatos("Educaciones/crear", this.objeto).subscribe(respuesta => {
    });
    }
    window.location.reload();

  }

  eliminar() {
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId &&this.admin==true) {
        this.datosPorfolio.eliminarDatos("/Educaciones/borrar/" + this.varibleId).subscribe(respuesta => {
        });
      }
    }
    window.location.reload();
  }

  mostrarId(id: string) {
    this.varibleId = id;
  }
  editar() {
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId && this.admin==true) {

        if (this.titulo != "") element.titulo = this.titulo;
        if (this.img != "") element.img = this.img;
        if (this.tipo != "") element.tipo = this.tipo;
        if (this.inicio != "") element.inicio = this.inicio;
        if (this.fin != "") element.fin = this.fin;
        if (this.institucion != "") element.institucion = this.institucion;
        if (this.info != "") element.info = this.info;

        this.datosPorfolio.editarDatos("/Educaciones/editar/" +this.varibleId, element).subscribe(respuesta => {
        });
      }
    }
    window.location.reload();
  }
}



