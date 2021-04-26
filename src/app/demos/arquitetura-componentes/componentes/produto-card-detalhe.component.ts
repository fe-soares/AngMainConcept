import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoRoutingModule } from '../produto.route';


@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'
})

export class ProdutoDetalheComponent{
    @Input()
    produto: Produto = {} as Produto;

    @Output()
    status: EventEmitter<any> = new EventEmitter();

    emitirEvento(){
        this.status.emit(this.produto);
    }
}