import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  miPorfolio:any;
  mensajeVer:boolean=false;

/*   img:String="";
  urlCv:String="";
  info:String=""; */
  form: any;

  constructor(private datosPorfolio: PorfolioService, private formBuilder: FormBuilder) { 
/*     this.form = this.formBuilder.group({
      img: ['',],
      urlCv: ['', ],
      info: ['', ]
    }); */
  }

/*   ngOnInit(): void {

    this.datosPorfolio.obtenerdatos().subscribe(data=>{ 
      console.log(data);
      this.miPorfolio=data.contenido.Acerca;
    });

  } */
  ngOnInit(): void {
    this.cargaData();
  }

  public cargaData(){
    this.datosPorfolio.getDatos("sobremi/traer").subscribe(respuesta=>{
      this.miPorfolio = respuesta[0];
    });
  }

  noEnviarMensaje(){
    this.mensajeVer = false;
  }
  EnviarMensaje(){
    alert();
    
  }

  getmensajeVer(){
    return this.mensajeVer
  }
  

  onClick() {
    this.mensajeVer = true;
  }

  onEnviar(event: Event) {
    /* // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    alert(this.form.urlCv); */

  }

}
