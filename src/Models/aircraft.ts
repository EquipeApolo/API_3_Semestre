export default class Aircraft{
    
    public model!: string;
    private engine!: string;
    private certification!: string;
    private speedAdctive!: number;
    private weight!: number;
    private hasAircraftFlap!: boolean;
    private flap!: number;
    private hasAircraftReverser!: boolean;
    private reverserAmount!: number

    // constructor(model: string, engine: string, certification: string, speedAdctive: number, weight: number, hasFlap: boolean, flap: number, hasReverser: boolean, reverserAmount: number){
    //     this.model = model;
    //     this.engine = engine;
    //     this.certification = certification;
    //     this.speedAdctive = speedAdctive;
    //     this.weight = weight;
    //     this.hasAircraftFlap = hasFlap;
    //     this.flap = flap;
    //     this.hasAircraftReverser = hasReverser;
    //     this.reverserAmount = reverserAmount;
    // }

    set setModel(model: string){
        this.model = model;
    }

    set setEngine(engine: string) {
        this.engine = engine;
    }

    set setCertification(certification: string){
        this.certification = certification;
    }

    set setSpeedAdctive(speed: number){
        this.speedAdctive = speed;
    }

    set setWeight(wight: number){
        this.weight = this.weight;
    }

    set setHasFlap(value: boolean){
        this.hasAircraftFlap = value;
    }

    set setFlapValue(value: number){
        this.flap = value;
    }

    set setHasReverser(value: boolean){
        this.hasAircraftReverser = value;
    }

    set setReverserAmount(value: number){
        this.reverserAmount = value;
    }

    get getEngine(): string { return this.engine; }

    get getCertification(): string { return this.certification; }

    get getSpeedAdctive(): number { return this.speedAdctive; }

    get getFlapValue(): number { return this.flap; }

    get getReverserAmount(): number { return this.reverserAmount; }

    get getWeight(): number { return this.weight; }

    get hasFlap(): boolean { return this.hasFlap; }

    get hasReverser(): boolean { return this.hasReverser; }
}