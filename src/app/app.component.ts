import { Component } from "@angular/core";
import { PorfolioService } from "./servicios/porfolio.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolioangular';
  Loading = true;
  tardar=false;
  constructor(private datosPorfolio: PorfolioService) {

  }


  ngOnInit() {
    setTimeout(() => {
      this.tardar = true;
    }, 10000);//10000
    this.datosPorfolio.getDatos("sobremi/traer").subscribe(respuesta => {
      if (respuesta!="") {
        setTimeout(() => {
          this.Loading = false;
        }, 2000);//2000
      }
    });
    
  }
}
