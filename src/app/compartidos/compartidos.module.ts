import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent,NavegacionComponent],

})
export class CompartidosModule { }
