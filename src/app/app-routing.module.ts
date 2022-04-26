import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  { path: 'estudiante',
    loadChildren:()=> import('./estudiante/estudiante.module').then(m => m.EstudianteModule)
  },

  { path: 'asesores',
  loadChildren:()=> import('./asesores/asesores.module').then(m => m.AsesoresModule)
  },

  { path: 'coordinadores',
    loadChildren:()=> import('./coordinadores/coordinadores.module').then(m => m.CoordinadoresModule)
  },
  { path: 'audiovisuales',
    loadChildren:()=> import('./educamedia/educamedia.module').then(m => m.EducamediaModule)
  },

  { path: '**', redirectTo:'home' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
