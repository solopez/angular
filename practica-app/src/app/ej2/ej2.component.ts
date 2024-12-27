import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ej2',
  imports: [NgIf],
  templateUrl: './ej2.component.html',
  styleUrl: './ej2.component.css'
})
export class Ej2Component {
  nombre: string = "Chiara";
  edad: number = 28;
  esEstudiante: boolean = false;
}
