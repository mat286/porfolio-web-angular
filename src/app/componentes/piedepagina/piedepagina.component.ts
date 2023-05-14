import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent {

  fecha:any;

  miPorfolio:any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      this.miPorfolio=data.footer;
    });

    this.fecha = this.datosPorfolio.fechaActual();

  }

}