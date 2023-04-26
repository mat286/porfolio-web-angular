import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
 miPorfolio:any;
 mensajeVer=false;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.Educacion;
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



