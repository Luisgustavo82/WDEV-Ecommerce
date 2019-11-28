import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos;
  constructor() {
    this.produtos = [
      new Produto ('Caneta', 2.50, 'http://encurtador.com.br/boDE5'),
      new Produto ('Caderno', 10.00, 'http://encurtador.com.br/ajlsw'),
      new Produto ('Lápis', 1.50, 'http://encurtador.com.br/tvNW4'),
      new Produto ('Borracha', 1.25, 'http://encurtador.com.br/eisO2'),
    ]
   }

  ngOnInit() {
  }

}
