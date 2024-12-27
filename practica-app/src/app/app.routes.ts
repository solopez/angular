import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';

export const routes: Routes = [
  { path: 'pelis', component: MoviesComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: '', redirectTo: '/pelis', pathMatch: 'full' }
];
