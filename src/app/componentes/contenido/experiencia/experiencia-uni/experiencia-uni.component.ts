import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-experiencia-uni',
  templateUrl: './experiencia-uni.component.html',
  styleUrls: ['./experiencia-uni.component.css']
})
export class ExperienciaUniComponent {

  @Input() experiencia:any="";

  constructor() {  }

  eliminar(id:Number){

    alert("tocaste el de id: "+id+" y se va a borrar");
  }
}
