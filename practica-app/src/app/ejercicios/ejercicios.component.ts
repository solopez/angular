import { Component } from '@angular/core';
import { Ej2Component } from "../ej2/ej2.component";
import { Ej3Component } from "../ej3/ej3.component";
import { Ej4Component } from "../ej4/ej4.component";

@Component({
  selector: 'app-ejercicios',
  imports: [Ej2Component, Ej3Component, Ej4Component],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}
