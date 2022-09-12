function dadosInput(){  

    //Pegando valor do Input
    let model = document.getElementById('model').value
    let temperature = Number (document.getElementById('temperature').value)
    let engine = document.getElementById('engine').value
    let weight = Number (document.getElementById('weight').value)
    let wind = Number (document.getElementById('wind').value)
    let braking = Number (document.getElementById('braking').value)
    let speedAdditive = Number( document.getElementById('speedAdditive').value)
    let slope = Number( document.getElementById('slope').value)
    let altitude = Number (document.getElementById('altitude').value)


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
    document.getElementById('Result').value = weight + wind;       

    console.log(reverserSwitchCheck);
    console.log(flapSwitchCheck);
    


    console.log(valuex); 
    console.log(model, engine, temperature , weight, wind, braking, speedAdditive, slope, altitude)


} 

