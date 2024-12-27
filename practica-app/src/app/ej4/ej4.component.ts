import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Ej9Service } from '../ej9.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-ej4',
  imports: [NgFor],
  templateUrl: './ej4.component.html',
  styleUrl: './ej4.component.css'
})
export class Ej4Component {
  

personas: Persona []=[];

constructor(private ej9Service: Ej9Service) {}

ngOnInit(): void {
  this.personas = this.ej9Service.obtenerArray();
}

}
