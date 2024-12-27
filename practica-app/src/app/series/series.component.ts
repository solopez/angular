import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-series',
  imports: [NgFor,NgIf],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {
  episodes: any[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getEpisodes('From', 1).subscribe(data => {
      this.episodes = data.Episodes;
    });
  }
}