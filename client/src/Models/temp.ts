import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Temperature extends FatorCalculo{

    private aircraft: Aircraft;
    private table: Table;
    constructor(aircraft: Aircraft, input: number, unidadeMedida: UnitMeasurement, temGelo: boolean, table: Table){
        super();
        this.valorInput = input;
        this.unidadeMedida = unidadeMedida;
        this.temGelo = temGelo;
        this.aircraft = aircraft;
        this.table = table;
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
        if(this.unidadeMedida !== unitMeasurement){
            this.valor = (this.valorInput - 32) / 1.8
        }else{
            this.valor = this.valorInput;
        }
    }

    public calcular(): number {
        this.converterSistema(UnitMeasurement.INTERNACIONAL);
        if(this.temGelo){
            if(this.valor > 0){
                return this.valor / this.table.tempReference * this.table.tempAboveWithIce
            }else if (this.valor < 0){
                return this.valor / this.table.tempReference * this.table.tempBellowWithIce
            }else{
                return 0
            }
        } else {
            if(this.valor > 0){
                return this.valor / this.table.tempReference * this.table.tempAboveWithoutIce
            } else if(this.valor < 0) {
                return this.valor / this.table.tempReference * this.table.tempBellowWithoutIce
            }else{
                return 0
            }
        }
    }
    
}