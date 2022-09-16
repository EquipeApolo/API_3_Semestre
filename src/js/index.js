function dadosInput(){  
    //import {FLAP220, FLAP450} from "../calculo/app.js"
    //Pegando valor do Input
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

    // let calculoPouso = null 
    // if (flapNumero == 220){
    //     calculoPouso = new FLAP220(valuex,weight,altitude,valueTypeWind,temperature, valueTypeSlope,speedAdditive,
    //         reversor,IceAccreationCheck,2000,wind,slope)
    // }else if(flapNumero = 450){
    //     calculoPouso = new FLAP450(valuex,weight,altitude,valueTypeWind,temperature, valueTypeSlope,speedAdditive,
    //         reversor,IceAccreationCheck,2000,wind,slope)
    // }else{
    //     console.log("ERRO!")
    // }

    //Input Resultado   

    let soma = new Number(weight) + new Number(wind);
    $('#Result').val(soma);
    console.log(2+2);    

    console.log(flapNumero);

    console.log(IceAccreationCheck);
    console.log(valuex); 
    console.log(model, temperature, engine , weight, wind, speedAdditive, slope, altitude, reversor)


}   
