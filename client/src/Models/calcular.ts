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
    private unitMeasurement: UnitMeasurement;
    private aircraft: Aircraft;
    private weight: Weight;
    private alt: AirportAltitude;
    private ref: Reference;
    private rev: Reverser;
    private slope: Slope;
    private temp: Temperature;
    private wind: Wind;
    private overspeed: Overspeed;
    private table: Table;

    constructor(aircraft: Aircraft, unitMeasurement: UnitMeasurement, inputWeight: number, inputAltitude: number,
        inputSlope: number, inputTemperature: number, inputWind: number, braking: BrakingLevel, ice: boolean, inputVap: number, table: Table){
            this.aircraft = aircraft;
            this.unitMeasurement = unitMeasurement;
            this.weight = new Weight(aircraft, inputWeight, unitMeasurement, ice, table);
            this.alt = new AirportAltitude(aircraft, inputAltitude, unitMeasurement, ice, braking, table);
            this.ref = new Reference(aircraft, ice, braking, table);
            this.rev = new Reverser(aircraft, aircraft.getReverserAmount, unitMeasurement, ice, braking, table);
            this.slope = new Slope(aircraft, inputSlope, unitMeasurement, ice, braking, table);
            this.temp = new Temperature(aircraft, inputTemperature, unitMeasurement, ice, braking, table);
            this.wind = new Wind(aircraft, inputWind, unitMeasurement, ice, braking, table);
            this.overspeed = new Overspeed(aircraft, inputVap, unitMeasurement, ice, braking, table)
    }

    calcular(): number{
        return this.ref.calcular() + this.weight.calcular() + this.alt.calcular() + this.temp.calcular() + this.wind.calcular() +
        this.slope.calcular() + this.rev.calcular() + this.overspeed.calcular();
    }

}