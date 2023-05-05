import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-fotosini',
  templateUrl: './fotosini.component.html',
  styleUrls: ['./fotosini.component.css']
})
export class FotosiniComponent {
  miPorfolio: any;
  foto: any; 
  fotov: any;
  incremental: number=0;
  mensajeVer=false;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatos().subscribe(data => {
      this.miPorfolio = data;
      this.foto = data.fotosini.fotos;

    });

  }

  dusplayImagenes(): void {
    this.fotov=this.foto[this.incremental];
    if (this.incremental < 3) {
      this.incremental += 1;

    } else {
      this.incremental = 0;
    }
  }

  noEnviarMensaje(){
    this.mensajeVer = false;
  }

  getmensajeVer(){
    return this.mensajeVer
  }
  

  onClick() {
    this.mensajeVer = true;
  }

}