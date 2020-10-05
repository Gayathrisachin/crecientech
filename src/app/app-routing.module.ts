import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'form',component:FormComponent
  },
  {
    path:'update/:id',component:UpdateComponent
  },
  {
    path:'list',component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
