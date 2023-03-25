import { Component, Input } from '@angular/core';
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
  mostrarinicio: String;
  mostrarcrear: String;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
    this.mostrarcrear="none";
    this.mostrarinicio="block";
  }

  ngOnInit(): void {

    /* console.log(this.datosPorfolio.loginV); */

  }  
  public get nombre(): any {
    return this.form.get("nombre");
  }
  public get email(): any {
    return this.form.get("email");
  }
  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!");
      /*       alert(`hola ${this.form.nombre}como estas?`); */
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
    }

  }
  get Password(){
    return this.form.get("password");
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid() {
    return false
  }
  mostrarCaja(): string {
    console.log("holaaaaaaaaaaaaaaaa");
    return "none";//aca va flex
  }

  filtro(algo: string, algo2: string):void {
    this.mostrarinicio== algo;
    this.mostrarcrear== algo2;
  }
  inicio():any {
    console.log(this.mostrarinicio);
    return this.mostrarinicio;
  }
  crear():any {
    console.log(this.mostrarcrear);
    return this.mostrarcrear;
  }
  botton():void {
    this.filtro("block","flex");
  }
}