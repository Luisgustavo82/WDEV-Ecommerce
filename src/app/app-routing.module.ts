import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LancamentosComponent} from './lancamentos/lancamentos.component';
 
const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'index',
    component: AppComponent
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'lancamentos',
    component: LancamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
