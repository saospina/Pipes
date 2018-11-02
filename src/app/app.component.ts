import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = 'Pipes working';
  nombre = 'Sergio';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  PI = Math.PI;
  numero = 0.243;
  moneda = 1234.;
  heroe = {
    nombre: 'Logan',
    clace: 'Wolverine',
    edad: '500',
    direccion: {
      casa: '19',
      calle: '26'

    }

  };

  varlorDePromesa = new Promise(( resolve, reject ) => {
    setTimeout(() => resolve('Legó la data'), 3500);
  });

}
