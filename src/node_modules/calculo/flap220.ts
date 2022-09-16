import Calculo from "./calculo";

export default class FLAP220 extends Calculo{
    calcular(): number {
        var SL = 0
        var REF = 0
        var distanciaPouso = 0
        //WITHOUT ICE ACCREATION
        if(this.ICE == true){
        //RWYCC == DRY
            if(this.RWYCC == 6)
                distanciaPouso += 1145
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -49
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 51
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 32

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 26
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -12

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -23
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 111
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -8
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 179

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 103
                
                // for(this.REV)
                distanciaPouso += this.REV + 134
            //RWYCC == GOOD
            if(this.RWYCC == 5)
                distanciaPouso += 1330
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -62
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 63
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 45

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 40
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -16

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -30
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 165
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -12
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 219

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 115
                
                // for(this.REV)
                distanciaPouso += this.REV + 516
            //RWYCC == GOOD TO MEDIUM
            if(this.RWYCC == 4)
                distanciaPouso += 1443
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -62
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 62
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 43

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 38
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -16

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -32
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 148
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -17
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 222

                if(this.VAP > this.VREF)
                    distanciaPouso +=this.VAP/5 * 105
                
                // for(this.REV)
                distanciaPouso += this.REV + 504
            //RWYCC == MEDIUM
            if(this.RWYCC == 3)
                distanciaPouso += 1534
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -67
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 68
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 48

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 43
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -17

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -34
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 165

                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -20
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 248

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 106

                // for(this.REV)
                distanciaPouso += this.REV + 611
            //RWYCC == MEDIUM
            if(this.RWYCC == 2)
                distanciaPouso += 1669
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -80
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 82
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 62

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 63
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -20

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -40
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 241

                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -24
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 327

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 117

                // for(this.REV)
                distanciaPouso += this.REV + 1065
            //RWYCC == POOR
            if(this.RWYCC == 1)
                distanciaPouso += 1813
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -86
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 87
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 64

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 36
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -20

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -44
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 233
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -32
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 371

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 114
                
                // for(this.REV)
                distanciaPouso += this.REV + 1400
        }

        //WITHOUT ICE ACCREATION
        if(this.ICE == false){
        //RWYCC == DRY
            if(this.RWYCC == 6)
                distanciaPouso += 1068
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -46
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 47
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 29

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 23
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -11

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -23
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 107
                
                if(this.SLOPE == 0)
                    distanciaPouso += 2/1 * -7
                else(this.SLOPE == 1)
                    distanciaPouso += 2/1 * 170

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 114
                
                // for(this.REV)
                distanciaPouso += this.REV + 129
            //RWYCC == GOOD
            if(this.RWYCC == 5)
                distanciaPouso += 1239
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -57
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 59
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 41

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 37
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -15

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -29
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 160
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -11
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 209

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 136
                
                // for(this.REV)
                distanciaPouso += this.REV + 515
            //RWYCC == GOOD TO MEDIUM
            if(this.RWYCC == 4)
                distanciaPouso +=1357
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -58
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 59
                    
                if(this.ALT > SL)
                    distanciaPouso +=this.ALT/1000 * 41

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 35
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -15

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -31
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 143
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -16
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 214

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 120
                
                // for(this.REV)
                distanciaPouso += this.REV + 515
            //RWYCC == MEDIUM
            if(this.RWYCC == 3)
                distanciaPouso += 1446
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -63
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 64
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 45

                if(this.TEMP > 15)
                    distanciaPouso +=this.TEMP/5 * 40
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -16

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -34
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 161

                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -19
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 238

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 126

                // for(this.REV)
                distanciaPouso += this.REV + 606
            //RWYCC == MEDIUM
            if(this.RWYCC == 2)
                distanciaPouso += 1575
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -76
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 79
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 58

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 59
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -19

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -39
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 237

                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -24
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 317

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 143

                // for(this.REV)
                distanciaPouso += this.REV + 1039
            //RWYCC == POOR
            if(this.RWYCC == 1)
                distanciaPouso += 1721
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -81
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 83
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 61

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 59
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -19

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -43
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 228
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -32
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 362

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 138
                
                // for(this.REV)
                distanciaPouso += this.REV + 1425
        }
        return distanciaPouso

    }

}