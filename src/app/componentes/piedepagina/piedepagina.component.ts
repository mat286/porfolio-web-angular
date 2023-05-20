import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent {



  miPorfolio: any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.getDatos("personas/traer").subscribe(respuesta => {
      console.log(respuesta[0].info)
      this.miPorfolio = respuesta[0].info;
    });

  }





}