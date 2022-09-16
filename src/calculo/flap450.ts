import Calculo from "./calculo";

export default class FLAP450 extends Calculo{
    calcular(): number {
        var SL = 0
        var distanciaPouso = 0
        if(this.ICE == false){
            if(this.RWYCC == 6) {
                distanciaPouso += 1009
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -40
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 41
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 27

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 20
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -10

                if(this.WIND == 0)  //head
                    distanciaPouso += this.WINDValor/5 * -21
                else(this.WIND == 1) //wind
                    distanciaPouso += this.WINDValor/5 * 94
                
                if(this.SLOPE == 0) //uphill
                    distanciaPouso += this.SLOPEValor/1 * -6
                else(this.SLOPE == 1) //downhill
                    distanciaPouso += this.SLOPEValor/1 * 102

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 98
                
                // for(this.REV)
                distanciaPouso += this.REV + 84
            }


            if(this.RWYCC == 5) {
                distanciaPouso += 1213
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -55
                else (this.WGT > 18000)
                    distanciaPouso +=this.WGT/1000 * 41
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 39

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 34
                else(this.TEMP < 15)
                    distanciaPouso +=this.TEMP/5 * -14

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -28
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 151
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -10
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 139

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 116
                
                // for(this.REV)
                distanciaPouso += this.REV + 380  
            }
            
            if(this.RWYCC == 4) {
                distanciaPouso += 1328
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -56
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 55
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 39

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 33
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -14

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -30
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 140
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -14
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 149

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 107
                
                // for(this.REV)
                distanciaPouso += this.REV + 364
                    
            }
            
            if(this.RWYCC == 3) {
                distanciaPouso += 1404
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -61
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 60
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 43

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 37
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -15

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -33
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 157
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -18
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 169

                if(this.VAP > this.VREF)
                    this.VAP = this.VAP/5 * 110
                
                // for(this.REV)
                distanciaPouso += this.REV + 497

            }
            if(this.RWYCC == 2) {
                distanciaPouso += 1495
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -71
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 70
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 53

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 51
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -18

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -37
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 217
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -20
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 222

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 119
                
                // for(this.REV)
                distanciaPouso += this.REV + 935

            }
            if(this.RWYCC == 1) {
                distanciaPouso += 1637
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -76
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 75
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 56

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 53
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -18

                if(this.WIND == 0)
                    distanciaPouso += this.WINDValor/5 * -41
                else(this.WIND == 1)
                    distanciaPouso += this.WINDValor/5 * 218
                
                if(this.SLOPE == 0)
                    distanciaPouso += this.SLOPEValor/1 * -27
                else(this.SLOPE == 1)
                    distanciaPouso += this.SLOPEValor/1 * 273

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 117
                
                // for(this.REV)
                distanciaPouso += this.REV + 1461

            }
        }
        if(this.ICE == true){
            if(this.RWYCC == 6) {
                distanciaPouso += 1074
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -43
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 45
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 29

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 22
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -11

                if(this.WIND == 0)  //head
                    distanciaPouso += this.WINDValor/5 * -21
                else(this.WIND == 1) //wind
                    distanciaPouso += this.WINDValor/5 * 97
                
                if(this.SLOPE == 0) //uphill
                    distanciaPouso += this.SLOPEValor/1 * -6
                else(this.SLOPE == 1) //downhill
                    distanciaPouso += this.SLOPEValor/1 * 107

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 101
                
                // for(this.REV)
                distanciaPouso += this.REV + 91
            }
            if(this.RWYCC == 5) {
                distanciaPouso += 1288
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -58
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 58
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 42

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 37
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -15

                if(this.WIND == 0)  //head
                    distanciaPouso += this.WINDValor/5 * -29
                else(this.WIND == 1) //wind
                    distanciaPouso += this.WINDValor/5 * 154
                
                if(this.SLOPE == 0) //uphill
                    distanciaPouso += this.SLOPEValor/1 * -11
                else(this.SLOPE == 1) //downhill
                    distanciaPouso += this.SLOPEValor/1 * 148

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 112
                
                // for(this.REV)
                distanciaPouso += this.REV + 403
            }
            if(this.RWYCC == 4) {
                distanciaPouso += 1399
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -60
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 59
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 42

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 35
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -15

                if(this.WIND == 0)  //head
                    distanciaPouso += this.WINDValor/5 * -31
                else(this.WIND == 1) //wind
                    distanciaPouso += this.WINDValor/5 * 143
                
                if(this.SLOPE == 0) //uphill
                    distanciaPouso += this.SLOPEValor/1 * -15
                else(this.SLOPE == 1) //downhill
                    distanciaPouso += this.SLOPEValor/1 * 154

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 107
                
                // for(this.REV)
                distanciaPouso += this.REV + 372
            }
            if(this.RWYCC == 3) {
                distanciaPouso += 1477
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -64
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 64
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 46

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 40
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -16

                if(this.WIND == 0)  //head
                    distanciaPouso += this.WINDValor/5 * -34
                else(this.WIND == 1) //wind
                    distanciaPouso += this.WINDValor/5 * 160
                
                if(this.SLOPE == 0) //uphill
                    distanciaPouso += this.SLOPEValor/1 * -18
                else(this.SLOPE == 1) //downhill
                    distanciaPouso += this.SLOPEValor/1 * 174

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 109
                
                // for(this.REV)
                distanciaPouso += this.REV + 509
            }
            if(this.RWYCC == 2) {
                distanciaPouso += 1571
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -74
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 74
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 56

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 54
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -19

                if(this.WIND == 0)  //head
                    distanciaPouso += this.WINDValor/5 * -37
                else(this.WIND == 1) //wind
                    distanciaPouso += this.WINDValor/5 * 220
                
                if(this.SLOPE == 0) //uphill
                    distanciaPouso += this.SLOPEValor/1 * -20
                else(this.SLOPE == 1) //downhill
                    distanciaPouso += this.SLOPEValor/1 * 228

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 117
                
                // for(this.REV)
                distanciaPouso += this.REV + 953
            }
            if(this.RWYCC == 1) {
                distanciaPouso += 1711
                if(this.WGT < 18000)
                    distanciaPouso += this.WGT/1000 * -80
                else (this.WGT > 18000)
                    distanciaPouso += this.WGT/1000 * 79
                    
                if(this.ALT > SL)
                    distanciaPouso += this.ALT/1000 * 59

                if(this.TEMP > 15)
                    distanciaPouso += this.TEMP/5 * 56
                else(this.TEMP < 15)
                    distanciaPouso += this.TEMP/5 * -19

                if(this.WIND == 0)  //head
                    distanciaPouso += this.WINDValor/5 * -42
                else(this.WIND == 1) //wind
                    distanciaPouso += this.WINDValor/5 * 221
                
                if(this.SLOPE == 0) //uphill
                    distanciaPouso += this.SLOPEValor/1 * -28
                else(this.SLOPE == 1) //downhill
                    distanciaPouso += this.SLOPEValor/1 * 278

                if(this.VAP > this.VREF)
                    distanciaPouso += this.VAP/5 * 115
                
                // for(this.REV)
                distanciaPouso += this.REV + 1426
            }
        }
        return distanciaPouso
        
    }  

}