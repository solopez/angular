import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ej4',
  imports: [NgFor],
  templateUrl: './ej4.component.html',
  styleUrl: './ej4.component.css'
})
export class Ej4Component {
array= [{
    nombre: 'Chiara',
    edad: 28,
    esEstudiante: true,
  },
  {
   nombre: 'Juli',
    edad: 20,
    esEstudiante: true,
  },
  {
    nombre: 'Sol',
    edad: 30,
    esEstudiante: false,
  },
  {
    nombre: 'Sabri',
    edad: 32,
    esEstudiante: false,
  }
]
}
