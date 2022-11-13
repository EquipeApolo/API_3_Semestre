import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class AirportAltitude extends FatorCalculo{

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
            this.valor = this.valorInput * 3.280;
        }else{
            this.valor = this.valorInput;
        }
    }

    public calcular(): number {
        // this.converterSistema(UnitMeasurement.IMPERIAL);
        this.valor = this.valorInput;
        if(this.temGelo)
        {
            let peso = this.valor - this.table.altitudeReference;
            return peso / 1000 * this.table.altitudeWithIce;
        } else {
            let peso = this.valor - this.table.altitudeReference;
            return peso / 1000 * this.table.altitudeWithoutIce;
        }
    }
}