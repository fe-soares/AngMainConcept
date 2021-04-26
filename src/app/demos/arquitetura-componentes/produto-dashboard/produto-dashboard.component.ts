import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) { }

  produtos: Produto[] = [];

  @ViewChild('teste', {static : false}) mensagemTela: ElementRef = {} as ElementRef;

  ngOnInit(): void {
    this.produtos = this.route.snapshot.data['produtos'];
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }

  ngAfterViewInit(): void {
    let clickTexto : Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(()=>{
      alert('clickou no texto');
      return;
    });
  }

}
