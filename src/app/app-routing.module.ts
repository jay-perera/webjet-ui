import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './Components/movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './Components/movie/movie-detail/movie-detail.component';




const routes: Routes = [

  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: 'movies',
    component: MovieListComponent ,
    children: [
      {
        path: ':id',
        component: MovieDetailComponent ,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
