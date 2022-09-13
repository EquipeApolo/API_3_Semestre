$(document).ready( function () {
    loadMasks();
  });

function dadosInput(){  

    //Pegando valor do Input
    let model = $("#model").val();
    let temperature = $("#temperature").val();
    let engine = $("#engine").val();
    let weight = $("#weight").val();
    let wind =  $("#wind").val();
    let braking = $("#braking").val();
    let speedAdditive = $("#speedAdditive").val();
    let slope = $('#slope').val();
    let altitude = $("#altitude").val();

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
    

    //Pegando valor do Dropbox Runway condition
    var selectx = document.getElementById('btnCondition');
	var valuex = selectx.options[selectx.selectedIndex].value;


    
    //Verificando Reverser Switch Check
    let reverserSwitchCheck = false 
    let checkboxRS = document.getElementById('reverserSwitch');
        if(checkboxRS.checked) {
           reverserSwitchCheck = true;}  

        else{
           reverserSwitchCheck;}


    //Verificando Flap Switch Check
    let flapSwitchCheck = false 
    let checkboxFS = document.getElementById('flapSwitch');
        if(checkboxFS.checked) {
            flapSwitchCheck = true}  
    
        else{
            flapSwitchCheck}     


            
    //Input Resultado   
    let soma = new Number(weight) + new Number(wind);
    $('#Result').val(soma);       

    console.log(reverserSwitchCheck);
    console.log(flapSwitchCheck);
    


    console.log(valuex); 
    console.log(model, engine, temperature , weight, wind, braking, speedAdditive, slope, altitude)


} 

function loadMasks() {
    $('#btnMeasurement').change(function (){
        var sistemaMedidas = $(this).val();
        let saidaWeight = document.getElementById('AircraftWeight')
        let saidaTemp = document.getElementById('Temperature')
        let saidaWind = document.getElementById('Wind')
        let saidaSpeedA = document.getElementById('SpeedAdditive')
        let saidaAirportA = document.getElementById('AirportAltitude')
        let saidaSlopeRunway = document.getElementById('SlopeRunway')
    
        if(sistemaMedidas == "1"){ 
              saidaWeight.innerHTML = 'Kg'
              saidaTemp.innerHTML = '°C'
              saidaWind.innerHTML = 'Km/h'
              saidaSpeedA.innerHTML = 'Km/h'
              saidaAirportA.innerHTML = 'M'
              saidaSlopeRunway.innerHTML = '%'
    
            }
          else{
              saidaWeight.innerHTML = 'Lbs'
              saidaTemp.innerHTML = '°F'
              saidaWind.innerHTML = 'Kt/h'
              saidaSpeedA.innerHTML = 'Mi/h'
              saidaAirportA.innerHTML = 'Ft'
              saidaSlopeRunway.innerHTML = '%'
    
          }  
      }); 
}

