import { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Aircraft from "../Models/aircraft";
import '../Style/App.css';
import aviao from "../Icons/aviao.png";
import { getValue } from "@testing-library/user-event/dist/utils";
import { BrakingLevel } from '../Enuns/enuns';
import React from "react";
import axios from 'axios';
import Swal from 'sweetalert2'

type state = {
    modelError: string,
    engineError: string,
    reversorError: string,
    certificationError: string,
    flapError: string,
    breakingError: string,
    weightMinError: string,
    weightMaxError: string,
    result: string,
    refWithIceError: string, //ok
    refWithouIceError: string, //ok
    weightReferenceError: string, //ok
    weightBellowWithoutIceError: string, //ok
    weightAboveWithoutIceError: string, //ok
    weightBellowWithIceError: string, //ok
    weightAboveWithIceError: string, //ok
    altitudeReferenceError: string, //ok
    altitudeWithIceError: string, //ok
    altitudeWithoutIceError: string,
    tempReferenceError: string,
    tempBellowWithIceError: string,
    tempAboveWithIceError: string,
    tempBellowWithoutIceError: string,
    tempAboveWithoutIceError: string,
    windReferenceError: string,
    windHeadWithIceError: string,
    windTailWithIceError: string,
    windHeadWithoutIceError: string,
    windTailWithoutIceError: string,
    slopeReferenceError: string,
    slopeUphillWithIceError: string,
    slopeDownhillWithIceError: string,
    slopeUphillWithoutIceError: string,
    slopeDownhillWithoutIceError: string,
    overspeedReferenceError: string,
    overspeedWithIceError: string,
    overspeedWithoutIceError: string,
    reverserWithIceError: string,
    reverserWithoutIceError: string
}
class cadastroAeronave extends Component<any, state>{

    private aircraft: Aircraft = new Aircraft('', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );
    
    constructor(props: any) {
        super(props);
        this.state = {
            modelError: '',
            engineError: '',
            reversorError: '',
            certificationError: '',
            flapError: '',
            breakingError: '',
            weightMinError: '',
            weightMaxError: '',
            result: '',
            altitudeReferenceError: '',
            altitudeWithIceError: '',
            altitudeWithoutIceError: '',
            overspeedReferenceError: '',
            overspeedWithIceError: '',
            overspeedWithoutIceError: '',
            refWithIceError: '',
            refWithouIceError: '',
            reverserWithIceError: '',
            reverserWithoutIceError: '',
            slopeDownhillWithIceError: '',
            slopeDownhillWithoutIceError: '',
            slopeReferenceError: '',
            slopeUphillWithIceError: '',
            slopeUphillWithoutIceError: '',
            tempAboveWithIceError: '',
            tempAboveWithoutIceError: '',
            tempBellowWithIceError: '',
            tempBellowWithoutIceError: '',
            tempReferenceError: '',
            weightAboveWithIceError: '',
            weightAboveWithoutIceError: '',
            weightBellowWithIceError: '',
            weightBellowWithoutIceError: '',
            weightReferenceError: '',
            windHeadWithIceError: '',
            windHeadWithoutIceError: '',
            windReferenceError: '',
            windTailWithIceError: '',
            windTailWithoutIceError: ''
        }
        this.modelChange = this.modelChange.bind(this);
        this.engineChange = this.engineChange.bind(this);
        this.certificationChange = this.certificationChange.bind(this);
        this.reversorChange = this.reversorChange.bind(this);
        this.flapChange = this.flapChange.bind(this);
        this.brakingLevelChange = this.brakingLevelChange.bind(this);
        this.aircraftWeightChangeMin = this.aircraftWeightChangeMin.bind(this);
        this.aircraftWeightChangeMax = this.aircraftWeightChangeMax.bind(this);
        //this.cadastrar = this.cadastrar.bind(this);
        this.refWithIceChange = this.refWithIceChange.bind(this);
        this.refWithouIceChange = this.refWithouIceChange.bind(this);
        this.weightReferenceChange = this.weightReferenceChange.bind(this);
        this.weightBellowWithoutIceChange = this.weightBellowWithoutIceChange.bind(this);
        this.weightAboveWithoutIceChange = this.weightAboveWithoutIceChange.bind(this);
        this.weightBellowWithIceChange = this.weightBellowWithIceChange.bind(this);
        this.weightAboveWithIceChange = this.weightAboveWithIceChange.bind(this);
        this.altitudeReferenceChange = this.altitudeReferenceChange.bind(this);
        this.altitudeWithIceChange = this.altitudeWithIceChange.bind(this);
        this.altitudeWithoutIceChange = this.altitudeWithoutIceChange.bind(this);
        this.tempReferenceChange = this.tempReferenceChange.bind(this);
        this.tempBellowWithIceChange = this.tempBellowWithIceChange.bind(this);
        this.tempAboveWithIceChange = this.tempAboveWithIceChange.bind(this);
        this.tempBellowWithoutIceChange = this.tempBellowWithoutIceChange.bind(this);
        this.tempAboveWithoutIceChange = this.tempAboveWithoutIceChange.bind;
        this.windReferenceChange = this.windReferenceChange.bind(this);
        this.windHeadWithIceChange = this.windHeadWithIceChange.bind(this);
        this.windTailWithIceChange = this.windTailWithIceChange.bind(this);
        this.windHeadWithoutIceChange = this.windHeadWithoutIceChange.bind(this);
        this.windTailWithoutIceChange = this.windTailWithoutIceChange.bind(this);
        this.slopeReferenceChange = this.slopeReferenceChange.bind(this);
        this.slopeUphillWithIceChange = this.slopeUphillWithIceChange.bind(this);
        this.slopeDownhillWithIceChange = this.slopeDownhillWithIceChange.bind(this);
        this.slopeUphillWithoutIceChange = this.slopeUphillWithoutIceChange.bind(this);
        this.slopeDownhillWithoutIceChange = this.slopeDownhillWithoutIceChange.bind(this);
        this.overspeedReferenceChange = this.overspeedReferenceChange.bind(this);
        this.overspeedWithIceChange = this.overspeedWithIceChange.bind(this);
        this.overspeedWithoutIceChange = this.overspeedWithoutIceChange.bind(this);
        this.reverserWithIceChange = this.reverserWithIceChange.bind(this);
        this.reverserWithoutIceChange = this.reverserWithoutIceChange.bind(this);
    }


    eventoFormulario = (evento: any) => {
        evento.preventDefault()
    }

    /*receberValorEntrada(event){
        let entrada = event.target.value
        this.setState({
            aircraft.model: entrada,
            engine: entrada,
        })
    }*/

    modelChange(event) {
        let modelError = ""
        const target = event.target;
        this.aircraft.setModel = target.value;
        if (!this.aircraft.getModel) {
            modelError = "The model is required";
        } else {
            modelError = ""
        }
        this.setState({ modelError: modelError })
    }
    engineChange(event) {
        let engineError = ""
        const target = event.target;
        this.aircraft.setEngine = target.value;
        if (!this.aircraft.getEngine) {
            engineError = "The engine is required";
        } else {
            engineError = ""
        }
        this.setState({ engineError: engineError })
    }
    certificationChange(event) {
        let certificationError
        const target = event.target;
        this.aircraft.setCertification = target.value;
        if (!this.aircraft.getCertification) {
            certificationError = "Select a certification"
        } else {
            certificationError = ""
        }
        this.setState({ certificationError: certificationError })
    }
    flapChange(event) {
        let flapError
        const target = event.target;
        this.aircraft.setFlapValue = target.value;
        if (!this.aircraft.getFlapValue) {
            flapError = "Select a flap"
        } else {
            flapError = ""
        }
        this.setState({ flapError: flapError })
    }
    reversorChange(event) {
        let reversorError
        const target = event.target;
        this.aircraft.setReverserAmount = target.value;
        if (!this.aircraft.getReverserAmount) {
            reversorError = "The aircraft must have at least one(1) reversor."
        } else {
            reversorError = ""
        }
        this.setState({ reversorError: reversorError })
    }
    brakingLevelChange(event) {
        const target = event.target;
        this.aircraft.setBrakingApplicationLevel = target.value;
        if (this.state.breakingError.includes("Select")) {
          this.setState({ breakingError: "" })
        }
        if (this.state.result != "") this.setState({ result: "" })
      }

   aircraftWeightChangeMin(event) {
        const target = event.target;
        this.aircraft.setAircraftWeightMin = target.value;
        if (this.aircraft.getAircraftWeightMin < 5000) {
          this.setState({ weightMinError: "The weight must be above 5000" })
        }
   
        if (this.state.weightMinError.includes("required") || this.state.weightMinError.includes("above") && this.aircraft.getAircraftWeightMin >= 5000) {
          this.setState({ weightMinError: "" })
        }
        if (this.state.result != "") this.setState({ result: "" })
      }
   aircraftWeightChangeMax(event) {
       const target = event.target;
       this.aircraft.setAircraftWeightMax = target.value;
       if ( this.aircraft.getAircraftWeightMax < 10000) {
           this.setState({ weightMaxError: "The weight must be above 10000" })
       }
       if ( this.aircraft.getAircraftWeightMax > 100000){
           this.setState({weightMaxError: "The weight must be below 100000"})
       }

       if (this.state.weightMaxError.includes("required") || this.state.weightMaxError.includes("above") && this.aircraft.getAircraftWeightMax >= 10000) {
           this.setState({ weightMaxError: "" })
       }
       if (this.state.result != "") this.setState({ result: "" })
       }
   /*cadastrar(event) {
       const target = event.target.value
       this.aircraft.result = //Adicionar result à aeronave novamente para colocar os valores necessários aqui
   }*/
   refWithIceChange(event){
    let refWithIceError;
    const target = event.target;
    this.aircraft.setRefWithIce = target.value;
    if (!this.aircraft.getRefWithIce) {
        refWithIceError = "The reference with ice is required";
    }else{
        refWithIceError = ""
    }
    this.setState({ refWithIceError: refWithIceError})
   }

   refWithouIceChange(event) {
    let refWithouIceError;
    const target = event.target;
    this.aircraft.setRefWithouIce = target.value;
    if (!this.aircraft.getRefWithouIce) {
        refWithouIceError = "The reference without ice is required";
    }else{
        refWithouIceError = ""
    }
    this.setState({ refWithouIceError: refWithouIceError})
   }

   weightReferenceChange(event){
    let weightReferenceError;
    const target = event.target;
    this.aircraft.setWeightReference = target.value;
    if (!this.aircraft.getWeightReference) {
        weightReferenceError = "The weight reference is required";
    }else{
        weightReferenceError = ""
    }
    this.setState({ weightReferenceError: weightReferenceError})
   }

   weightBellowWithoutIceChange(event) {
    let weightBellowWithoutIceError;
    const target = event.target;
    this.aircraft.setWeightBellowWithoutIce = target.value;
    if (!this.aircraft.getWeightBellowWithoutIce) {
        weightBellowWithoutIceError = "The weight bellow without ice is required";
    }else{
        weightBellowWithoutIceError = ""
    }
    this.setState({ weightBellowWithoutIceError: weightBellowWithoutIceError})
   }

   weightAboveWithoutIceChange(event) {
    let weightAboveWithoutIceError;
    const target = event.value;
    this.aircraft.setWeightAboveWithoutIce = target.value;
    if (!this.aircraft.getWeightAboveWithoutIce) {
        weightAboveWithoutIceError = "The weight above without ice is required";
    }else{
        weightAboveWithoutIceError = ""
    }
    this.setState({ weightAboveWithoutIceError: weightAboveWithoutIceError})
   }

   weightBellowWithIceChange(event) {
    let weightBellowWithIceError;
    const target = event.value;
    this.aircraft.setWeightBellowWithIce = target.value;
    if (!this.aircraft.getWeightBellowWithIce) {
        weightBellowWithIceError = "The weight bellow with ice is required";
    }else{
        weightBellowWithIceError = ""
    }
    this.setState({ weightBellowWithIceError: weightBellowWithIceError})
   }

   weightAboveWithIceChange(event) {
    let weightAboveWithIceError;
    const target = event.target;
    this.aircraft.setWeightAboveWithIce = target.value;
    if (!this.aircraft.getWeightAboveWithIce) {
        weightAboveWithIceError = "The weight above with ice is required";
    }else{
        weightAboveWithIceError = ""
    }
    this.setState({ weightAboveWithIceError: weightAboveWithIceError})
   }

   altitudeReferenceChange(event) {
    let altitudeReferenceError;
    const target = event.target;
    this.aircraft.setAltitudeReference = target.value;
    if (!this.aircraft.getAltitudeReference) {
        altitudeReferenceError = "The altitude reference is required";
    }else{
        altitudeReferenceError = ""
    }
    this.setState({ altitudeReferenceError: altitudeReferenceError})
   }

   altitudeWithIceChange(event) {
    let altitudeWithIceError;
    const target = event.target;
    this.aircraft.setAltitudeWithIce = target.value;
    if (!this.aircraft.getAltitudeWithIce) {
        altitudeWithIceError = "The altitude with ice is required";
    }else{
        altitudeWithIceError = ""
    }
    this.setState({ altitudeWithIceError: altitudeWithIceError})
   }

   altitudeWithoutIceChange(event) {
    let altitudeWithoutIceError;
    const target = event.target;
    this.aircraft.setAltitudeWithoutIce = target.value;
    if (!this.aircraft.getAltitudeWithoutIce) {
        altitudeWithoutIceError = "The altitude without ice is required";
    } else {
        altitudeWithoutIceError = ""
    }
    this.setState({ altitudeWithoutIceError: altitudeWithoutIceError})
   }

   tempReferenceChange(event) {
    let tempReferenceError;
    const target = event.target;
    this.aircraft.setTempReference = target.value;
    if (!this.aircraft.getTempReference) {
        tempReferenceError = "The temperature reference is required";
    } else {
        tempReferenceError = ""
    }
    this.setState({ tempReferenceError: tempReferenceError})
   }

   tempBellowWithIceChange(event) {
    let tempBellowWithIceError;
    const target = event.target;
    this.aircraft.setTempBellowWithIce = target.value;
    if (!this.aircraft.getTempBellowWithIce) {
        tempBellowWithIceError = "The temperature bellow with ice is required";
    } else {
        tempBellowWithIceError = ""
    }
    this.setState({ tempBellowWithIceError: tempBellowWithIceError})
   }

   tempAboveWithIceChange(event) {
    let tempAboveWithIceError;
    const target = event.target;
    this.aircraft.setTempAboveWithIce = target.value;
    if (!this.aircraft.getTempAboveWithIce) {
        tempAboveWithIceError = "The temperature above with ice is required";
    } else {
        tempAboveWithIceError = ""
    }
    this.setState({ tempAboveWithIceError: tempAboveWithIceError})
   }

   tempBellowWithoutIceChange(event) {
    let tempBellowWithoutIceError;
    const target = event.target;
    this.aircraft.setTempBellowWithoutIce = target.value;
    if (!this.aircraft.getTempBellowWithoutIce) {
        tempBellowWithoutIceError = "The temperature bellow with ice is required";
    } else {
        tempBellowWithoutIceError = ""
    }
    this.setState({ tempBellowWithoutIceError: tempBellowWithoutIceError})
   }

   tempAboveWithoutIceChange(event) {
    let tempAboveWithoutIceError;
    const target = event.target;
    this.aircraft.setTempAboveWithoutIce = target.value;
    if (!this.aircraft.getTempAboveWithoutIce) {
        tempAboveWithoutIceError = "The temperature above without ice is required";
    } else {
        tempAboveWithoutIceError = ""
    }
    this.setState({ tempAboveWithoutIceError: tempAboveWithoutIceError})
   }

   windReferenceChange(event) {
    let windReferenceError;
    const target = event.target;
    this.aircraft.setWindReference = target.value;
    if (!this.aircraft.getWindReference) {
        windReferenceError = "The wind reference is required";
    } else {
        windReferenceError = ""
    }
    this.setState({ windReferenceError: windReferenceError})
   }

   windHeadWithIceChange(event) {
    let windHeadWithIceError;
    const target = event.target;
    this.aircraft.setWindHeadWithIce = target.value;
    if (!this.aircraft.getWindHeadWithIce) {
        windHeadWithIceError = "The wind head with ice is required";
    } else {
        windHeadWithIceError = ""
    }
    this.setState({ windHeadWithIceError: windHeadWithIceError})
   }

   windTailWithIceChange(event) {
    let windTailWithIceError;
    const target = event.target;
    this.aircraft.setWindTailWithIce = target.value;
    if (!this.aircraft.getWindTailWithIce) {
        windTailWithIceError = "The wind tail with ice is required";
    } else {
        windTailWithIceError = ""
    }
    this.setState({ windTailWithIceError: windTailWithIceError})
   }

   windHeadWithoutIceChange(event) {
    let windHeadWithoutIceError;
    const target = event.target;
    this.aircraft.setWindHeadWithoutIce = target.value;
    if (!this.aircraft.getWindHeadWithoutIce) {
        windHeadWithoutIceError = "The wind head without ice is required";
    } else {
        windHeadWithoutIceError = ""
    }
    this.setState({ windHeadWithoutIceError: windHeadWithoutIceError})
   }

   windTailWithoutIceChange(event) {
    let windTailWithoutIceError;
    const target = event.target;
    this.aircraft.setWindTailWithoutIce = target.value;
    if (!this.aircraft.getWindTailWithoutIce) {
        windTailWithoutIceError = "The wind tail without ice is required";
    } else {
        windTailWithoutIceError = ""
    }
    this.setState({ windTailWithoutIceError: windTailWithoutIceError})
   }

   slopeReferenceChange(event) {
    let slopeReferenceError;
    const target = event.target;
    this.aircraft.setSlopeReference = target.value;
    if (!this.aircraft.getSlopeReference) {
        slopeReferenceError = "The slope reference is required";
    } else {
        slopeReferenceError = ""
    }
    this.setState({ slopeReferenceError: slopeReferenceError})
   }

   slopeUphillWithIceChange(event) {
    let slopeUphillWithIceError;
    const target = event.target;
    this.aircraft.setSlopeUphillWithIce = target.value;
    if (!this.aircraft.getSlopeUphillWithIce) {
        slopeUphillWithIceError = "The slope uphill with ice is required";
    } else {
        slopeUphillWithIceError = ""
    }
    this.setState({ slopeUphillWithIceError: slopeUphillWithIceError})
   }

   slopeDownhillWithIceChange(event) {
    let slopeDownhillWithIceError;
    const target = event.target;
    this.aircraft.setSlopeDownhillWithIce = target.value;
    if (!this.aircraft.getSlopeDownhillWithIce) {
        slopeDownhillWithIceError = "The slope downhill with ice is required";
    } else {
        slopeDownhillWithIceError = ""
    }
    this.setState({ slopeDownhillWithIceError: slopeDownhillWithIceError})
   }

   slopeUphillWithoutIceChange(event) {
    let slopeUphillWithoutIceError;
    const target = event.target;
    this.aircraft.setSlopeUphillWithoutIce = target.value;
    if (!this.aircraft.getSlopeUphillWithoutIce) {
        slopeUphillWithoutIceError = "The slope uphill without ice is required";
    } else {
        slopeUphillWithoutIceError = ""
    }
    this.setState({ slopeUphillWithoutIceError: slopeUphillWithoutIceError})
   }

   slopeDownhillWithoutIceChange(event) {
    let slopeDownhillWithoutIceError;
    const target = event.target;
    this.aircraft.setSlopeDownhillWithoutIce = target.value;
    if (!this.aircraft.getSlopeDownhillWithoutIce) {
        slopeDownhillWithoutIceError = "The slope downhill without ice is required";
    } else {
        slopeDownhillWithoutIceError = ""
    }
    this.setState({ slopeDownhillWithoutIceError: slopeDownhillWithoutIceError})
   }

   overspeedReferenceChange(event) {
    let overspeedReferenceError;
    const target = event.target;
    this.aircraft.setOverspeedReference = target.value;
    if (!this.aircraft.getOverspeedReference) {
        overspeedReferenceError = "The overspeed reference is required";
    } else {
        overspeedReferenceError = ""
    }
    this.setState({ overspeedReferenceError: overspeedReferenceError})
   }

   overspeedWithIceChange(event) {
    let overspeedWithIceError;
    const target = event.target;
    this.aircraft.setOverspeedWithIce = target.value;
    if (!this.aircraft.getOverspeedWithIce) {
        overspeedWithIceError = "The overspeed with ice is required";
    } else {
        overspeedWithIceError = ""
    }
    this.setState({ overspeedWithIceError: overspeedWithIceError})
   }

   overspeedWithoutIceChange(event) {
    let overspeedWithoutIceError;
    const target = event.target;
    this.aircraft.setOverspeedWithoutIce = target.value;
    if (!this.aircraft.getOverspeedWithoutIce) {
        overspeedWithoutIceError = "The overspeed without ice is required";
    } else {
        overspeedWithoutIceError = ""
    }
    this.setState({ overspeedWithoutIceError: overspeedWithoutIceError})
   }

   reverserWithIceChange(event) {
    let reverserWithIceError;
    const target = event.target;
    this.aircraft.setReverserWithIce = target.value;
    if (!this.aircraft.getReverserWithIce) {
        reverserWithIceError = "The reverser with ice is required";
    } else {
        reverserWithIceError = ""
    }
    this.setState({ reverserWithIceError: reverserWithIceError})
   }

   reverserWithoutIceChange(event) {
    let reverserWithoutIceError;
    const target = event.target;
    this.aircraft.setReverserWithoutIce = target.value;
    if (!this.aircraft.getReverserWithoutIce) {
        reverserWithoutIceError = "The reverser without ice is required";
    } else {
        reverserWithoutIceError = ""
    }
    this.setState({ reverserWithoutIceError: reverserWithoutIceError})
   }

   validate = () => {
       let modelError = "";
       let engineError = "";
       let reversorError = "";
       let certificationError = "";
       let flapError = "";
       let breakingError = "";
       let weightMinError = "";
       let weightMaxError = "";
       let refWithIceError = "";
       let refWithouIceError = "";
       let weightReferenceError = "";
       let weightBellowWithoutIceError = "";
       let weightAboveWithoutIceError = "";
       let weightBellowWithIceError = "";
       let weightAboveWithIceError = "";
       let altitudeReferenceError = "";
       let altitudeWithIceError = "";
       let altitudeWithoutIceError = "";
       let tempReferenceError = "";
       let tempBellowWithIceError = "";
       let tempAboveWithIceError = "";
       let tempBellowWithoutIceError = "";
       let tempAboveWithoutIceError = "";
       let windReferenceError = "";
       let windHeadWithIceError = "";
       let windTailWithIceError = "";
       let windHeadWithoutIceError = "";
       let windTailWithoutIceError = "";
       let slopeReferenceError = "";
       let slopeUphillWithIceError = "";
       let slopeDownhillWithIceError = "";
       let slopeUphillWithoutIceError = "";
       let slopeDownhillWithoutIceError = "";
       let overspeedReferenceError = "";
       let overspeedWithIceError = "";
       let overspeedWithoutIceError = ""; 
       let reverserWithIceError = ""; 
       let reverserWithoutIceError = ""; 
       
       if (!this.aircraft.getModel) {
           modelError = "The model is required"
       } else {
           modelError = ""
       }
       if (!this.aircraft.getEngine) {
           engineError = "The engine is required";
       } else {
           engineError = ""
       }
       if (!this.aircraft.getReverserAmount) {
           reversorError = "The aircraft must have at least one(1) reversor."
       } else {
           reversorError = ""
       }
       if (!this.aircraft.getCertification) {
           certificationError = "Select a certification"
       } else {
           certificationError = ""
       }
       if (!this.aircraft.getFlapValue) {
           flapError = "Select a flap"
       } else {
           flapError = ""
       }
       if (!this.aircraft.getBrakingApplicationLevel) {
           breakingError = "Select a braking level";
       } else {
           breakingError = ""
       }
       if (!this.aircraft.getAircraftWeightMin) {
           weightMinError = "The weight is required";
       } else if (this.aircraft.getAircraftWeightMin < 5000) {
           weightMinError = "The weight must be above 5000";
       } else {
           weightMinError = ""
       }
       if (!this.aircraft.getAircraftWeightMax) {
           weightMaxError = "The weight is required";
       } else if (this.aircraft.getAircraftWeightMax > 100000) {
           weightMaxError = "The weight must be above 100000";
       } else {
           weightMaxError = ""
       }
       if (!this.aircraft.getRefWithIce) {
        refWithIceError = "The reference with ice is required";
       } else {
        refWithIceError = ""
       }
       if (!this.aircraft.getRefWithouIce) {
        refWithouIceError = "The reference without is required";
       } else {
        refWithouIceError = ""
       }
       if (!this.aircraft.getWeightReference) {
        weightReferenceError = "The weight reference is required";
       } else {
        weightReferenceError = ""
       }
       if (!this.aircraft.getWeightBellowWithoutIce) {
        weightBellowWithoutIceError = "The weight bellow without ice is required";
       } else {
        weightBellowWithoutIceError = ""
       }
       if (!this.aircraft.getWeightAboveWithoutIce) {
        weightAboveWithoutIceError = "The weight above without is required";
       } else {
        weightAboveWithoutIceError = ""
       }
       if (!this.aircraft.getWeightBellowWithIce) {
        weightBellowWithIceError = "The weight bellow with ice is required";
       } else {
        weightBellowWithIceError = ""
       }
       if (!this.aircraft.getWeightAboveWithIce) {
        weightAboveWithIceError = "The weight above with ice is required";
       } else {
        weightAboveWithIceError = ""
       }
       if (!this.aircraft.getAltitudeReference) {
        altitudeReferenceError = "The altitude reference is required";
       } else {
        altitudeReferenceError = ""
       }
       if (!this.aircraft.getAltitudeWithIce) {
        altitudeWithIceError = "The altitude with ice is required";
       } else {
        altitudeWithIceError = ""
       }
       if (!this.aircraft.getAltitudeWithoutIce) {
        altitudeWithoutIceError = "The altitude without ice is required";
       } else {
        altitudeWithoutIceError = ""
       }
       if (!this.aircraft.getTempReference) {
        tempReferenceError = "The temperature reference is required";
       } else {
        tempReferenceError = ""
       }
       if (!this.aircraft.getTempBellowWithIce) {
        tempBellowWithIceError = "The temperature bellow with ice is required";
       } else {
        tempBellowWithIceError = ""
       }
       if (!this.aircraft.getTempAboveWithIce) {
        tempAboveWithIceError = "The temperature above with ice is required";
       } else {
        tempAboveWithIceError = ""
       }
       if (!this.aircraft.getTempBellowWithoutIce) {
        tempBellowWithoutIceError = "The temperature bellow with ice is required";
       } else {
        tempBellowWithoutIceError = ""
       }
       if (!this.aircraft.getTempAboveWithoutIce) {
        tempAboveWithoutIceError = "The temperature above without ice is required";
       } else {
        tempAboveWithoutIceError = ""
       }
       if (!this.aircraft.getWindReference) {
        windReferenceError = "The wind reference is required";
       } else {
        windReferenceError = ""
       }
       if (!this.aircraft.getWindHeadWithIce) {
        windHeadWithIceError = "The wind head with ice is required";
       } else {
        windHeadWithIceError = ""
       }
       if (!this.aircraft.getWindTailWithIce) {
        windTailWithIceError = "The wind tail with ice is required";
       } else {
        windTailWithIceError = ""
       }
       if (!this.aircraft.getWindHeadWithoutIce) {
        windHeadWithoutIceError = "The wind head without is required";
       } else {
        windHeadWithoutIceError = ""
       }
       if (!this.aircraft.getWindTailWithoutIce) {
        windTailWithoutIceError = "The wind tail without ice is required";
       } else {
        windTailWithoutIceError = ""
       }
       if (!this.aircraft.getSlopeReference) {
        slopeReferenceError = "The slope reference is required";
       } else {
        slopeReferenceError = ""
       }
       if (!this.aircraft.getSlopeUphillWithIce) {
        slopeUphillWithIceError = "The slope uphill with ice is required";
       } else {
        slopeUphillWithIceError = ""
       }
       if (!this.aircraft.getSlopeDownhillWithIce) {
        slopeDownhillWithIceError = "The slope downhill with ice is required";
       } else {
        slopeDownhillWithIceError = ""
       }
       if (!this.aircraft.getSlopeUphillWithoutIce) {
        slopeUphillWithoutIceError = "The slope uphill without ice is required";
       } else {
        slopeUphillWithoutIceError = ""
       }
       if (!this.aircraft.getSlopeDownhillWithoutIce) {
        slopeDownhillWithoutIceError = "The slope downhill without ice is required";
       } else {
        slopeDownhillWithoutIceError = ""
       }
       if (!this.aircraft.getOverspeedReference) {
        overspeedReferenceError = "The overspeed reference is required";
       } else {
        overspeedReferenceError = ""
       }
       if (!this.aircraft.getOverspeedWithIce) {
        overspeedWithIceError = "The overspeed with ice is required";
       } else {
        overspeedWithIceError = ""
       }
       if (!this.aircraft.getOverspeedWithoutIce) {
        overspeedWithoutIceError = "The overspeed without ice is required";
       } else {
        overspeedWithoutIceError = ""
       }
       if (!this.aircraft.getReverserWithIce) {
        reverserWithIceError = "The reverser with ice is required";
       } else {
        reverserWithIceError = ""
       }
       if (!this.aircraft.getReverserWithoutIce) {
        reverserWithoutIceError = "The reverser without ice is required";
       } else {
        reverserWithoutIceError = ""
       }
     
       this.setState({ modelError: modelError, engineError: engineError, reversorError: reversorError, certificationError: certificationError, flapError: flapError,  
        breakingError: breakingError, weightMinError: weightMinError, weightMaxError: weightMaxError, refWithIceError: refWithIceError, refWithouIceError: refWithouIceError,
        weightReferenceError: weightReferenceError, weightBellowWithoutIceError: weightBellowWithoutIceError, weightAboveWithoutIceError: weightAboveWithoutIceError,
        weightBellowWithIceError: weightBellowWithIceError, weightAboveWithIceError: weightAboveWithIceError, altitudeReferenceError: altitudeReferenceError, altitudeWithIceError: altitudeWithIceError, 
        altitudeWithoutIceError: altitudeWithoutIceError, tempReferenceError:tempReferenceError, tempBellowWithIceError:tempBellowWithIceError, tempAboveWithIceError: tempAboveWithIceError, 
        tempBellowWithoutIceError: tempBellowWithoutIceError, tempAboveWithoutIceError: tempAboveWithoutIceError, windReferenceError: windReferenceError, windHeadWithIceError: windHeadWithIceError, 
        windTailWithIceError: windTailWithIceError, windHeadWithoutIceError: windHeadWithoutIceError, windTailWithoutIceError: windTailWithoutIceError, slopeReferenceError: slopeReferenceError, 
        slopeUphillWithIceError: slopeUphillWithIceError, slopeDownhillWithIceError: slopeDownhillWithIceError, slopeUphillWithoutIceError: slopeUphillWithoutIceError, 
        slopeDownhillWithoutIceError: slopeDownhillWithoutIceError, overspeedReferenceError: overspeedReferenceError, overspeedWithIceError: overspeedWithIceError, 
        overspeedWithoutIceError: overspeedWithoutIceError, reverserWithIceError: reverserWithIceError, reverserWithoutIceError: reverserWithoutIceError});
       if (modelError || engineError || reversorError || certificationError || flapError || breakingError || weightMinError || weightMaxError || refWithIceError
        || refWithouIceError || weightReferenceError || weightBellowWithoutIceError || weightAboveWithoutIceError || weightBellowWithIceError || weightAboveWithIceError
        || altitudeReferenceError || altitudeWithIceError || altitudeWithoutIceError || tempReferenceError || tempBellowWithIceError || tempAboveWithIceError || tempBellowWithoutIceError
        || tempAboveWithoutIceError || windReferenceError || windHeadWithIceError || windTailWithIceError || windHeadWithoutIceError || windTailWithoutIceError || slopeReferenceError 
        || slopeUphillWithIceError || slopeDownhillWithIceError || slopeUphillWithoutIceError || slopeDownhillWithoutIceError || overspeedReferenceError || overspeedWithIceError
        || overspeedWithoutIceError || reverserWithIceError || reverserWithoutIceError) {
           return false
       }

       return true;
   }

    postClickButton = (event: any) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            axios.post("http://localhost:3001/airplane/cadastrar", {
                model: this.aircraft.getModel,
                engine: this.aircraft.getEngine,
                certification: this.aircraft.getCertification,
                aircraftWeightMin: this.aircraft.getAircraftWeightMin,
                aircraftWeightMax: this.aircraft.getAircraftWeightMax,
                flap: this.aircraft.getFlapValue,
                reverserAmount: this.aircraft.getReverserAmount,
                brakingApplicationLevel: this.aircraft.getBrakingApplicationLevel
            })
            
            axios.post("http://localhost:3001/operationDistance/cadastrar",{
                refWithouIce: 2312321,
                refWithIce: 324234,
                weightReference: 21121,
                weightBellowWithoutIce: 121212121,
                weightAboveWithoutIce: 1,
                weightBellowWithIce: 2,
                weightAboveWithIce: 0,
                altitudeReference: 65656,
                altitudeWithIce: 9077,
                altitudeWithoutIce: 213,
                tempReference: 21121,
                tempBellowWithIce: 121212121,
                tempAboveWithIce: 1,
                tempBellowWithoutIce: 2,
                tempAboveWithoutIce: 0,
                windReference: 35325,
                windHeadWithIce: 5235,
                windTailWithIce: 35,
                windHeadWithoutIce: 21121,
                windTailWithoutIce: 121212121,
                slopeReference: 1,
                slopeUphillWithIce: 2,
                slopeDownhillWithIce: 0,
                slopeUphillWithoutIce: 435435,
                slopeDownhillWithoutIce: 45345,
                overspeedReference: 89789,
                overspeedWithIce: 21121,
                overspeedWithotIce: 121212121,
                reverserWithIce: 851818,
                reverserWithoutIce: 949498,
                airplaneId: 1
            })

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Register completed',
                showConfirmButton: false,
                timer: 1500
              })
            setTimeout(function() {
                window.location.reload();
              }, 1500);
        }
    }

    render() {
        return (
            <form onSubmit={this.eventoFormulario} id="form">
                <Container className="px-2 mb-5">
                    <Container>
                        <Row className="px-2 mb-5 mt-5">
                            <img src={aviao} alt="Avião." className="img col-sm-5 col-md-3 col-lg-2"></img>
                            <h1 className='text-center mt-5 col-sm-7 col-md-9'>New Aircraft</h1>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Form>
                            <Row>
                                <Col>
                                    <h5 className="card-title">Aircraft model</h5>
                                    <input type='text' className='input form-control form-control-lg inputGroup-sizing-sm' id="model"
                                        placeholder="Aircraft model" onChange={this.modelChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.modelError}
                                    </div>

                                </Col>
                                <Col>
                                    <h5 className="card-title">Engine</h5>
                                    <input type='text' className="input form-control form-control-lg inputGroup-sizing-sm" id='engine' placeholder='Engine' onChange={this.engineChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.engineError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Reversor</h5>
                                    <input type='number' className="input form-control form-control-lg inputGroup-sizing-sm" id='reversor' placeholder='Reversor' onChange={this.reversorChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.reversorError}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <h5 className="card-title">Braking application level</h5>
                                    <select defaultValue="-1" className="input text-select form-select form-select-sm form-control-sm select custom-select mb-3" id="brankingLevel" onChange={this.brakingLevelChange}>
                                    <option value="-1" disabled>Select...</option>
                                    <option value="1">Maximum Manual</option>
                                    <option value="2">Autobrake High</option>
                                    <option value="3">Autobrake Med.</option>
                                    <option value="4">Autobrake Low</option>
                                    </select>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.breakingError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Certification</h5>
                                    <select defaultValue="-1" className="input text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnCertification" onChange={this.certificationChange}>
                                        <option value="-1" disabled>Select</option>
                                        <option value="1">ANAC</option>
                                        <option value="2">EASA</option>
                                        <option value="2">FAA</option>
                                    </select>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.certificationError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Flap</h5>
                                    <select defaultValue="-1" className="input text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnFlap" onChange={this.flapChange}>
                                        <option value="-1" disabled>Select</option>
                                        <option value="1">220</option>
                                        <option value="2">450</option>
                                    </select>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.flapError}
                                    </div>
                                </Col>
                                
                               
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="card-title">Aircraft Weight Min </h5>
                                    <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChangeMin} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightMinError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Aircraft Weight Max </h5>
                                    <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChangeMax} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightMaxError}
                                    </div>
                                </Col>
                                <Col>
                                </Col>
                                <hr className="hrStyle"></hr>
                                <Container>
                                    <Form>
                                        <Row>
                                            <Col>
                                            <h5 className="card-title">Reference with ice</h5>
                                            <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="refWithIce" placeholder="Reference with ice" onChange={this.refWithIceChange} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.refWithIceError}
                                            </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Container>
                            </Row>
                            <Row className="px-2 mt-5">
                                <Col/>
                            </Row>
                            <Row className="px-2">
                                <Col>
                                    <Button className="botao-resultado" size="lg" onClick={this.postClickButton}>Save</Button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Form>
                    </Container>
                </Container>
            </form>
        );
    }
}

export default cadastroAeronave;