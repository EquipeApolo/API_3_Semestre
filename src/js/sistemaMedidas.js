$(document).ready( function () {
    loadMasks();
  });

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
