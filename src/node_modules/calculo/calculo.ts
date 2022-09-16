export default abstract class Calculo {
    protected RWYCC: number
    // protected REF: number
    protected WGT: number
    protected ALT: number
    protected WIND: number
    protected WINDValor: number
    protected SLOPEValor: number
    protected TEMP: number
    protected SLOPE: number
    protected VAP: number
    protected REV: number
    // protected FLAP: number
    protected ICE: boolean
    protected VREF: number
    // protected distanciaPouso!: number
    constructor(RWYCC: number, WGT: number, ALT: number, WIND: number, TEMP: number, SLOPE:number,
        VAP: number, REV: number, ICE: boolean,VREF: number, WINDValor: number, SLOPEValor: number) {
        this.RWYCC = RWYCC
        this.WGT = WGT
        this.ALT = ALT
        this.WIND = WIND
        this.TEMP = TEMP
        this.SLOPE = SLOPE
        this.VAP = VAP
        this.REV = REV
        this.ICE = ICE
        this.VREF = VREF
        this.WINDValor = WINDValor
        this.SLOPEValor = SLOPEValor
    }
    
    abstract calcular(): number
    
    
    
   

}
