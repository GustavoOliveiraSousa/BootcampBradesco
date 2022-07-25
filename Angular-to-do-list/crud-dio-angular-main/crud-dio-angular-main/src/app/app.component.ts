import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number  = 0;
  nome: string = 'Gustavo Oliveira de Sousa';
  text = ''

  pessoas = [
    {
      nome: 'Gustave',
      sobrenome: 'Eiffel'
    },
    {
      nome: 'Galápagos',
      sobrenome: 'Fetus'
    },
    {
      nome: 'Hércules',
      sobrenome: 'Olimpio'
    },
    {
      nome: 'Apolo',
      sobrenome: 'Notus'
    },
  ];

  constructor() {}

  ngOnInit(){
    let interval = setInterval(() => {
      this.count++; 
      if (this.count == 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome);
  }
}
