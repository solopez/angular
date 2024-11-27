import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
nombre: string = "Chiara";
edad: number = 28;
esEstudiante: boolean = false;
}

