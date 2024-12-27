import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '2ff6c6e4';

  constructor(private http: HttpClient) {}

  getEpisodes(seriesName: string, season: number): Observable<{ Episodes: any[] }> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${seriesName}&Season=${season}`;
    return this.http.get<{ Episodes: any[] }>(url);
  }
}
