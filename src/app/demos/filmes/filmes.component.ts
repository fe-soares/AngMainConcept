import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { ImagePipes } from './image.pipes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers: [
    ImagePipes
  ],
  styles: [
  ]
})
export class FilmesComponent implements OnInit {

  filmes: Filme[] = [];
  mapped: Filme[] = [];

  constructor(private imageFormat: ImagePipes) { }

  ngOnInit(): void {
    this.filmes = [
      {
        nome: 'Um sonho de liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.00,
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '5133269880'
      },
      {
        nome: 'Poderoso chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.00,
        imagem: 'poderosoChefao.jpg',
        tamanho: '1342177280'
      },
      {
        nome: 'Batman o cavaleiro das travas',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.00,
        imagem: 'Batman2008.jpg',
        tamanho: '719974720'
      },
      {
        nome: 'o poderoso chefão 2',
        dataLancamento: new Date('01/12/1974'),
        valor: 120.00,
        imagem: 'poderosoChefao2.jpg',
        tamanho: '1254589899'
      },
      {
        nome: 'Pulp fiction: tempo de violencia',
        dataLancamento: new Date('01/08/1994'),
        valor: 190.00,
        imagem: 'pulpFiction.jpg',
        tamanho: '773039680'
      }
    ];

    this.mapped = this.filmes.map(filme =>{
      return {
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        valor: filme.valor,
        tamanho: filme.tamanho,
        imagem: this.imageFormat.transform(filme.imagem, 'default', true)
      }
    })
  }

}
