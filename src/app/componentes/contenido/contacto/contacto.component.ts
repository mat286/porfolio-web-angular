import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  miPorfolio: any;
  form: FormGroup;
  constructor(private datosPorfolio: PorfolioService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      motivo: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data => {
      console.log(data);
      this.miPorfolio = data.contenido;
    });

  }



  public get nombre(): any {
    return this.form.get("nombre");
  }
  public get apellido(): any {
    return this.form.get("apellido");
  }
  public get email(): any {
    return this.form.get("email");
  }
  public get motivo(): any {
    return this.form.get("motivo");
  }
  public get mensaje(): any {
    return this.form.get("mensaje");
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



  onClick() {
    alert('estas seguro que quieres hacer cambios');
  }

}