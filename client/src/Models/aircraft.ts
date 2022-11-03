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
    

    constructor(model: string, engine: string, certification: string, flap: number, reverserAmount: number, aircraftWeightMin: number, aircraftWeightMax: number, 
        brakingApplicationLevel: number){
        this.model = model;
        this.engine = engine;
        this.certification = certification;
        this.flap = flap;
        this.reverserAmount = reverserAmount;
        this.aircraftWeightMin = aircraftWeightMin;
        this.aircraftWeightMax = aircraftWeightMax;
        this.brakingApplicationLevel = brakingApplicationLevel;
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
    get getModel(): string { return this.model; }

    get getEngine(): string { return this.engine; }

    get getCertification(): string { return this.certification; }

    get getFlapValue(): number { return this.flap; }

    get getReverserAmount(): number { return this.reverserAmount; }

    get getWeight(): number { return this.weight; }

    get getAircraftWeightMin(): number { return this.aircraftWeightMin; }

    get getAircraftWeightMax(): number { return this.aircraftWeightMax; }

    get getBrakingApplicationLevel(): number { return this.brakingApplicationLevel; }
    
}