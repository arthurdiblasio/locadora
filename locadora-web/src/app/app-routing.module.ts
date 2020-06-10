import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'add', component: AddMovieComponent },
  { path: ':id/edit', component: AddMovieComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
