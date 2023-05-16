import { Component, EventEmitter, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-cuenta-nueva',
  templateUrl: './cuenta-nueva.component.html',
  styleUrls: ['./cuenta-nueva.component.css']
})
export class CuentaNuevaComponent {

  @Input() mostrar: String = "";

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private datosPorfolio: PorfolioService) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      nombreN: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }
  public get nombreN(): any {
    return this.form.get("nombreN");
  }
  get Password() {
    return this.form.get("password");
  }

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    console.log(this.form.value);
    this.datosPorfolio.crearSesion(this.form.value).subscribe(data => {
      console.log(this.form.value);
    });

    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      /* alert("Todo salio bien ¡Enviar formuario!"); */
      alert(`hola ${this.form.value.nombre} como estas?`);
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
    }

  }





}
