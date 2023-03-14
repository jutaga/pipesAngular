import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Juan pablo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Hernando', 'Fernando'];
  clientesMapa = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {

    if (this.genero === 'masculino') {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Juan pablo';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Juan pablo',
    edad: 26,
    dirrecion: 'Medellin, Colombia'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Asyn Pipe
  miObservable = interval(1000); //Emite valores de a 1 cada 1000ms

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });
}
