import { Component, ElementRef, ViewChild } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
;

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})
export class ConocimientoComponent {

  varibleId: Number = 0;
  mostrar:boolean=false;
  admin:boolean=false;

  miPorfolio: any;

  objeto: any = { "nombre": "", "img": "", "tipo": "", "porcentaje": "" }

  nombre: string = "";
  img: String = "";
  tipo: String = "";
  porcentaje: number = 0;

  herramientas: boolean = true;
  lenguajeProgrmacion: boolean = true;
  habilidadesBlandas: boolean = false;
  framework: boolean = true;
  Avanzado: boolean = true;
  Basico: boolean = true;

  @ViewChild('exampleModalE') modalEdi!: ElementRef;
  @ViewChild('exampleModaleliminar') modalEli!: ElementRef;

  Loading:boolean=false;

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.cargaData();
    this.mostrarBoton();
  }

  public cargaData() {
    this.datosPorfolio.getDatos("Conocimientos/traer").subscribe(respuesta => {
      this.miPorfolio = respuesta;
    });
  }

  mostrarBoton(){
    let pepe = this.datosPorfolio.validadors();
    this.mostrar = pepe.vista;
    this.admin = pepe.edicion;
  }

  mostrarIdParaEliminar(id: Number) {
    this.varibleId = id;
    this.modalEdi.nativeElement.classList.add('show'); // agrega la clase 'show' al elemento modal
    document.body.classList.add('modal-open'); // agrega la clase 'modal-open' al cuerpo del documento
  }

  mostrarIdParaEditar(id: Number) {
    this.varibleId = id;
    this.modalEli.nativeElement.classList.add('show'); // agrega la clase 'show' al elemento modal
    document.body.classList.add('modal-open'); // agrega la clase 'modal-open' al cuerpo del documento
  }

  filtro(): any[] {
    let lista: any[] = [];
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.tipo === "lenguajeProgrmacion" && this.lenguajeProgrmacion || element.tipo === "herramienta" && this.herramientas || element.tipo === "habilidadesBlanda" && this.habilidadesBlandas || element.tipo === "framework" && this.framework) {
        if (element.porcentaje >= 50 && this.Avanzado || element.porcentaje < 50 && this.Basico) {
          lista.push(element);
        }
      }

    }
    return lista;
  }
  agregar() {
    this.Loading=true;
    if (this.admin==true) {
      this.objeto = { "nombre": this.nombre, "img": this.img, "tipo": this.tipo, "porcentaje": this.porcentaje }

    this.datosPorfolio.crearDatos("Conocimientos/crear", this.objeto).subscribe(respuesta => {
    });    
    }
    setTimeout( () => {
      window.location.reload();
    }, 4000);
    

  }
  eliminar() {
    this.Loading=true;
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId && this.admin==true) {
        this.datosPorfolio.eliminarDatos("Conocimientos/borrar/" + this.varibleId).subscribe(respuesta => {
        });
      }
    }
    setTimeout( () => {
      window.location.reload();
    }, 4000);
  }
  editar() {
    this.Loading=true;
    for (let i = 0; i < this.miPorfolio.length; i++) {
      const element = this.miPorfolio[i];
      if (element.id == this.varibleId && this.admin==true) {

        if (this.nombre != "") element.nombre = this.nombre;
        if (this.img != "") element.img = this.img;
        if (this.tipo != "") element.tipo = this.tipo;
        if (this.porcentaje != 0) element.porcentaje = this.porcentaje;

        this.datosPorfolio.editarDatos("Conocimientos/editar/" + this.varibleId, element).subscribe(respuesta => {
        });
      }
    }
    setTimeout( () => {
      window.location.reload();
    }, 4000);
  }

}
