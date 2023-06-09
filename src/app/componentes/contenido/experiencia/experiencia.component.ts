import { Component, ElementRef, ViewChild } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  varibleId: Number = 0;
  mostrar: boolean = false;
  admin: boolean = false;

  @ViewChild('exampleModalE') modalEdi!: ElementRef;
  @ViewChild('exampleModaleliminar') modalEli!: ElementRef;

  nombre: string = "";
  puesto: string = "";
  img: string = "";
  inicio: string = "";
  fin: string = "";
  info: string = "";


  objeto = { "nombre": "", "puesto": "", "img": "", "inicio": "", "fin": "", "info": "" }

  experi: any;
  Loading=false;


  miPorfolio: any;
  constructor(private datosPorfolio: PorfolioService) { }


  ngOnInit(): void {
    this.cargaData();
    this.mostrarBoton();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("experiencias/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta;
    });
  }

  mostrarBoton() {
    let pepe = this.datosPorfolio.validadors();
    this.mostrar = pepe.vista;
    this.admin = pepe.edicion;
  }

  agregar() {
    this.Loading = true;
    if (this.admin==true) {
      this.objeto = { "nombre": this.nombre, "puesto": this.puesto, "img": this.img, "inicio": this.inicio, "fin": this.fin, "info": this.info }
    this.datosPorfolio.crearDatos("experiencias/crear", this.objeto).subscribe(respuesta => {
    });
    }
    setTimeout(function () {
      window.location.reload();
    }, 4000);
  }

  mostrarIdParaEliminar(id: Number) {
    this.varibleId = id;
    this.modalEdi.nativeElement.classList.add('show');
    document.body.classList.add('modal-open');
  }

  mostrarIdParaEditar(id: Number) {
    this.varibleId = id;
    this.modalEli.nativeElement.classList.add('show');
    document.body.classList.add('modal-open');
  }
  eliminar() {
    this.Loading = true;
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId && this.admin==true) {
        this.datosPorfolio.eliminarDatos("experiencias/borrar/" + this.varibleId).subscribe(respuesta => {
        });
      }
    }
    setTimeout(function () {
      window.location.reload();
    }, 4000);
  }
  editar() {
    this.Loading = true;
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId && this.admin==true) {

        if (this.nombre != "") element.nombre = this.nombre;
        if (this.puesto != "") element.puesto = this.puesto;
        if (this.img != "") element.img = this.img;
        if (this.inicio != "") element.inicio = this.inicio;
        if (this.fin != "") element.fin = this.fin;
        if (this.info != "") element.info = this.info;

        this.datosPorfolio.editarDatos("experiencias/editar/" + this.varibleId, element).subscribe(respuesta => {
        });
      }
    }
    setTimeout(function () {
      window.location.reload();
    }, 4000);
  }

}



