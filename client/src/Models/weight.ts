import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Weight extends FatorCalculo{

    private aircraft: Aircraft;
    constructor(aircraft: Aircraft,input: number, unidadeMedida: UnitMeasurement, temGelo: boolean, BRK: number){
        super();
        this.valorInput = input;
        this.unidadeMedida = unidadeMedida;
        this.temGelo = temGelo;
        this.BRK = BRK;
        this.aircraft = aircraft;
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
        // Aqui convertemos caso a unidade de medida escolhida pelo usuário seja IMPERIAL para o sistema de medida INTERNACIONAL, que é o da referência para PESO.
        if(unitMeasurement == UnitMeasurement.IMPERIAL){
            this.valor = this.valorInput / 2.205;
        }else{
            this.valor = this.valorInput;
        }
    }

    calcular(): number {
        this.converterSistema(UnitMeasurement.INTERNACIONAL);
        if(this.aircraft.getFlapValue == 220)
        {
            if(this.temGelo == false)
            {
                if(this.valor > 43000){
                    let peso = this.valor - 43000;
                    if(this.BRK == 1){
                        return peso / 1000 * 16;
                    }else if(this.BRK == 2){
                        return peso / 1000 * 19;
                    }else if(peso== 3){
                        return peso / 1000 * 25;
                    }else{
                        return peso / 1000 * 39;
                    }
                } else{
                    let peso = 43000 - this.valor;
                    if(this.BRK == 1){
                        return peso / 1000 * -17;
                    }else if(this.BRK == 2){
                        return peso / 1000 * -19;
                    }else if(this.BRK == 3){
                        return peso / 1000 * -26;
                    }else{
                        return peso / 1000 * -42;
                    }
                }
            } else {
                if(this.valor > 43000){
                    let peso = this.valor - 43000;
                    if(this.BRK == 1){
                        return peso / 1000 * 18;
                    }else if(this.BRK == 2){
                        return peso / 1000 * 21;
                    }else if(peso== 3){
                        return peso / 1000 * 27;
                    }else{
                        return peso / 1000 * 44;
                    }
                } else{
                    let peso = 43000 - this.valor;
                    if(this.BRK == 1){
                        return peso / 1000 * -18;
                    }else if(this.BRK == 2){
                        return peso / 1000 * -21;
                    }else if(this.BRK == 3){
                        return peso / 1000 * -29;
                    }else{
                        return peso / 1000 * -47;
                    }
                }
            }
        } else {
            if(this.temGelo == false)
            {
                if(this.valor > 43000){
                    let peso = this.valor - 43000;
                    if(this.BRK == 1){
                        return peso / 1000 * 17;
                    }else if(this.BRK == 2){
                        return peso / 1000 * 20;
                    }else if(peso== 3){
                        return peso / 1000 * 26;
                    }else{
                        return peso / 1000 * 41;
                    }
                } else{
                    let peso = 43000 - this.valor;
                    if(this.BRK == 1){
                        return peso / 1000 * -14;
                    }else if(this.BRK == 2){
                        return peso / 1000 * -17;
                    }else if(this.BRK == 3){
                        return peso / 1000 * -23;
                    }else{
                        return peso / 1000 * -36;
                    }
                }
            } else {
                if(this.valor > 43000){
                    let peso = this.valor - 43000;
                    if(this.BRK == 1){
                        return peso / 1000 * 17;
                    }else if(this.BRK == 2){
                        return peso / 1000 * 20;
                    }else if(peso== 3){
                        return peso / 1000 * 26;
                    }else{
                        return peso / 1000 * 41;
                    }
                } else{
                    let peso = 43000 - this.valor;
                    if(this.BRK == 1){
                        return peso / 1000 * -14;
                    }else if(this.BRK == 2){
                        return peso / 1000 * -17;
                    }else if(this.BRK == 3){
                        return peso / 1000 * -23;
                    }else{
                        return peso / 1000 * -36;
                    }
                }
            }
        }
        return 0;
    }
    
}