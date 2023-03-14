import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'juan pablo';
  nombreUpper: string = 'JUAN PABLO';
  nombreCompleto: string = 'JuAn PaBlO TaBaReS';


  fecha: Date = new Date();


}
