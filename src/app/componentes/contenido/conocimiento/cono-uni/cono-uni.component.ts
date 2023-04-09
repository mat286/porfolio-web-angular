import { Component, Input } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-cono-uni',
  templateUrl: './cono-uni.component.html',
  styleUrls: ['./cono-uni.component.css']
})
export class ConoUniComponent {
  @Input() conocimientos:any;

  miPorfolio:any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void { 

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.conocimiento;
    });

  }

  lenguajeProgrmacion():void{

    
  }
  herramientas(): void{
    alert("herramientas");
    console.log("sssssssssssssssssssssssssssss");
  }

}
