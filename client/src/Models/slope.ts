import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Slope extends FatorCalculo{

    private aircraft: Aircraft;
    constructor(aircraft: Aircraft, input: number, temGelo: boolean, BRK: number){
        super();
        this.valor = input;
        this.temGelo = temGelo;
        this.BRK = BRK;
        this.aircraft = aircraft;
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
        
        
    }

    calcular(): number {
        if(this.aircraft.getFlapValue == 220){
            if(this.temGelo == false){
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/1 * 139;
                    else if (this.BRK == 2) //HI
                        return this.valor/1 * 128;
                    else if (this.BRK == 3) //MED
                        return this.valor/1 * 123;
                    else //LO
                        return this.valor/1 * 131;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/1 * -5;
                    else if (this.BRK == 2) //HI
                        return this.valor/1 * -4;
                    else if (this.BRK == 3) //MED
                        return this.valor/1 * -4;
                    else //LO
                        return this.valor/1 * -8;
                }
            } else {
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/1 * 148;
                    else if (this.BRK == 2) //HI
                        return this.valor/1 * 135;
                    else if (this.BRK == 3) //MED
                        return this.valor/1 * 129;
                    else //LO
                        return this.valor/1 * 138;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/1 * -6;
                    else if (this.BRK == 2) //HI
                        return this.valor/1 * -4;
                    else if (this.BRK == 3) //MED
                        return this.valor/1 * -5;
                    else //LO
                        return this.valor/1 * -9;
                }
            }
        } else {
            if(this.temGelo == false){
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/1 * 127;
                    else if (this.BRK == 2) //HI
                        return this.valor/1 * 118;
                    else if (this.BRK == 3) //MED
                        return this.valor/1 * 114;
                    else //LO
                        return this.valor/1 * 122;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -5;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -3;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -4;
                    else //LO
                        return this.valor/5 * -8;
                }
            } else {
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/1 * 127;
                    else if (this.BRK == 2) //HI
                        return this.valor/1 * 118;
                    else if (this.BRK == 3) //MED
                        return this.valor/1 * 114;
                    else //LO
                        return this.valor/1 * 122;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/1 * -5;
                    else if (this.BRK == 2) //HI
                        return this.valor/1 * -3;
                    else if (this.BRK == 3) //MED
                        return this.valor/1 * -4;
                    else //LO
                        return this.valor/1 * -8;
                }
            }
        }
        return 0;
    }
    
}