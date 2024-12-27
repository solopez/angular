import { Component } from '@angular/core';
import { Movie } from '../movie';
import { NgFor, NgIf } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [NgFor,NgIf,MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  
  movies: Movie []=[];
  selectedMovie: Movie = {title:'',year:0, description:''};

  constructor(private movieService : MovieService){}

  onMovieSelected(movieTitle: string): void  {
    this.selectedMovie.title = movieTitle;
  }

  ngOnInit(): void {
    this.movies = this.movieService.getMovie(); 
 }
}
