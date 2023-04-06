import { Component } from '@angular/core';
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

  experi:any;


  miPorfolio:any;
  constructor(private datosPorfolio: PorfolioService) { } 

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.Experiencia;

      this.experi=data.contenido.Experiencia.experiencia;
      /* console.log(this.experi[1]); */
    });

  }
  onClick() {
    alert('estas seguro que quieres hacer cambios');
  }

}



