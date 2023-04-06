import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})
export class ConocimientoComponent {
  conocimiento:any;
  habilidadesBlandas:any;
  lenguajeProgrmacion:any;
  herramientas:any;
  miPorfolio:any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.conocimiento;
      this.conocimiento=data.contenido.conocimiento.conocimiento;
      this.habilidadesBlandas = this.conocimiento.find((user: any) => user.saber == "habilidadesBlandas");
      this.lenguajeProgrmacion = this.conocimiento.find((user: any) => user.saber == "lenguajeProgrmacion");
      this.herramientas = this.conocimiento.find((user: any) => user.saber == "herramientas");
      console.log(this.habilidadesBlandas);
    });

  }

}
