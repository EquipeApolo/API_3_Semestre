import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Temperature extends FatorCalculo{

    private aircraft: Aircraft;
    private table: Table;
    constructor(aircraft: Aircraft, input: number, unidadeMedida: UnitMeasurement, temGelo: boolean, BRK: number, table: Table){
        super();
        this.valorInput = input;
        this.unidadeMedida = unidadeMedida;
        this.temGelo = temGelo;
        this.BRK = BRK;
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
            if(this.valor > this.table.tempReference){
                let peso = this.valor - this.table.tempReference;
                return peso / 5 * this.table.tempAboveWithIce
            } else {
                let peso = this.table.tempReference - this.valor;
                return peso / 5 * this.table.tempBellowWithIce
            }
        } else {
            if(this.valor > this.table.tempReference){
                let peso = this.valor - this.table.tempReference;
                return peso / 5 * this.table.tempAboveWithoutIce
            } else {
                let peso = this.table.tempReference - this.valor;
                return peso / 5 * this.table.tempBellowWithoutIce
            }
        }
    }
    
}