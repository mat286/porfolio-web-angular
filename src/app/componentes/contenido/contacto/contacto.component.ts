import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  miPorfolio: any;
  form: FormGroup;
  mensajeVer=false;

  constructor(private datosPorfolio: PorfolioService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({ 
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      motivo: ['', [Validators.required]],
      telefono: ['', [Validators.required,] ],
      campo: ['', [Validators.required,] ],
      mensaje: ['']
    });
  }


  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data => {
      this.miPorfolio = data.contenido.Contacto;
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
  public get telefono(): any {
    return this.form.get("telefono");
  }
  public get campo(): any {
    return this.form.get("campo");
  }
  public get mensaje(): any {
    return this.form.get("mensaje");
  }
  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      this.form.value.mensaje += (document.getElementById("mensaje"))?.innerHTML;
      this.mensajeVer = true;
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

  noEnviarMensaje(){
    this.mensajeVer = false;
  }

  getmensajeVer(){
    return this.mensajeVer
  }

  getmensaje(){
    return document.getElementById("mensaje")?.innerHTML;
  }

}