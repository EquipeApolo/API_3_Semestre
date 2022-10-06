import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class AirportAltitude extends FatorCalculo{

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
        if(this.unidadeMedida != unitMeasurement){
            this.valor = this.valorInput * 3.280;
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
                    return this.valor/1000 * 26;
                }else if(this.BRK == 2){
                    return this.valor/1000 * 29;
                }else if(this.BRK == 3){
                    return this.valor/1000 * 39;
                }else{
                    return this.valor/1000 * 63;
                }
            } else {
                if(this.BRK == 1){
                    return this.valor / 1000 * 29;
                }else if(this.BRK == 2){
                    return this.valor / 1000 * 32;
                }else if(this.BRK== 3){
                    return this.valor / 1000 * 43;
                }else{
                    return this.valor / 1000 * 70;
                }
            }
        } else {
            if(this.temGelo = false)
            {
                if(this.BRK == 1){
                    return this.valor / 1000 * 17;
                }else if(this.BRK == 2){
                    return this.valor / 1000 * 20;
                }else if(this.BRK== 3){
                    return this.valor / 1000 * 26;
                }else{
                    return this.valor / 1000 * 41;
                }
            } else {
                if(this.BRK == 1){
                    return this.valor / 1000 * 17;
                }else if(this.BRK == 2){
                    return this.valor / 1000 * 20;
                }else if(this.BRK== 3){
                    return this.valor / 1000 * 26;
                }else{
                    return this.valor / 1000 * 41;
                }
            }
        }
        return 0;
    }
    
}