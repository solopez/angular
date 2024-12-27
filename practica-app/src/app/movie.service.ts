import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    { title: "The Shawshank Redemption", year: 1994, description: "Two imprisoned men bond over several years." },
    { title: "The Godfather", year: 1972, description: "The aging patriarch of an organized crime dynasty transfers control." },
    { title: "The Dark Knight", year: 2008, description: "Batman faces the Joker's chaos in Gotham City." },
    { title: "Forrest Gump", year: 1994, description: "A slow-witted but kind-hearted man navigates historical events." },
    { title: "Inception", year: 2010, description: "A thief enters dreams to plant ideas in a CEO's mind." },
    { title: "The Matrix", year: 1999, description: "A hacker learns the truth about his reality and fights its controllers." },
    { title: "Pulp Fiction", year: 1994, description: "Mobsters' lives intertwine in a series of violent events." },
    { title: "Titanic", year: 1997, description: "A love story unfolds aboard the ill-fated RMS Titanic." },
    { title: "Interstellar", year: 2014, description: "Explorers travel through a wormhole to save humanity." },
    { title: "Fight Club", year: 1999, description: "Two men form a fight club that evolves into something larger." }
  ];

  constructor(private  http:  HttpClient) {}


  getMovie() {
    return this.movies;
   }

   getEpisodes(): Observable<{Episodes: []}>{
    return  this.http.get<{Episodes: []}>('https://www.omdbapi.com/?apikey=2ff6c6e4&t=From&Season=1')
    } 
}
