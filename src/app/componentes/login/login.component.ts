import { Component, Input } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {


  constructor(/* private datosPorfolio: EncabezadoComponent */) { }

  ngOnInit(): void {

    /* console.log(this.datosPorfolio.loginV); */

  }

  mostrarCaja():string {
    console.log("holaaaaaaaaaaaaaaaa");
    return "none";//aca va flex
  }


  
}
