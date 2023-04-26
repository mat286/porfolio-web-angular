import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  miPorfolio:any;
  mensajeVer=false;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.Acerca;
    });

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
