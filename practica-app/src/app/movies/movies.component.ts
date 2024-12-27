import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MovieListComponent } from "../movie-list/movie-list.component";

@Component({
  selector: 'app-movies',
  imports: [SearchBarComponent, MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
