import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Weight extends FatorCalculo{

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
        // Aqui convertemos caso a unidade de medida escolhida pelo usuário seja IMPERIAL para o sistema de medida INTERNACIONAL, que é o da referência para PESO.
        if(this.unidadeMedida !== unitMeasurement){
            this.valor = this.valorInput / 2.205;
        }else{
            this.valor = this.valorInput;
        }
    }

    calcular(): number {
        this.converterSistema(UnitMeasurement.INTERNACIONAL);
        if(this.temGelo){
            if(this.valor > this.table.weightReference){
                let peso = this.valor - this.table.weightReference;
                return peso / 1000 * this.table.weightAboveWithIce;
            } else{
                let peso = this.table.weightReference - this.valor;
                return peso / 1000 * this.table.weightBellowWithIce;         
            }
        } else{
            if(this.valor > this.table.weightReference){
                let peso = this.valor - this.table.weightReference;
                return peso / 1000 * this.table.weightAboveWithoutIce;
            }else{
                let peso = this.table.weightReference - this.valor;
                return peso / 1000 * this.table.weightBellowWithoutIce;         
            }
        }

    }
    
}