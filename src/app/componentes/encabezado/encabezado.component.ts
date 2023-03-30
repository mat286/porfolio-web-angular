import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
}) 

export class EncabezadoComponent {
  miPorfolio:any;
  botton:string= "none";
  constructor(private datosPorfolio: PorfolioService, private datoEstilo: LoginComponent) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data;
    });

  }

  onclick():void {
    this.botton= "flex"
  }

  cerrar():void {
    this.botton= "none"
  }


}
