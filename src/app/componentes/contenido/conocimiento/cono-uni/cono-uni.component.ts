import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-cono-uni',
  templateUrl: './cono-uni.component.html',
  styleUrls: ['./cono-uni.component.css']
})
export class ConoUniComponent {

  @Output() eliminar = new EventEmitter();
  @Output() editar = new EventEmitter();
  @Input() conocimientos: any;

  contenido: any;

  varibleId:any;

  nombre: string = "";
  img: String = "";
  tipo: String = "";
  porcentaje: number = 0;

  constructor() { }

  ngOnInit(): void {


  }
  
  mostrarIdEliminar(id:string){
    this.varibleId = id;
    this.eliminar.emit(this.varibleId);
  }

  mostrarIdEditar(id:string){
    this.varibleId = id;
    this.editar.emit(this.varibleId);
  }

}
