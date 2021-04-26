import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators  } from '@angular/forms';

import { Usuario } from './models/usuario';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-vaalidation';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[] = [];
  
  usuario!:Usuario;
  formResult: string = '';
  MASKS:any = utilsBr.MASKS;

  validationMessages: ValidationMessages = {};
  displayMessage: DisplayMessage = {};
  genericValidator: GenericValidator;

  mudancasNaoSalvas: boolean = false;
  
  constructor(private fb: FormBuilder) { 
    this.validationMessages = {
      nome:{
        required: 'O nome é requerido',
        minlength: 'O nome precisa ter no minimo 2 caracters'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato invalido'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  cadastroFrom = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    senhaComfirm: ['', Validators.required],
  });

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => 
     fromEvent(formControl.nativeElement, 'blur'));

     merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroFrom);
      this.mudancasNaoSalvas = true;
     });
  }

  adicionarUsuario(){
    if(this.cadastroFrom.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroFrom.value);
      this.formResult = JSON.stringify(this.cadastroFrom.value);

      this.mudancasNaoSalvas = false;
    }
  }

}
