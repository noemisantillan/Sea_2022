import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaComponent } from './pages/sistema/sistema.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';

const routes: Routes = [ {
  path:'',
  children: [
{ path:'sistema',component:SistemaComponent},
{ path:'cursos',component:CursosComponent},
{ path:'materiales',component:MaterialesComponent},
{ path:'**', redirectTo:'sistema'},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
