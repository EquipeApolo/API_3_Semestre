import { BrakingLevel, UnitMeasurement } from "../Enuns/enuns";
import Aircraft from "./aircraft";
import AirportAltitude from "./alt";
import Ref from "./ref";
import Rev from "./rev";
import Slope from "./slope";
import Temperature from "./temp";
import Vap from "./overspeed";
import Weight from "./weight";
import Wind from "./wind";
import Overspeed from "./overspeed";

export default class Calcular{
    private unitMeasurement: UnitMeasurement;
    private aircraft: Aircraft;
    private weight: Weight;
    private alt: AirportAltitude;
    private ref: Ref;
    private rev: Rev;
    private slope: Slope;
    private temp: Temperature;
    private wind: Wind;
    private braking: BrakingLevel;
    private iceAccreation: boolean;
    private overspeed: Overspeed;

    constructor(aircraft: Aircraft, unitMeasurement: UnitMeasurement, inputWeight: number, inputAltitude: number,
        inputSlope: number, inputTemperature: number, inputWind: number, braking: BrakingLevel, ice: boolean, inputVap: number){
            this.aircraft = aircraft;
            this.unitMeasurement = unitMeasurement;
            this.weight = new Weight(aircraft, inputWeight, unitMeasurement, ice, braking);
            this.alt = new AirportAltitude(aircraft, inputAltitude, unitMeasurement, ice, braking);
            this.ref = new Ref(aircraft, ice, braking);
            this.rev = new Rev(aircraft, aircraft.getReverserAmount, ice, braking);
            this.slope = new Slope(aircraft, inputSlope, ice, braking);
            this.temp = new Temperature(aircraft, inputTemperature, unitMeasurement, ice, braking);
            this.wind = new Wind(aircraft, inputWind, unitMeasurement, ice, braking);
            this.overspeed = new Overspeed(aircraft, inputVap, unitMeasurement, ice, braking)
            this.braking = braking;
            this.iceAccreation = ice;
    }

    calcular(): number{
        debugger
        let cref = this.ref.calcular();
        let cwei = this.weight.calcular();
        let calt = this.alt.calcular();
        let ctemp = this.temp.calcular();
        let cwind = this.wind.calcular();
        let cslope = this.slope.calcular();
        let crev = this.rev.calcular();
        let overspeed = this.overspeed.calcular();
        return this.ref.calcular() + this.weight.calcular() + this.alt.calcular() + this.temp.calcular() + this.wind.calcular() +
        this.slope.calcular() + this.rev.calcular() + this.overspeed.calcular();
    }

}