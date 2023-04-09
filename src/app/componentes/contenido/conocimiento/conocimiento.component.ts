import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})
export class ConocimientoComponent {
  conocimiento:any;
  form: FormGroup;

  miPorfolio:any;
  constructor(private datosPorfolio: PorfolioService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({ 
      habilidadesBlandas: ['', ],
      apellido: ['', [Validators.required]]
    });

   }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.conocimiento;
      this.conocimiento=data.contenido.conocimiento.conocimiento; 
    });

  }

  comparador():void{
    alert(this.form.value.habilidadesBlandas.checked)
  }

}
