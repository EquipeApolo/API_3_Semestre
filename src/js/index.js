

$(document).ready( function () {
    loadMasks();
  });

function dadosInput(){  
   let moduloCalculo = require('calculo')

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

  
    if (flapNumero == 220){
        calculoPouso = moduloCalculo.FLAP220(valuex,weight,altitude,valueTypeWind,temperature, valueTypeSlope,speedAdditive,
            reversor,IceAccreationCheck,2000,wind,slope)
    }else if(flapNumero = 450){
        calculoPouso = moduloCalculo.FLAP450(valuex,weight,altitude,valueTypeWind,temperature, valueTypeSlope,speedAdditive,
            reversor,IceAccreationCheck,2000,wind,slope)
    }else{
        console.log("ERRO!")
    }

    //Input Resultado   
    $('#Result').val(calculoPouso);       

    console.log(flapNumero);

    console.log(IceAccreationCheck);

    console.log(valuex); 
    console.log(model, engine, temperature , weight, wind, speedAdditive, slope, slopeRunway, altitude)


} 

function loadMasks() {
    $('#btnMeasurement').change(function (){
        var sistemaMedidas = $(this).val();
        let saidaWeight = document.getElementById('AircraftWeight')
        let saidaTemp = document.getElementById('Temperature')
        let saidaWind = document.getElementById('Wind')
        let saidaSpeedA = document.getElementById('SpeedAdditive')
        let saidaAirportA = document.getElementById('AirportAltitude')

        if(sistemaMedidas == "1"){ 
              saidaWeight.innerHTML = 'Kg'
              saidaTemp.innerHTML = '°C'
              saidaWind.innerHTML = 'Km/h'
              saidaSpeedA.innerHTML = 'Km/h'
              saidaAirportA.innerHTML = 'M'
    
            }
          else{
              saidaWeight.innerHTML = 'Lbs'
              saidaTemp.innerHTML = '°F'
              saidaWind.innerHTML = 'Kt/h'
              saidaSpeedA.innerHTML = 'Mi/h'
              saidaAirportA.innerHTML = 'Ft'
    
          }  
      }); 
}

