import { Component } from '@angular/core';
import { Ej2Component } from './components/ej2/ej2.component';
import { Ej3Component } from './components/ej3/ej3.component';
import { Ej4Component } from './components/ej4/ej4.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [Ej2Component, Ej3Component, Ej4Component, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-app';
}
