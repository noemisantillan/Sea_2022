import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedeComponent } from './pages/sede/sede.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';

const routes: Routes = [ {
  path:'',
  children: [
{ path:'sede',component:SedeComponent},
{ path:'documentos',component:DocumentosComponent},
{ path:'**', redirectTo:'sede'},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadoresRoutingModule { }
