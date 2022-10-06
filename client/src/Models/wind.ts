import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Wind extends FatorCalculo{

    private aircraft: Aircraft;
    constructor(aircraft: Aircraft,input: number, unidadeMedida: UnitMeasurement, temGelo: boolean,BRK: number){
        super();
        this.valorInput = input;
        this.unidadeMedida = unidadeMedida;
        this.temGelo = temGelo;
        this.BRK = BRK;
        this.aircraft = aircraft;
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
        if(this.unidadeMedida != unitMeasurement){
            this.valor = this.valorInput / 1.856
        }else{
            this.valor = this.valorInput;
        }
    }

    calcular(): number {
        this.converterSistema(UnitMeasurement.IMPERIAL);

        if(this.aircraft.getFlapValue == 220){
            if(this.temGelo == false){
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 101;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 108;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 147;
                    else //LO
                        return this.valor/5 * 245;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -22;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -26;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -33;
                    else //LO
                        return this.valor/5 * -51;
                }
            } else {
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 111;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 113;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 154;
                    else //LO
                        return this.valor/5 * 257;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -23;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -27;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -34;
                    else //LO
                        return this.valor/5 * -53;
                }
            }
        } else {
            if(this.temGelo == false){
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 95;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 106;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 144;
                    else //LO
                        return this.valor/5 * 239;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -22;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -26;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -33;
                    else //LO
                        return this.valor/5 * -50;
                }
            } else {
                if(this.valor > 0){
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * 95;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * 1066;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * 144;
                    else //LO
                        return this.valor/5 * 239;
                } else {
                    if(this.BRK == 1) //MAX MAN
                        return this.valor/5 * -22;
                    else if (this.BRK == 2) //HI
                        return this.valor/5 * -26;
                    else if (this.BRK == 3) //MED
                        return this.valor/5 * -33;
                    else //LO
                        return this.valor/5 * -50;
                }
            }
        }
        return 0;
    }
    
}