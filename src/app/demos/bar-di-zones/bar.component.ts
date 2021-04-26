import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, Injector, OnInit, TestabilityRegistry } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService, BarServiceMock, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    /*{
      provide: BarService, 
      useClass: BarServiceMock//é interesante pra testar alguma coisa
    },*/
    {
      provide: BarService,
      useFactory: BarFactory,
      deps: [HttpClient, Injector]
    },
    { provide: BebidaService, useExisting: BarService}
  ]
})
export class BarComponent implements OnInit {

  ConfigManual: BarUnidadeConfig = {} as BarUnidadeConfig;
  Config: BarUnidadeConfig = {} as BarUnidadeConfig;
  barBebida1: string = '';
  barBebida2: string = '';
  dadosUnidade: string = '';

  constructor(
    private barSersive: BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private BebidaService: BebidaService
    ) {

   }

  ngOnInit(): void {
    this.barBebida1 = this.barSersive.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;

    this.dadosUnidade = this.barSersive.obterUnidade();
    this.barBebida2 = this.BebidaService.obterBebidas();
  }
}
