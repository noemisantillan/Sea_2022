import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducamediaRoutingModule } from './educamedia-routing.module';
import { EducamediaComponent } from './educamedia.component';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { MDBBootstrapModulesPro,WavesModule, TableModule, InputsModule } from 'ng-uikit-pro-standard';
import { Tabla1Component } from './tabla1/tabla1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Tabla1Component,
    EducamediaComponent
  ],
  imports: [
    CommonModule,
    EducamediaRoutingModule,
    CompartidosModule,
    FormsModule, 
    ReactiveFormsModule,
    MDBBootstrapModulesPro.forRoot(),
    TableModule,
    WavesModule,
    InputsModule,
   
  ]
})
export class EducamediaModule { }
