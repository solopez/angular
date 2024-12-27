import { Component } from '@angular/core';
import { Movie } from '../movie';
import { NgFor, NgIf } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  imports: [NgFor,NgIf,MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [
    { title: "The Shawshank Redemption", year: 1994, description: "Two imprisoned men bond over several years." },
    { title: "The Godfather", year: 1972, description: "The aging patriarch of an organized crime dynasty transfers control." },
    { title: "The Dark Knight", year: 2008, description: "Batman faces the Joker's chaos in Gotham City." },
    { title: "Forrest Gump", year: 1994, description: "A slow-witted but kind-hearted man navigates historical events." },
    { title: "Inception", year: 2010, description: "A thief enters dreams to plant ideas in a CEO's mind." },
    { title: "The Matrix", year: 1999, description: "A hacker learns the truth about his reality and fights its controllers." },
    { title: "Pulp Fiction", year: 1994, description: "Mobsters' lives intertwine in a series of violent events." },
    { title: "The Fellowship of the Ring", year: 2001, description: "A hobbit begins a journey to destroy a powerful ring." },
    { title: "Interstellar", year: 2014, description: "Explorers travel through a wormhole to save humanity." },
    { title: "Fight Club", year: 1999, description: "Two men form a fight club that evolves into something larger." }
  ];

  selectedMovie: Movie = {title:'',year:0, description:''};

  onMovieSelected(movieTitle: string) {
    this.selectedMovie.title = movieTitle;
  }
}
