import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Ej3Component } from './components/ej3/ej3.component';
import { Ej4Component } from './components/ej4/ej4.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, Ej3Component, Ej4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-app';
}
