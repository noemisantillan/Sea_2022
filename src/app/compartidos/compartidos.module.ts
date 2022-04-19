import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavegacionComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent,NavegacionComponent,ScrollToTopComponent],

})
export class CompartidosModule { }
