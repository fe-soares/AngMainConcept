import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public contadorClique: number = 1;
  public urlImg: string = "../assets/image/logos/angular/cartman.jpg";
  public nome: string ="";

  AdicionarClique(){
    this.contadorClique++;
  }

  perdaDeFoco(event: any){
    //this.nome = event.target.value;
  }
}
