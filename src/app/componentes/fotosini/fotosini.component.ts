import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-fotosini',
  templateUrl: './fotosini.component.html',
  styleUrls: ['./fotosini.component.css']
})
export class FotosiniComponent {
  miPorfolio: any;
  foto: any;
  fotov: any;
  incremental: number=0;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatos().subscribe(data => {
      console.log(data);
      this.miPorfolio = data;
      this.foto = data.fotosini.fotos;

    });

  }

  dusplayImagenes(): void {
    this.fotov=this.foto[this.incremental];
    console.log(this.fotov)
    if (this.incremental < 3) {
      this.incremental += 1;

    } else {
      this.incremental = 0;
    }
  }
  

  onClick() {
    alert('estas seguro que quieres hacer cambios');
  }

}


/*
let imagenesDisplay = ["fotos/imagen1.jpg", "fotos/imagen2.jpg", "fotos/utn.jpg","fotos/shutterstock_518160529-1250x625.jpg"];
let element = document.getElementById("IMG");
let incremental = 0;




function dusplayImagenes() {

    document.imagen.src = imagenesDisplay[incremental];
    if (incremental < 3) {
        incremental += 1;

    } else {
        incremental = 0;
    }
}

setInterval(dusplayImagenes, 4000);
*/