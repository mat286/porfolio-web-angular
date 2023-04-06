import { Component, Input } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-cono-uni',
  templateUrl: './cono-uni.component.html',
  styleUrls: ['./cono-uni.component.css']
})
export class ConoUniComponent {
  @Input() conocimientos:any;

  habilidadesBlandas:any;
  miPorfolio:any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.conocimiento;
      this.habilidadesBlandas = this.conocimientos.find((user: any) => user.saber == "habilidadesBlandas");
      console.log(this.habilidadesBlandas);
    });

  }

  lenguajeProgrmacion():void{

    
  }
  herramientas(): void{
    alert("herramientas");
    console.log("sssssssssssssssssssssssssssss");
  }

}
