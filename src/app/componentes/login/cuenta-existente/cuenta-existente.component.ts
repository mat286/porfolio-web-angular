import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cuenta-existente',
  templateUrl: './cuenta-existente.component.html',
  styleUrls: ['./cuenta-existente.component.css']
})
export class CuentaExistenteComponent {

  @Input() mostrar:String="";

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]], 
      nombre: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

    /* console.log(this.datosPorfolio.loginV); */

  }   

  public get nombre(): any {
    return this.form.get("nombre");
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


}
