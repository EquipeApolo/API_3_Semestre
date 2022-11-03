import { BrakingLevel, UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import AirportAltitude from "./altitude";
import Reference from "./reference";
import Reverser from "./reverser";
import Slope from "./slope";
import Temperature from "./temp";
import Weight from "./weight";
import Wind from "./wind";
import Overspeed from "./overspeed";
import Table from "./table";

export default class Calcular{
    private weight: Weight;
    private alt: AirportAltitude;
    private ref: Reference;
    private rev: Reverser;
    private slope: Slope;
    private temp: Temperature;
    private wind: Wind;
    private overspeed: Overspeed;
    private table: Table;

    constructor(aircraft: Aircraft, table: Table, unitMeasurement: UnitMeasurement, inputWeight: number, inputAltitude: number,
        inputSlope: number, inputTemperature: number, inputWind: number, ice: boolean, inputVap: number){
            this.table = table
            this.weight = new Weight(aircraft, inputWeight, unitMeasurement, ice, table);
            this.alt = new AirportAltitude(aircraft, inputAltitude, unitMeasurement, ice, table);
            this.ref = new Reference(aircraft, ice, table);
            this.rev = new Reverser(aircraft, aircraft.getReverserAmount, unitMeasurement, ice, table);
            this.slope = new Slope(aircraft, inputSlope, unitMeasurement, ice, table);
            this.temp = new Temperature(aircraft, inputTemperature, unitMeasurement, ice, table);
            this.wind = new Wind(aircraft, inputWind, unitMeasurement, ice, table);
            this.overspeed = new Overspeed(aircraft, inputVap, unitMeasurement, ice, table)
    }

    calcular(): number{
        let r = this.ref.calcular()
        let w = this.weight.calcular()
        let a = this.alt.calcular()
        let t = this.temp.calcular()
        let wi = this.wind.calcular()
        let s = this.slope.calcular()
        let re = this.rev.calcular()
        let o = this.overspeed.calcular()

        return this.ref.calcular() + this.weight.calcular() + this.alt.calcular() + this.temp.calcular() + this.wind.calcular() +
        this.slope.calcular() + this.rev.calcular() + this.overspeed.calcular();
    }

}