import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  miPorfolio: any;
  herramientas: any;

  varibleId: Number = 0;
  mostrar: boolean = false;
  admin: boolean = false;

  nombre: string = "";
  url: string = "";
  img: string = "";
  fecha: string = "";
  info: string = "";

  herramientasCarga: string = "";
  listaHerraAgregar: string[] = [];

  nombreHe: string = "";
  idProyecto: string = "";

  idUltimo: any;

  objeto = { "nombre": "", "url": "", "img": "", "fecha": "", "info": "" }
  objetoHe = { "nombre": "", "idProyecto": "" }

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.cargaData();
    this.mostrarBoton();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("proyectos/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta;
    });
    this.datosPorfolio.getDatos("herramientas/traer").subscribe(respuesta => {
      this.herramientas = respuesta;
    });
  }
  mostrarBoton() {
    let pepe = this.datosPorfolio.validadors();
    this.mostrar = pepe.vista;
    this.admin = pepe.edicion;
  }

  mostrarHerramientas(id: string) {
    const list = [];
    for (let i = 0; i < this.herramientas.length; i++) {
      const element = this.herramientas[i];
      if (element.idProyecto == id) {
        list.push(element);
      }

    }
    return list;
  }

  eliminar() {
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId && this.admin == true) {
        this.datosPorfolio.eliminarDatos("proyectos/borrar/" + this.varibleId).subscribe(respuesta => {
          console.log("oka");
        });
      }
    }
    for (let i = 0; i < this.herramientas.length; i++) {
      const element = this.herramientas[i];
      if (element.idProyecto == this.varibleId && this.admin == true) {
        this.datosPorfolio.eliminarDatos("herramientas/borrar/" + element.id).subscribe(respuesta => {
          console.log("oka");
        });
      }
    }

    setTimeout(function () {
      window.location.reload();
    }, 6000);
  }

  borrarHerra(id: string) {
    for (let i = 0; i < this.listaHerraAgregar.length; i++) {
      const element = this.listaHerraAgregar[i];
      this.objetoHe = { "nombre": element, "idProyecto": id }
      this.datosPorfolio.eliminarDatos("herramientas/borrar/" + this.varibleId).subscribe(respuesta => {
        console.log("oka");
      });
    }
  }

  mostrarId(id: Number) {
    console.log(id);
    this.varibleId = id;

  }

  agregar() {
    if (this.admin == true) {
      this.objeto = { "nombre": this.nombre, "url": this.url, "img": this.img, "fecha": this.fecha, "info": this.info }
      this.datosPorfolio.crearDatos("proyectos/crear", this.objeto).subscribe(response => {
        this.idUltimo = response.id;
        this.enviarHerraBack(response.id);
      });

    }
    setTimeout(function () {
      window.location.reload();
    }, 10000);

  }

  enviarHerraBack(id: string) {
    for (let i = 0; i < this.listaHerraAgregar.length; i++) {
      const element = this.listaHerraAgregar[i];
      this.objetoHe = { "nombre": element, "idProyecto": id }
      this.datosPorfolio.crearDatos("herramientas/crear", this.objetoHe).subscribe(respuesta => {
        console.log("oka");
      });
    }
  }

  editar() {
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId && this.admin == true) {

        if (this.nombre != "") element.nombre = this.nombre;
        if (this.img != "") element.img = this.img;
        if (this.url != "") element.url = this.url;
        if (this.fecha != "") element.fecha = this.fecha;
        if (this.info != "") element.info = this.info;

        this.datosPorfolio.editarDatos("proyectos/editar/" + this.varibleId, element).subscribe(respuesta => {
          console.log("ok");
        });
      }
    }
    if (this.admin == true) {
      for (let i = 0; i < this.herramientas.length; i++) {
        const element = this.herramientas[i];
        console.log(element);
        if (element.idProyecto == this.varibleId) {
          this.datosPorfolio.eliminarDatos("herramientas/borrar/" + element.id).subscribe(respuesta => {
            console.log("oka");
          });
        }

      }
      for (let i = 0; i < this.listaHerraAgregar.length; i++) {
        const element = this.listaHerraAgregar[i];
        this.objetoHe = { "nombre": element, "idProyecto": this.varibleId.toString() }
        console.log("se agregara este: " + this.objetoHe.nombre)
        this.datosPorfolio.crearDatos("herramientas/crear", this.objetoHe).subscribe(respuesta => {
          console.log("oka");
        });
      }
    }


    /* setTimeout(function () {
      window.location.reload();
    }, 10000); */
  }

  agregarHerra() {
    this.listaHerraAgregar.push(this.herramientasCarga);
    this.herramientasCarga = "";
  }

  eliminarHerra() {
    this.listaHerraAgregar.pop();
  }

}