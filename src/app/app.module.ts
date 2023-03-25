import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FotosiniComponent } from './componentes/fotosini/fotosini.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';
import { BarralateralComponent } from './componentes/barralateral/barralateral.component';

import { HttpClientModule } from '@angular/common/http';
import { AcercaComponent } from './componentes/contenido/acerca/acerca.component';
import { EducacionComponent } from './componentes/contenido/educacion/educacion.component';
import { ConocimientoComponent } from './componentes/contenido/conocimiento/conocimiento.component';
import { ExperienciaComponent } from './componentes/contenido/experiencia/experiencia.component';
import { ProyectoComponent } from './componentes/contenido/proyecto/proyecto.component';
import { ContactoComponent } from './componentes/contenido/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FotosiniComponent,
    PiedepaginaComponent,
    BarralateralComponent,
    AcercaComponent,
    EducacionComponent,
    ConocimientoComponent,
    ExperienciaComponent,
    ProyectoComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
