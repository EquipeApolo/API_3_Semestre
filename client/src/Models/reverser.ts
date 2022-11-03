import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import FatorCalculo from "./fator";
import Table from "./table";

export default class Reverser extends FatorCalculo{

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

    public calcular(): number {
        if(this.temGelo)
        {
            return this.valor * this.table.reverserWithIce
        } else {
            return this.valor * this.table.reverserWithoutIce
        }
    }
    
}