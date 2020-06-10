import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdicionarComponent } from './pages/adicionar-filme/adicionar.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: ':id/editar', component: AdicionarComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
