import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {

  @Output() salida =new EventEmitter();

  existe:string="block";
  nueva:string="none";

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    /* console.log(this.datosPorfolio.loginV); */

  }  

  salir():void{
    this.salida.emit();

  }

  nuevaExistente(parametro:string):void{
    if (parametro=="nueva") {
      this.nueva="block"
      this.existe="none"
    } 
    else{
      this.existe="block"
      this.nueva="none"
    }
  }

}