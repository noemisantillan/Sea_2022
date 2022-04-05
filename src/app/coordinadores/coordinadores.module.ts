import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadoresRoutingModule } from './coordinadores-routing.module';
import { SedeComponent } from './pages/sede/sede.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';

import { CompartidosModule } from '../compartidos/compartidos.module';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


@NgModule({
  declarations: [
    SedeComponent,
    DocumentosComponent
  ],
  imports: [
    CommonModule,
    CoordinadoresRoutingModule,
    CompartidosModule,
    MDBBootstrapModulesPro.forRoot(),
  ]
})
export class CoordinadoresModule { }
