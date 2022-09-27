import { UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";

export default abstract class FatorCalculo{
    public valor!: number;
    public valorInput!: number;
    public referencia!: number;
    public unidadeMedida!: UnitMeasurement;
    public temGelo!: boolean;
    public abstract converterSistema(unitMeasurement: UnitMeasurement): void;
    public abstract calcular(aircraft: Aircraft): number;
    constructor(){

    }
}