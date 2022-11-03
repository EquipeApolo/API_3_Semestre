import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Slope extends FatorCalculo{

    private aircraft: Aircraft;
    private table: Table;
    constructor(aircraft: Aircraft, input: number, unidadeMedida: UnitMeasurement, temGelo: boolean, table: Table){
        super();
        this.valor = input;
        this.unidadeMedida = unidadeMedida;
        this.temGelo = temGelo;
        this.aircraft = aircraft;
        this.table = table;
    }

    public converterSistema(unitMeasurement: UnitMeasurement): void {
        
        
    }

    calcular(): number {
        if(this.temGelo){
            if(this.valor > 0){
                return this.valor / this.table.slopeReference * this.table.slopeDownhillWithIce
            } else if(this.valor < 0){
                return this.valor / this.table.slopeReference * this.table.slopeUphillWithIce
            }else{
                return 0
            }
        } else {
            if(this.valor > 0){
                return this.valor / this.table.slopeReference * this.table.slopeDownhillWithoutIce
            } else if(this.valor < 0){
                return this.valor / this.table.slopeReference * this.table.slopeUphillWithoutIce
            }else{
                return 0
            }
        }
    }
    
}