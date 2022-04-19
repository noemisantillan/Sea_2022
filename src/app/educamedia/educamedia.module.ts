import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducamediaRoutingModule } from './educamedia-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    EducamediaRoutingModule
  ]
})
export class EducamediaModule { }
