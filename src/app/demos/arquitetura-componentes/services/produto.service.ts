import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable()
export class ProdutoService{
    produtos : Produto[] = [];

    constructor(){

        this.produtos = [{
            id: 1,
            nome : 'Teste',
            ativo: true,
            valor: 100,
            imagem: 'celular.jpg'
          },
          {
            id: 2,
            nome : 'Teste 2',
            ativo: true,
            valor: 200,
            imagem: 'GameAssassins.jpg'
          },
          {
            id: 3,
            nome : 'Teste 3',
            ativo: true,
            valor: 300,
            imagem: 'injustice.jpg'
          },
          {
            id: 4,
            nome : 'Teste 4',
            ativo: true,
            valor: 400,
            imagem: 'jogo-rocket.jpg'
          },
          {
            id: 5,
            nome : 'Teste 5',
            ativo: true,
            valor: 500,
            imagem: 'noteBook.png'
          },
          {
            id: 6,
            nome : 'Teste 6',
            ativo: false,
            valor: 600,
            imagem: 'sekiro.jpg'
          }];
    }

    obterTodos(estado: string): Produto[]{

      if(estado === 'ativos'){
        return this.produtos.filter(produto => produto.ativo);
      }
      
      return this.produtos;
    }

    obterPorId(id: number){
        return this.produtos.find(produto => produto.id == id);
    }
}