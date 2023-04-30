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
  conocimiento: any;
  form: FormGroup;
  mensajeVer=false;

  miPorfolio: any;

  buscado: string= "";

  herramientas: boolean= true;
  lenguajeProgrmacion: boolean= true;
  habilidadesBlandas: boolean= false;
  framework: boolean= true;
  Avanzado : boolean= true;
  Basico: boolean= true;

  constructor(private datosPorfolio: PorfolioService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      habilidadesBlandas: ['',],
      apellido: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data => {
      this.miPorfolio = data.contenido.conocimiento;
      this.conocimiento = data.contenido.conocimiento.conocimiento;
    });

  }

  filtro(): any[] {
    let lista: any[]=[];
    for (let i = 0; i < this.conocimiento.length; i++) {
      const element = this.conocimiento[i];
      if (element.saber==="lenguajeProgrmacion" && this.lenguajeProgrmacion || element.saber==="herramientas" && this.herramientas|| element.saber==="habilidadesBlandas" && this.habilidadesBlandas || element.saber==="framework" && this.framework) {
        if (element.porcentaje >= 50 && this.Avanzado ||element.porcentaje < 50 && this.Basico){
          lista.push(element);
        }
      }
      
    }
    /* console.log(lista) */
    return lista;
  }

  noEnviarMensaje(){
    this.mensajeVer = false;
  }

  getmensajeVer(){
    return this.mensajeVer
  }
  

  onClick() {
    this.mensajeVer = true;
  }


}
