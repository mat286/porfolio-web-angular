import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-experiencia-uni',
  templateUrl: './experiencia-uni.component.html',
  styleUrls: ['./experiencia-uni.component.css']
})
export class ExperienciaUniComponent {

  @Output() eliminar = new EventEmitter();
  @Output() editar = new EventEmitter();
  @Input() validador: boolean=false;
  varibleId:any;

  @Input() experiencia:any="";

  constructor() {  }


  mostrarIdEliminar(id:string){
    this.varibleId = id;
    this.eliminar.emit(this.varibleId);
  }

  mostrarIdEditar(id:string){
    this.varibleId = id;
    this.editar.emit(this.varibleId);
  }
}
