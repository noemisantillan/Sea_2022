import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducamediaComponent } from './educamedia.component';

const routes: Routes = [
  {
    path:'',
    children: [
  { path:':asg',component: EducamediaComponent},
  { path:'**', redirectTo:'lyc'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducamediaRoutingModule { }
