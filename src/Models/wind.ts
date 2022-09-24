import { UnitMeasurement } from "../Enuns/enuns";
import aircraft from "./aircraft";
import FatorCalculo from "./fator";

export default class Wind extends FatorCalculo{

    constructor(input: number, unidadeMedida: UnitMeasurement, temGelo: boolean){
        super();
        this.valorInput = input;
        this.unidadeMedida = unidadeMedida;
        this.temGelo = temGelo;
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
        if(unitMeasurement == UnitMeasurement.IMPERIAL){
            this.valor = this.valorInput / 1.825
        }
    }

    public calcular(aircraft: aircraft): number {
        if(aircraft.getFlapValue == 220){
            if(this.referencia > 10){
                return this.valor * 10;
            }else{
                return this.valor * 5;
            }
        }
        return 0;
    }
    
}