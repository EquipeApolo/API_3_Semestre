import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Reverser extends FatorCalculo{

    private aircraft: Aircraft;
    constructor(aircraft: Aircraft,input: number, temGelo: boolean, BRK: number){
        super();
        this.valor = input;
        this.temGelo = temGelo;
        this.BRK = BRK;
        this.aircraft = aircraft
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
      
    }

    public calcular(): number {
        if(this.aircraft.getFlapValue == 220)
        {
            if(this.temGelo = false)
            {
                if(this.BRK == 1){
                    return this.valor * 24;
                }else if(this.BRK == 2){
                    return this.valor * 9;
                }else if(this.BRK == 3){
                    return this.valor * 0;
                }else{
                    return this.valor * 0;
                }
            } else {
                if(this.BRK == 1){
                    return this.valor * 30;
                }else if(this.BRK == 2){
                    return this.valor * 13;
                }else if(this.BRK== 3){
                    return this.valor * 0;
                }else{
                    return this.valor * 0;
                }
            }
        } else {
            if(this.temGelo = false)
            {
                if(this.BRK == 1){
                    return this.valor * 16;
                }else if(this.BRK == 2){
                    return this.valor * 3;
                }else if(this.BRK== 3){
                    return this.valor * 0;
                }else{
                    return this.valor * 0;
                }
            } else {
                if(this.BRK == 1){
                    return this.valor * 16;
                }else if(this.BRK == 2){
                    return this.valor * 3;
                }else if(this.BRK== 3){
                    return this.valor * 0;
                }else{
                    return this.valor * 0;
                }
            }
        }
        return 0;
    }
    
}