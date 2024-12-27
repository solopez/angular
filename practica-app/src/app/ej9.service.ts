import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class Ej9Service {

 private personas: Persona []= [{
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

  obtenerArray(){ 
    return this.personas;
  }
}
