import { Component } from '@angular/core';
import { Ej2Component } from './ej2/ej2.component';
import { Ej3Component } from './ej3/ej3.component';
import { Ej4Component } from './ej4/ej4.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from "./movie-list/movie-list.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MovieListComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-app';
}
