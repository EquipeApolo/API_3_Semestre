import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Vap extends FatorCalculo{

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
        if(unitMeasurement == UnitMeasurement.INTERNACIONAL){
            this.valor = this.valorInput * 1.944;
        }else{
            this.valor = this.valorInput;
        }
    }

    public calcular(): number {
        this.converterSistema(UnitMeasurement.IMPERIAL);
        if(this.aircraft.getFlapValue == 220)
        {
            if(this.temGelo == false)
            {
                if(this.BRK == 1){
                    return this.valor/5 * 110;
                }else if(this.BRK == 2){
                    return this.valor/5 * 114;
                }else if(this.BRK == 3){
                    return this.valor/5 * 149;
                }else{
                    return this.valor/5 * 247;
                }
            } else {
                if(this.BRK == 1){
                    return this.valor / 5 * 115;
                }else if(this.BRK == 2){
                    return this.valor / 5 * 119;
                }else if(this.BRK== 3){
                    return this.valor / 5 * 155;
                }else{
                    return this.valor / 5 * 251;
                }
            }
        } else {
            if(this.temGelo = false)
            {
                if(this.BRK == 1){
                    return this.valor / 5 * 100;
                }else if(this.BRK == 2){
                    return this.valor / 5 * 110;
                }else if(this.BRK== 3){
                    return this.valor / 5 * 147;
                }else{
                    return this.valor / 5 * 242;
                }
            } else {
                if(this.BRK == 1){
                    return this.valor / 5 * 100;
                }else if(this.BRK == 2){
                    return this.valor / 5 * 110;
                }else if(this.BRK== 3){
                    return this.valor / 5 * 147;
                }else{
                    return this.valor / 5 * 242;
                }
            }
        }
        return 0;
    }
    
}