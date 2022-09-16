import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component'
import {RegisterComponent} from './views/register/register.component'
import {DashboardComponent} from './views/dashboard/dashboard.component'
import {WorkersComponent} from './views/worker-management/workers/workers.component'
import {NewWorkerComponent} from './views/worker-management/new-worker/new-worker.component'
import {UpdateWorkerComponent} from './views/worker-management/update-worker/update-worker.component'


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'workers', component:WorkersComponent},
  {path:'new-worker', component:NewWorkerComponent},
  {path:'update-worker', component:UpdateWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, DashboardComponent, WorkersComponent,
NewWorkerComponent,UpdateWorkerComponent]
