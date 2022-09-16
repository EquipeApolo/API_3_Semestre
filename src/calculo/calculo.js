"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculo {
    // protected distanciaPouso!: number
    constructor(RWYCC, WGT, ALT, WIND, TEMP, SLOPE, VAP, REV, ICE, VREF, WINDValor, SLOPEValor) {
        this.RWYCC = RWYCC;
        this.WGT = WGT;
        this.ALT = ALT;
        this.WIND = WIND;
        this.TEMP = TEMP;
        this.SLOPE = SLOPE;
        this.VAP = VAP;
        this.REV = REV;
        this.ICE = ICE;
        this.VREF = VREF;
        this.WINDValor = WINDValor;
        this.SLOPEValor = SLOPEValor;
    }
}
exports.default = Calculo;
