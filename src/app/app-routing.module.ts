import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaComponent } from './componentes/contenido/acerca/acerca.component';
import { EducacionComponent } from './componentes/contenido/educacion/educacion.component';
import { ConocimientoComponent } from './componentes/contenido/conocimiento/conocimiento.component';
import { ExperienciaComponent } from './componentes/contenido/experiencia/experiencia.component';
import { ProyectoComponent } from './componentes/contenido/proyecto/proyecto.component';
import { ContactoComponent } from './componentes/contenido/contacto/contacto.component';


const routes: Routes = [
  {path: 'inicio', component: AcercaComponent},
  {path: 'Educacion', component: EducacionComponent},
  {path: 'Conocimiento', component: ConocimientoComponent},
  {path: 'Experiencia', component: ExperienciaComponent},
  {path: 'Proyecto', component: ProyectoComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'https://porfolio-784e6.web.app'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


