import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
}) 

export class EncabezadoComponent {
  miPorfolio:any;

  botton:boolean = false;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.cargaData();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("personas/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta[0];
    });
  }

  onclick():void {
    this.botton= true;
  }

  cerrar() {
    this.botton= false;
  }


}
