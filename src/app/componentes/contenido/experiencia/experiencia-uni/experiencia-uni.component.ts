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
    console.log(id+"este es el id que tocasteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    alert("tocaste el de id: "+id+" y se va a borrar ");
  }
}
