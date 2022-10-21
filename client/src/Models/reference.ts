import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Reference extends FatorCalculo{

    private aircraft: Aircraft;
    constructor(aircraft: Aircraft,temGelo: boolean, BRK: number){
        super();
        this.temGelo = temGelo;
        this.BRK = BRK;
        this.aircraft = aircraft;
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
        if(this.unidadeMedida != unitMeasurement){
            this.valor = this.valorInput / 1.825
        }else{
            this.valor = this.valorInput;
        }
    }

    public calcular(): number {
        if(this.aircraft.getFlapValue == 220){
            if(this.temGelo == true){
                if(this.BRK == 1) //MAX MAN
                    return 1115;
                else if (this.BRK == 2) //HI
                    return 1317;
                else if (this.BRK == 3) //MED
                    return 1629;
                else //LO
                    return 2389;

            } else {
                if(this.BRK == 1) //MAX MAN
                    return 1026;
                else if (this.BRK == 2) //HI
                    return 1209;
                else if (this.BRK == 3) //MED
                    return 1485;
                else //LO
                    return 2157;
            }
        } else {
            if(this.temGelo == true){
                if(this.BRK == 1) //MAX MAN
                    return 959;
                else if (this.BRK == 2) //HI
                    return 1156;
                else if (this.BRK == 3) //MED
                    return 1415;
                else //LO
                    return 2045;

            } else {
                if(this.BRK == 1) //MAX MAN
                    return 959;
                else if (this.BRK == 2) //HI
                    return 1156;
                else if (this.BRK == 3) //MED
                    return 1415;
                else //LO
                    return 2045;
            }
        }
        return 0;
    }
    
}