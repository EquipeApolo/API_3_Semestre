import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Wind extends FatorCalculo{

    private aircraft: Aircraft;
    private table: Table;
    constructor(aircraft: Aircraft,input: number, unidadeMedida: UnitMeasurement, temGelo: boolean,BRK: number, table: Table){
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
            this.valor = this.valorInput / 1.856
        }else{
            this.valor = this.valorInput;
        }
    }

    calcular(): number {
        this.converterSistema(UnitMeasurement.IMPERIAL);

            if(this.temGelo){
                if(this.valor > this.table.windReference){
                    let peso = this.valor - this.table.windReference;
                    return peso / 5 * this.table.windTailWithIce
                } else {
                    let peso = this.table.windReference - this.valor;
                    return peso / 5 * this.table.windHeadWithIce
                }
            } else {
                if(this.valor > this.table.windReference){
                    let peso = this.valor - this.table.windReference;
                    return peso / 5 * this.table.windTailWithIce
                } else {
                    let peso = this.table.windReference - this.valor;
                    return peso / 5 * this.table.windHeadWithIce
                }
            }
    
    }
    
}