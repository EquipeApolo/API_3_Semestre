import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Overspeed extends FatorCalculo{

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
            this.valor = this.valorInput / 1.852;
        }else{
            this.valor = this.valorInput;
        }
    }

    public calcular(): number {
        this.converterSistema(UnitMeasurement.IMPERIAL);
            if(this.temGelo)
            {
                return this.valor / this.table.overspeedReference * this.table.overspeedWithIce
            } else {
                return  this.valor / this.table.overspeedReference * this.table.overspeedWithoutIce;
            }
    }
    
}