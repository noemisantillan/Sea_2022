import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducamediaComponent } from './educamedia.component';

const routes: Routes = [
  {
    path:'',
    children: [
  { path:':asg/:nivel',component: EducamediaComponent},
  { path:'**', redirectTo:'/home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducamediaRoutingModule { }
