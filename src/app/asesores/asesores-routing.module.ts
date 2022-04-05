import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { EnfoquesComponent } from './pages/enfoques/enfoques.component';
import { MaterialasesoresComponent } from './pages/materialasesores/materialasesores.component';

const routes: Routes = [ {
    path:'',
    children: [
  { path:'perfil',component:PerfilComponent},
  { path:'capacitacion',component:CapacitacionComponent},
  { path:'enfoques',component: EnfoquesComponent},
  { path:'materialasesores',component: MaterialasesoresComponent},
  { path:'**', redirectTo:'perfil'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesoresRoutingModule { }
