//Pegando valor do Input
$( "#btnResult" ).click(function() {  
    let model = $("#model").val();
    let temperature = $("#temperature").val();
    let engine = $("#engine").val();
    let weight = $("#weight").val();
    let wind =  $("#wind").val();
    let speedAdditive = $("#speedAdditive").val();
    let slope = $('#slope').val();
    let altitude = $("#altitude").val();
    let reversor = $("#reversor").val();
     
    //Pegando valor do Dropbox Flap
    var selectFlap = document.getElementById('flap');
    var valor = selectFlap.options[selectFlap.selectedIndex].value;
    let flapNumero = 0;
    if(valor == 1){
        flapNumero = 220
        console.log('220')
    }else if(valor == 2){
        flapNumero = 450
        console.log('450')
    }
    else{
        console.log('Nada selecionado')
    }

    //Pegando valor do Dropbox Certification
	var select = document.getElementById('btnCertification');
    var value = select.options[select.selectedIndex].value;
    if(value == 1){
        console.log('ANAC')
    }else if(value == 2){
        console.log('EASA')
    }else if(value == 3){
        console.log('FAA')
    }
    else{
        console.log('Nada selecionado')
    }
    
        //Pegando valor do Dropbox Type Slope
        var selectSlope = document.getElementById('typeSlope');
        var valueTypeSlope = selectSlope.options[selectSlope.selectedIndex].value;
        /*let typeSlope = ' ';
        if(valueTypeSlope == 1){
            typeSlope = 'Downhill'
            console.log('Downhill')
        }else if(valueTypeSlope == 0){
            typeSlope = 'Uphill'
            console.log('Uphill')
        }
        else{
            console.log('Nada selecionado')
        }*/


    //Pegando valor do Dropbox Type Wind
    var selectTypeWind = document.getElementById('typeWind');
    var valueTypeWind = selectTypeWind.options[selectTypeWind.selectedIndex].value;
    /*let typeWind = ' ';
    if(valueTypeWind == 0){
        typeWind = 'Head Wind'
        console.log('Head Wind')
    }else if(valueTypeWind == 1){
        typeWind = 'Tail Wind'
        console.log('Tail Wind')
    }
    else{
        console.log('Nada selecionado')
    }*/

    //Pegando valor do Dropbox Runway condition
    var selectx = document.getElementById('btnCondition');
	var valuex = selectx.options[selectx.selectedIndex].value;
        

    
    //Verificando IceAccreation
    let IceAccreationCheck = false 
    let checkboxRS = document.getElementById('IceAccreation');
        if(checkboxRS.checked) {
            IceAccreationCheck = true;}  

        else{
            IceAccreationCheck;}

     let calculoPouso = null 
     if (flapNumero == 220){
         calculoPouso = calculo220(valuex,weight,altitude,valueTypeWind,temperature, valueTypeSlope,speedAdditive,
             reversor,IceAccreationCheck,2000,wind,slope)
     }else if(flapNumero = 450){
         calculoPouso = calculo450(valuex,weight,altitude,valueTypeWind,temperature, valueTypeSlope,speedAdditive,
             reversor,IceAccreationCheck,2000,wind,slope)
     }else{
         console.log("ERRO!")
     }

     let teste = parseFloat(calculoPouso).toFixed(2);
    //Input Resultado   
    $('#Result').val(teste);
    

    console.log(flapNumero);

    console.log(IceAccreationCheck);
    console.log(valuex); 
    console.log(model, temperature, engine , weight, wind, speedAdditive, slope, altitude, reversor)

}) 
let calculo220 = function(RWYCC, WGT, ALT, WIND, TEMP, SLOPE,
    VAP, REV, ICE,VREF, WINDValor, SLOPEValor){
        var SL = 0
        var REF = 0
        var distanciaPouso = 0
        //WITHOUT ICE ACCREATION
        if(ICE == true){
        //RWYCC == DRY
            if(RWYCC == 6)
                distanciaPouso += 1145
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -49
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 51
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 32

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 26
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -12

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -23
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 111
                
                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -8
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 179

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 103
                
                // for(REV)
                distanciaPouso += REV + 134
            //RWYCC == GOOD
            if(RWYCC == 5)
                distanciaPouso += 1330
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -62
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 63
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 45

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 40
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -16

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -30
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 165
                
                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -12
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 219

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 115
                
                // for(REV)
                distanciaPouso += REV + 516
            //RWYCC == GOOD TO MEDIUM
            if(RWYCC == 4)
                distanciaPouso += 1443
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -62
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 62
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 43

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 38
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -16

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -32
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 148
                
                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -17
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 222

                if(VAP > VREF)
                    distanciaPouso +=VAP/5 * 105
                
                // for(REV)
                distanciaPouso += REV + 504
            //RWYCC == MEDIUM
            if(RWYCC == 3)
                distanciaPouso += 1534
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -67
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 68
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 48

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 43
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -17

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -34
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 165

                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -20
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 248

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 106

                // for(REV)
                distanciaPouso += REV + 611
            //RWYCC == MEDIUM
            if(RWYCC == 2)
                distanciaPouso += 1669
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -80
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 82
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 62

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 63
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -20

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -40
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 241

                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -24
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 327

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 117

                // for(REV)
                distanciaPouso += REV + 1065
            //RWYCC == POOR
            if(RWYCC == 1)
                distanciaPouso += 1813
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -86
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 87
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 64

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 36
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -20

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -44
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 233
                
                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -32
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 371

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 114
                
                // for(REV)
                distanciaPouso += REV + 1400
        }

        //WITHOUT ICE ACCREATION
        if(ICE == false){
        //RWYCC == DRY
            if(RWYCC == 6)
                distanciaPouso += 1068
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -46
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 47
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 29

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 23
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -11

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -23
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 107
                
                if(SLOPE == 0)
                    distanciaPouso += 2/1 * -7
                else(SLOPE == 1)
                    distanciaPouso += 2/1 * 170

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 114
                
                // for(REV)
                distanciaPouso += REV + 129
            //RWYCC == GOOD
            if(RWYCC == 5)
                distanciaPouso += 1239
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -57
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 59
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 41

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 37
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -15

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -29
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 160
                
                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -11
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 209

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 136
                
                // for(REV)
                distanciaPouso += REV + 515
            //RWYCC == GOOD TO MEDIUM
            if(RWYCC == 4)
                distanciaPouso +=1357
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -58
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 59
                    
                if(ALT > SL)
                    distanciaPouso +=ALT/1000 * 41

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 35
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -15

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -31
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 143
                
                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -16
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 214

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 120
                
                // for(REV)
                distanciaPouso += REV + 515
            //RWYCC == MEDIUM
            if(RWYCC == 3)
                distanciaPouso += 1446
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -63
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 64
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 45

                if(TEMP > 15)
                    distanciaPouso +=TEMP/5 * 40
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -16

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -34
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 161

                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -19
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 238

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 126

                // for(REV)
                distanciaPouso += REV + 606
            //RWYCC == MEDIUM
            if(RWYCC == 2)
                distanciaPouso += 1575
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -76
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 79
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 58

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 59
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -19

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -39
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 237

                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -24
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 317

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 143

                // for(REV)
                distanciaPouso += REV + 1039
            //RWYCC == POOR
            if(RWYCC == 1)
                distanciaPouso += 1721
                if(WGT < 18000)
                    distanciaPouso += WGT/1000 * -81
                else (WGT > 18000)
                    distanciaPouso += WGT/1000 * 83
                    
                if(ALT > SL)
                    distanciaPouso += ALT/1000 * 61

                if(TEMP > 15)
                    distanciaPouso += TEMP/5 * 59
                else(TEMP < 15)
                    distanciaPouso += TEMP/5 * -19

                if(WIND == 0)
                    distanciaPouso += WINDValor/5 * -43
                else(WIND == 1)
                    distanciaPouso += WINDValor/5 * 228
                
                if(SLOPE == 0)
                    distanciaPouso += SLOPEValor/1 * -32
                else(SLOPE == 1)
                    distanciaPouso += SLOPEValor/1 * 362

                if(VAP > VREF)
                    distanciaPouso += VAP/5 * 138
                
                // for(REV)
                distanciaPouso += REV + 1425
        }
        return distanciaPouso;
    }

    let calculo450 = function(RWYCC, WGT, ALT, WIND, TEMP, SLOPE,
        VAP, REV, ICE,VREF, WINDValor, SLOPEValor){
            var SL = 0
            var distanciaPouso = 0
            if(ICE == false){
                if(RWYCC == 6) {
                    distanciaPouso += 1009
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -40
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 41
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 27
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 20
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -10
    
                    if(WIND == 0)  //head
                        distanciaPouso += WINDValor/5 * -21
                    else(WIND == 1) //wind
                        distanciaPouso += WINDValor/5 * 94
                    
                    if(SLOPE == 0) //uphill
                        distanciaPouso += SLOPEValor/1 * -6
                    else(SLOPE == 1) //downhill
                        distanciaPouso += SLOPEValor/1 * 102
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 98
                    
                    // for(REV)
                    distanciaPouso += REV + 84
                }
    
    
                if(RWYCC == 5) {
                    distanciaPouso += 1213
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -55
                    else (WGT > 18000)
                        distanciaPouso +=WGT/1000 * 41
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 39
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 34
                    else(TEMP < 15)
                        distanciaPouso +=TEMP/5 * -14
    
                    if(WIND == 0)
                        distanciaPouso += WINDValor/5 * -28
                    else(WIND == 1)
                        distanciaPouso += WINDValor/5 * 151
                    
                    if(SLOPE == 0)
                        distanciaPouso += SLOPEValor/1 * -10
                    else(SLOPE == 1)
                        distanciaPouso += SLOPEValor/1 * 139
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 116
                    
                    // for(REV)
                    distanciaPouso += REV + 380  
                }
                
                if(RWYCC == 4) {
                    distanciaPouso += 1328
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -56
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 55
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 39
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 33
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -14
    
                    if(WIND == 0)
                        distanciaPouso += WINDValor/5 * -30
                    else(WIND == 1)
                        distanciaPouso += WINDValor/5 * 140
                    
                    if(SLOPE == 0)
                        distanciaPouso += SLOPEValor/1 * -14
                    else(SLOPE == 1)
                        distanciaPouso += SLOPEValor/1 * 149
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 107
                    
                    // for(REV)
                    distanciaPouso += REV + 364
                        
                }
                
                if(RWYCC == 3) {
                    distanciaPouso += 1404
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -61
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 60
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 43
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 37
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -15
    
                    if(WIND == 0)
                        distanciaPouso += WINDValor/5 * -33
                    else(WIND == 1)
                        distanciaPouso += WINDValor/5 * 157
                    
                    if(SLOPE == 0)
                        distanciaPouso += SLOPEValor/1 * -18
                    else(SLOPE == 1)
                        distanciaPouso += SLOPEValor/1 * 169
    
                    if(VAP > VREF)
                        VAP = VAP/5 * 110
                    
                    // for(REV)
                    distanciaPouso += REV + 497
    
                }
                if(RWYCC == 2) {
                    distanciaPouso += 1495
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -71
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 70
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 53
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 51
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -18
    
                    if(WIND == 0)
                        distanciaPouso += WINDValor/5 * -37
                    else(WIND == 1)
                        distanciaPouso += WINDValor/5 * 217
                    
                    if(SLOPE == 0)
                        distanciaPouso += SLOPEValor/1 * -20
                    else(SLOPE == 1)
                        distanciaPouso += SLOPEValor/1 * 222
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 119
                    
                    // for(REV)
                    distanciaPouso += REV + 935
    
                }
                if(RWYCC == 1) {
                    distanciaPouso += 1637
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -76
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 75
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 56
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 53
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -18
    
                    if(WIND == 0)
                        distanciaPouso += WINDValor/5 * -41
                    else(WIND == 1)
                        distanciaPouso += WINDValor/5 * 218
                    
                    if(SLOPE == 0)
                        distanciaPouso += SLOPEValor/1 * -27
                    else(SLOPE == 1)
                        distanciaPouso += SLOPEValor/1 * 273
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 117
                    
                    // for(REV)
                    distanciaPouso += REV + 1461
    
                }
            }
            if(ICE == true){
                if(RWYCC == 6) {
                    distanciaPouso += 1074
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -43
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 45
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 29
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 22
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -11
    
                    if(WIND == 0)  //head
                        distanciaPouso += WINDValor/5 * -21
                    else(WIND == 1) //wind
                        distanciaPouso += WINDValor/5 * 97
                    
                    if(SLOPE == 0) //uphill
                        distanciaPouso += SLOPEValor/1 * -6
                    else(SLOPE == 1) //downhill
                        distanciaPouso += SLOPEValor/1 * 107
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 101
                    
                    // for(REV)
                    distanciaPouso += REV + 91
                }
                if(RWYCC == 5) {
                    distanciaPouso += 1288
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -58
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 58
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 42
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 37
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -15
    
                    if(WIND == 0)  //head
                        distanciaPouso += WINDValor/5 * -29
                    else(WIND == 1) //wind
                        distanciaPouso += WINDValor/5 * 154
                    
                    if(SLOPE == 0) //uphill
                        distanciaPouso += SLOPEValor/1 * -11
                    else(SLOPE == 1) //downhill
                        distanciaPouso += SLOPEValor/1 * 148
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 112
                    
                    // for(REV)
                    distanciaPouso += REV + 403
                }
                if(RWYCC == 4) {
                    distanciaPouso += 1399
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -60
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 59
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 42
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 35
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -15
    
                    if(WIND == 0)  //head
                        distanciaPouso += WINDValor/5 * -31
                    else(WIND == 1) //wind
                        distanciaPouso += WINDValor/5 * 143
                    
                    if(SLOPE == 0) //uphill
                        distanciaPouso += SLOPEValor/1 * -15
                    else(SLOPE == 1) //downhill
                        distanciaPouso += SLOPEValor/1 * 154
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 107
                    
                    // for(REV)
                    distanciaPouso += REV + 372
                }
                if(RWYCC == 3) {
                    distanciaPouso += 1477
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -64
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 64
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 46
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 40
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -16
    
                    if(WIND == 0)  //head
                        distanciaPouso += WINDValor/5 * -34
                    else(WIND == 1) //wind
                        distanciaPouso += WINDValor/5 * 160
                    
                    if(SLOPE == 0) //uphill
                        distanciaPouso += SLOPEValor/1 * -18
                    else(SLOPE == 1) //downhill
                        distanciaPouso += SLOPEValor/1 * 174
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 109
                    
                    // for(REV)
                    distanciaPouso += REV + 509
                }
                if(RWYCC == 2) {
                    distanciaPouso += 1571
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -74
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 74
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 56
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 54
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -19
    
                    if(WIND == 0)  //head
                        distanciaPouso += WINDValor/5 * -37
                    else(WIND == 1) //wind
                        distanciaPouso += WINDValor/5 * 220
                    
                    if(SLOPE == 0) //uphill
                        distanciaPouso += SLOPEValor/1 * -20
                    else(SLOPE == 1) //downhill
                        distanciaPouso += SLOPEValor/1 * 228
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 117
                    
                    // for(REV)
                    distanciaPouso += REV + 953
                }
                if(RWYCC == 1) {
                    distanciaPouso += 1711
                    if(WGT < 18000)
                        distanciaPouso += WGT/1000 * -80
                    else (WGT > 18000)
                        distanciaPouso += WGT/1000 * 79
                        
                    if(ALT > SL)
                        distanciaPouso += ALT/1000 * 59
    
                    if(TEMP > 15)
                        distanciaPouso += TEMP/5 * 56
                    else(TEMP < 15)
                        distanciaPouso += TEMP/5 * -19
    
                    if(WIND == 0)  //head
                        distanciaPouso += WINDValor/5 * -42
                    else(WIND == 1) //wind
                        distanciaPouso += WINDValor/5 * 221
                    
                    if(SLOPE == 0) //uphill
                        distanciaPouso += SLOPEValor/1 * -28
                    else(SLOPE == 1) //downhill
                        distanciaPouso += SLOPEValor/1 * 278
    
                    if(VAP > VREF)
                        distanciaPouso += VAP/5 * 115
                    
                    // for(REV)
                    distanciaPouso += REV + 1426
                }
            }
            return distanciaPouso
        }