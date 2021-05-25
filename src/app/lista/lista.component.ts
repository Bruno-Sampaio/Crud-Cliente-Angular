import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  public lista: Array<{nome: string, valor: string}> = [];
  constructor() { }

  ngOnInit(): void {
  }
  addProduto() {}
}