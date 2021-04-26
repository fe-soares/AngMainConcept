import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: [
  ]
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto = {} as Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoSErvice: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        let produto = this.produtoSErvice.obterPorId(params['id']);
        if(produto){
          this.produto = produto;
        }
      });
  }

  salvar(){
    //comunicar o back
    this.router.navigate(['/produtos']);
  }

}
