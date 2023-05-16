import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-existente',
  templateUrl: './cuenta-existente.component.html',
  styleUrls: ['./cuenta-existente.component.css']
})
export class CuentaExistenteComponent {

  @Input() mostrar: String = "";
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private datosPorfolio: PorfolioService,private router: Router) {

    this.form = this.formBuilder.group({
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  public get nombre(): any {
    return this.form.get("nombre");
  }
  onEnviar(event: Event) {

    event.preventDefault;
    this.datosPorfolio.iniciarSesion(this.form.value).subscribe(data => {
      this.datosPorfolio.infouser(data);
    });

    if (this.form.valid) {
      alert(`hola ${this.form.value.nombre} tenes permisos para realizar cambios?`);
      this.mostrar="none";
      this.router.navigate(['/Educacion']);
    } else {
      this.form.markAllAsTouched();
    }

  }
  get Password() {
    return this.form.get("contrasena");
  }
  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }


}
