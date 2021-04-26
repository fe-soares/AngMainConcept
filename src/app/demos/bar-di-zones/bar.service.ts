import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Injector } from "@angular/core";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";

export function BarFactory(http: HttpClient, injector: Injector){
    return new BarService(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarService{

    constructor(
        private http: HttpClient,
        @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig){}

    public obterUnidade(): string{
        return "Unidade Id: " + this.ApiConfig.unidadeId + "Token "+ this.ApiConfig.unidadeToken;
    }

    obterBebidas():string{
        return 'Bebidas';
    }

    obterPorcoes(): string{
        return 'Porções';
    }

    obterRefeicoes(): string{
        return 'Refeições';
    }
}

@Injectable()
export class BarServiceMock{

    constructor(private http: HttpClient){}

    obterBebidas():string{
        return 'Mock';
    }

    obterPorcoes(): string{
        return 'Porções';
    }

    obterRefeicoes(): string{
        return 'Refeições';
    }
}

export abstract class BebidaService {
    obterBebidas!: () => string;
}