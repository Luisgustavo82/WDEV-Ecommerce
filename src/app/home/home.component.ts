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
      new Produto ('Caneta', 2.50),
      new Produto ('Caderno', 10.00),
      new Produto ('Lápis', 1.50),
      new Produto ('Borracha', 1.25),
    ]
   }

  ngOnInit() {
  }

}
