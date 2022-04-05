import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoresRoutingModule } from './asesores-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';

import { CompartidosModule } from '../compartidos/compartidos.module';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { EnfoquesComponent } from './pages/enfoques/enfoques.component';
import { MaterialasesoresComponent } from './pages/materialasesores/materialasesores.component';


@NgModule({
  declarations: [
    PerfilComponent,
    CapacitacionComponent,
    EnfoquesComponent,
    MaterialasesoresComponent
  ],
  imports: [
    CommonModule,
    AsesoresRoutingModule,
    CompartidosModule,
    MDBBootstrapModulesPro.forRoot(),
   ]
})
export class AsesoresModule { }
