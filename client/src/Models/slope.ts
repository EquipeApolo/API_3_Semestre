import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Slope extends FatorCalculo{

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
        
        
    }

    calcular(): number {
        if(this.temGelo){
            if(this.valor > this.table.slopeReference){
                let peso = this.valor - this.table.slopeReference;
                return peso / 5 * this.table.slopeDownhillWithIce
            } else {
                let peso = this.table.slopeReference - this.valor;
                return peso / 5 * this.table.slopeUphillWithIce
            }
        } else {
            if(this.valor > this.table.slopeReference){
                let peso = this.valor - this.table.slopeReference;
                return peso / 5 * this.table.slopeDownhillWithoutIce
            } else {
                let peso = this.table.slopeReference - this.valor;
                return peso / 5 * this.table.slopeUphillWithoutIce
            }
        }
    }
    
}