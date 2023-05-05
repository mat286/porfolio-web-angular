import { Component, ElementRef, ViewChild } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Injectable } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { experienciaFormato } from './inter';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  varibleId: Number = 0;

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


  miPorfolio: any;
  constructor(private datosPorfolio: PorfolioService) { }


  ngOnInit(): void {
    this.cargaData();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("experiencias/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta;
      console.log("user");
    });
  }

  agregar() {

    this.objeto = { "nombre": this.nombre, "puesto": this.puesto, "img": this.img, "inicio": this.inicio, "fin": this.fin, "info": this.info }

    this.datosPorfolio.crearDatos("experiencias/crear", this.objeto).subscribe(respuesta => {
    });

    window.location.reload();

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
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId) {
        this.datosPorfolio.eliminarDatos("experiencias/borrar/" + this.varibleId).subscribe(respuesta => {
        });
      }
    }
    window.location.reload();
  }
  editar() {
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId) {
        console.log(element);

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
    window.location.reload();
  }

}



