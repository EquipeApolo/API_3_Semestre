export default class Flap {
    public flapId: number
    public tipoFlap: string
    
    constructor(tipoFlap: string)
    {
        this.tipoFlap = tipoFlap
    }
    set setTipoFlap(value: string){
        this.tipoFlap = value
    }
    get getTipoFlap(): string { return this.tipoFlap }
    
}