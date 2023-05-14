import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolioangular';

  mostrarSpinner = true;
  ngOnInit() {
    // Simulamos una carga de página con un timeout de 3 segundos
    setTimeout(() => {
      this.mostrarSpinner = false;
    }, 3000);
  }
}
