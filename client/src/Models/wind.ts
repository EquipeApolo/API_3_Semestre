import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Wind extends FatorCalculo{

    private aircraft: Aircraft;
    private table: Table;
    constructor(aircraft: Aircraft,input: number, unidadeMedida: UnitMeasurement, temGelo: boolean, table: Table){
        super();
        this.valorInput = input;
        this.unidadeMedida = unidadeMedida;
        this.temGelo = temGelo;
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
        // this.converterSistema(UnitMeasurement.IMPERIAL);
        this.valor = this.valorInput;
            if(this.temGelo){
                if(this.valor > 0){
                    return this.valor / this.table.windReference * this.table.windTailWithIce
                } else if(this.valor < 0) {
                    return this.valor / this.table.windReference * this.table.windHeadWithIce
                }else{
                    return 0
                }
            } else {
                if(this.valor > 0){
                    return this.valor / this.table.windReference * this.table.windTailWithIce
                } else if(this.valor < 0){
                    return this.valor / this.table.windReference * this.table.windHeadWithIce
                }else{
                    return 0
                }
            }
    
    }
    
}