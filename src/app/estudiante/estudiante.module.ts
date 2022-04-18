import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { SistemaComponent } from './pages/sistema/sistema.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


@NgModule({
  declarations: [
    SistemaComponent,
    CursosComponent,
    MaterialesComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
   CompartidosModule,
   MDBBootstrapModulesPro.forRoot(),
  ]
})
export class EstudianteModule { }
