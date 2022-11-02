export default class Aircraft{
    
    private model!: string;
    private engine!: string;
    private certification!: string;
    private weight!: number;
    private flap!: number;
    private reverserAmount!: number
    private aircraftWeightMin: number;
    private aircraftWeightMax: number;
    private brakingApplicationLevel: number;
    private refWithouIce: number;
    private refWithIce: number;
    private weightReference: number;
    private weightBellowWithoutIce: number;
    private weightAboveWithoutIce: number;
    private weightBellowWithIce: number;
    private weightAboveWithIce: number;
    private altitudeReference: number;
    private altitudeWithIce: number;
    private altitudeWithoutIce: number;
    private tempReference: number;
    private tempBellowWithIce: number;
    private tempAboveWithIce: number;
    private tempBellowWithoutIce: number;
    private tempAboveWithoutIce: number;
    private windReference: number;
    private windHeadWithIce: number;
    private windTailWithIce: number;
    private windHeadWithoutIce: number;
    private windTailWithoutIce: number;
    private slopeReference: number;
    private slopeUphillWithIce: number;
    private slopeDownhillWithIce: number;
    private slopeUphillWithoutIce: number;
    private slopeDownhillWithoutIce: number;
    private overspeedReference: number;
    private overspeedWithIce: number;
    private overspeedWithoutIce: number;
    private reverserWithIce: number;
    private reverserWithoutIce: number;
    

    constructor(model: string, engine: string, certification: string, flap: number, reverserAmount: number, aircraftWeightMin: number, aircraftWeightMax: number, 
        brakingApplicationLevel: number, refWithouIce: number, refWithIce: number, weightReference: number, weightBellowWithoutIce: number, weightAboveWithoutIce: number,
        weightBellowWithIce: number, weightAboveWithIce: number, altitudeReference: number, altitudeWithIce: number, altitudeWithoutIce: number, tempReference: number,
        tempBellowWithIce: number, tempAboveWithIce: number, tempBellowWithoutIce: number, tempAboveWithoutIce: number, windReference: number, windHeadWithIce: number,  
        windTailWithIce: number, windHeadWithoutIce: number, windTailWithoutIce: number, slopeReference: number, slopeUphillWithIce: number, slopeDownhillWithIce: number,
        slopeUphillWithoutIce: number, slopeDownhillWithoutIce: number, overspeedReference: number, overspeedWithIce: number, overspeedWithoutIce: number, reverserWithIce: number,
        reverserWithoutIce: number){
        this.model = model;
        this.engine = engine;
        this.certification = certification;
        this.flap = flap;
        this.reverserAmount = reverserAmount;
        this.aircraftWeightMin = aircraftWeightMin;
        this.aircraftWeightMax = aircraftWeightMax;
        this.brakingApplicationLevel = brakingApplicationLevel;
        this.refWithouIce = refWithouIce;
        this.refWithIce = refWithIce;
        this.weightReference = weightReference;
        this.weightBellowWithoutIce = weightBellowWithoutIce;
        this.weightAboveWithoutIce = weightAboveWithoutIce;
        this.weightBellowWithIce = weightBellowWithIce;
        this.weightAboveWithIce = weightAboveWithIce;
        this.altitudeReference = altitudeReference;
        this.altitudeWithIce = altitudeWithIce;
        this.altitudeWithoutIce = altitudeWithoutIce;
        this.tempReference = tempReference;
        this.tempBellowWithIce = tempBellowWithIce;
        this.tempAboveWithIce = tempAboveWithIce;
        this.tempBellowWithoutIce = tempBellowWithoutIce;
        this.tempAboveWithoutIce = tempAboveWithoutIce;
        this.windReference = windReference;
        this.windHeadWithIce = windHeadWithIce;
        this.windTailWithIce = windTailWithIce;
        this.windHeadWithoutIce = windHeadWithoutIce;
        this.windTailWithoutIce = windTailWithoutIce;
        this.slopeReference = slopeReference;
        this.slopeUphillWithIce = slopeUphillWithIce;
        this.slopeDownhillWithIce = slopeDownhillWithIce;
        this.slopeUphillWithoutIce = slopeUphillWithoutIce;
        this.slopeDownhillWithoutIce = slopeDownhillWithoutIce;
        this.overspeedReference = overspeedReference;
        this.overspeedWithIce = overspeedWithIce;
        this.overspeedWithoutIce = overspeedWithoutIce;
        this.reverserWithIce = reverserWithIce;
        this.reverserWithoutIce = reverserWithoutIce;
    }

    set setModel(model: string){
        this.model = model;
    }
    set setEngine(engine: string) {
        this.engine = engine;
    }
    set setCertification(certification: string){
        this.certification = certification;
    }
    set setWeight(weight: number){
        this.weight = weight;
    }
    set setFlapValue(value: number){
        this.flap = value;
    }
    set setReverserAmount(value: number){
        this.reverserAmount = value;
    }
    set setAircraftWeightMin(value: number){
        this.aircraftWeightMin = value
    }
    set setAircraftWeightMax(value: number){
        this.aircraftWeightMax = value
    }
    set setBrakingApplicationLevel(value: number){
        this.brakingApplicationLevel = value
    }
    set setRefWithIce(refWithIce: number){
        this.refWithIce = refWithIce
    }
    set setRefWithouIce(refWithouIce: number){
        this.refWithouIce = refWithouIce
    }
    set setWeightReference(weightReference: number){
        this.weightReference = weightReference
    }
    set setWeightBellowWithoutIce(weightBellowWithoutIce: number){
        this.weightBellowWithoutIce = weightBellowWithoutIce
    }
    set setWeightAboveWithoutIce(weightAboveWithoutIce: number){
        this.weightAboveWithoutIce = weightAboveWithoutIce
    }
    set setWeightBellowWithIce(weightBellowWithIce: number){
        this.weightBellowWithIce = weightBellowWithIce
    }
    set setWeightAboveWithIce(weightAboveWithIce: number){
        this.weightAboveWithIce = weightAboveWithIce
    }
    set setAltitudeReference(altitudeReference: number){
        this.altitudeReference = altitudeReference
    }
    set setAltitudeWithIce(altitudeWithIce: number){
        this.altitudeWithIce = altitudeWithIce
    }
    set setAltitudeWithoutIce(altitudeWithoutIce: number){
        this.altitudeWithoutIce = altitudeWithoutIce
    }
    set setTempReference(tempReference: number){
        this.tempReference = tempReference
    }
    set setTempBellowWithIce(tempBellowWithIce: number){
        this.tempBellowWithIce = tempBellowWithIce
    }
    set setTempAboveWithIce(tempAboveWithIce: number){
        this.tempAboveWithIce = tempAboveWithIce
    }
    set setTempBellowWithoutIce(tempBellowWithoutIce: number){
        this.tempBellowWithoutIce = tempBellowWithoutIce
    }
    set setTempAboveWithoutIce(tempAboveWithoutIce: number){
        this.tempAboveWithoutIce = tempAboveWithoutIce
    }
    set setWindReference(windReference: number){
        this.windReference = windReference
    }
    set setWindHeadWithIce(windHeadWithIce: number){
        this.windHeadWithIce = windHeadWithIce
    }
    set setWindTailWithIce(windTailWithIce: number){
        this.windTailWithIce = windTailWithIce
    }
    set setWindHeadWithoutIce(windHeadWithoutIce: number){
        this.windHeadWithoutIce = windHeadWithoutIce
    }
    set setWindTailWithoutIce(windTailWithoutIce: number){
        this.windTailWithoutIce = windTailWithoutIce
    }
    set setSlopeReference(slopeReference: number){
        this.slopeReference = slopeReference
    }
    set setSlopeUphillWithIce(slopeUphillWithIce: number){
        this.slopeUphillWithIce = slopeUphillWithIce
    }
    set setSlopeDownhillWithIce(slopeDownhillWithIce: number){
        this.slopeDownhillWithIce = slopeDownhillWithIce
    }
    set setSlopeUphillWithoutIce(slopeUphillWithoutIce: number){
        this.slopeUphillWithoutIce = slopeUphillWithoutIce
    }
    set setSlopeDownhillWithoutIce(slopeDownhillWithoutIce: number){
        this.slopeDownhillWithoutIce = slopeDownhillWithoutIce
    }
    set setOverspeedReference(overspeedReference: number){
        this.overspeedReference = overspeedReference
    }
    set setOverspeedWithIce(overspeedWithIce: number){
        this.overspeedWithIce = overspeedWithIce
    }
    set setOverspeedWithoutIce(overspeedWithoutIce: number){
        this.overspeedWithoutIce = overspeedWithoutIce
    }
    set setReverserWithIce(reverserWithIce: number){
        this.reverserWithIce = reverserWithIce
    }
    set setReverserWithoutIce(reverserWithoutIce: number){
        this.reverserWithoutIce = reverserWithoutIce
    }

    get getModel(): string { return this.model; }

    get getEngine(): string { return this.engine; }

    get getCertification(): string { return this.certification; }

    get getFlapValue(): number { return this.flap; }

    get getReverserAmount(): number { return this.reverserAmount; }

    get getWeight(): number { return this.weight; }

    get getAircraftWeightMin(): number { return this.aircraftWeightMin; }

    get getAircraftWeightMax(): number { return this.aircraftWeightMax; }

    get getBrakingApplicationLevel(): number { return this.brakingApplicationLevel; }
    
    get getRefWithIce(): number { return this.refWithIce; }
    
    get getRefWithouIce(): number { return this.refWithouIce; }

    get getWeightReference(): number { return this.weightReference; }

    get getWeightBellowWithoutIce(): number { return this.weightBellowWithoutIce; }

    get getWeightAboveWithoutIce(): number { return this.weightAboveWithoutIce; }

    get getWeightBellowWithIce(): number { return this.weightBellowWithIce; }

    get getWeightAboveWithIce(): number { return this.weightAboveWithIce; }

    get getAltitudeReference(): number { return this.altitudeReference; }

    get getAltitudeWithIce(): number { return this.altitudeWithIce; }

    get getAltitudeWithoutIce(): number { return this.altitudeWithoutIce; }

    get getTempReference(): number { return this.tempReference; }

    get getTempBellowWithIce(): number { return this.tempBellowWithIce; }

    get getTempAboveWithIce(): number { return this.tempAboveWithIce; }

    get getTempBellowWithoutIce(): number { return this.tempBellowWithoutIce; }

    get getTempAboveWithoutIce(): number { return this.tempAboveWithoutIce; }

    get getWindReference(): number { return this.windReference; }

    get getWindHeadWithIce(): number { return this.windHeadWithIce; }

    get getWindTailWithIce(): number { return this.windTailWithIce; }

    get getWindHeadWithoutIce(): number { return this.windHeadWithoutIce; }

    get getWindTailWithoutIce(): number { return this.windTailWithoutIce; }

    get getSlopeReference(): number { return this.slopeReference; }

    get getSlopeUphillWithIce(): number { return this.slopeUphillWithIce; }

    get getSlopeDownhillWithIce(): number { return this.slopeDownhillWithIce; }

    get getSlopeUphillWithoutIce(): number { return this.slopeUphillWithoutIce; }

    get getSlopeDownhillWithoutIce(): number { return this.slopeDownhillWithoutIce; }

    get getOverspeedReference(): number { return this.overspeedReference; }

    get getOverspeedWithIce(): number { return this.overspeedWithIce; }

    get getOverspeedWithoutIce(): number { return this.overspeedWithoutIce; }

    get getReverserWithIce(): number { return this.reverserWithIce; }

    get getReverserWithoutIce(): number { return this.reverserWithoutIce; }
}