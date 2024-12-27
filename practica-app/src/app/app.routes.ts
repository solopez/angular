import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { SeriesComponent } from './series/series.component';

export const routes: Routes = [
  { path: 'pelis', component: MoviesComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: 'series',component: SeriesComponent },
  { path: '', redirectTo: '/pelis', pathMatch: 'full' }
];
