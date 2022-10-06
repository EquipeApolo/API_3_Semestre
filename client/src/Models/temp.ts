import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Temperature extends FatorCalculo{

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
        if(this.unidadeMedida != unitMeasurement){
            this.valor = (this.valorInput - 32) / 1.8
        }else{
            this.valor = this.valorInput;
        }
    }

    public calcular(): number {
        this.converterSistema(UnitMeasurement.INTERNACIONAL);
        if(this.aircraft.getFlapValue == 220){
            if(this.temGelo == false){
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 18;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 20;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 27;
                    else //LO
                        return this.valor/5 * 45;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -10 * -1;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -11 * -1;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -14 * -1;
                    else //LO
                        return this.valor/5 * -22 * -1;
                }
            } else {
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 20;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 22;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 30;
                    else //LO
                        return this.valor/5 * 50;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -11 * -1;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -13 * -1;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -16 * -1;
                    else //LO
                        return this.valor/5 * -25 * -1;
                }
            }
        } else {
            if(this.temGelo == false){
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 17;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 19;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 26;
                    else //LO
                        return this.valor/5 * 42;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -9 * -1;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -10 * -1;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -13 * -1;
                    else //LO
                        return this.valor/5 * -21 * -1;
                }
            } else {
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 17;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 19;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 26;
                    else //LO
                        return this.valor/5 * 42;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -9 * -1;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -10 * -1;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -13 * -1;
                    else //LO
                        return this.valor/5 * -21 * -1;
                }
            }
        }
        return 0;
    }
    
}