import { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Aircraft from "../Models/aircraft";
import aviao from "../Icons/aviao.png";
import { BrakingLevel } from '../Enuns/enuns';
import React from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import Table from "../Models/table";

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
    refWithIceError: string, 
    refWithouIceError: string, 
    weightReferenceError: string, 
    weightBellowWithoutIceError: string,
    weightAboveWithoutIceError: string, 
    weightBellowWithIceError: string, 
    weightAboveWithIceError: string, 
    altitudeReferenceError: string, 
    altitudeWithIceError: string, 
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
    reverserWithoutIceError: string,
    dados: any[],
    aircraft: Aircraft
}
class editarAeronave extends Component<any, state>{

    private brakingLevel: BrakingLevel;
    private aircraftWeightMin: number = 0;
    private aircraftWeightMax: number = 0;
    private table: Table = new Table();

    constructor(props) {
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
            windTailWithoutIceError: '',
            dados: [],
            aircraft: new Aircraft('','','',0,0,0,0,0)
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
        this.tempAboveWithoutIceChange = this.tempAboveWithoutIceChange.bind(this);
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
    // let idAirplane = this.props.params.id
    componentDidMount(): void {
        
        axios.get('http://localhost:3001/airplane/' + this.props.taskId).then(response => {
          let dadosBanco = response.data
          this.setState({
            dados: dadosBanco,
            aircraft: new Aircraft(dadosBanco.model, dadosBanco.engine, dadosBanco.certification, dadosBanco.flap, dadosBanco.reverserAmount, dadosBanco.aircraftWeightMin, dadosBanco.aircraftWeightMax, dadosBanco.brakingApplicationLevel)
          })
        })
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
        this.state.aircraft.setModel = target.value;
        if (!this.state.aircraft.getModel) {
            modelError = "The model is required";
        } else {
            modelError = ""
        }
        this.setState({ modelError: modelError })
    }
    engineChange(event) {
        let engineError = ""
        const target = event.target;
        this.state.aircraft.setEngine = target.value;
        if (!this.state.aircraft.getEngine) {
            engineError = "The engine is required";
        } else {
            engineError = ""
        }
        this.setState({ engineError: engineError })
    }
    
    certificationChange(event) {
        let certificationError
        const target = event.target;
        this.state.aircraft.setCertification = target.value;
        this.setState({ certificationError: certificationError })
    }
    flapChange(event) {
        let flapError
        const target = event.target;
        this.state.aircraft.setFlapValue = target.value;
        this.setState({ flapError: flapError })
    }
    brakingLevelChange(event) {
        let breakingError
        const target = event.target;
        this.state.aircraft.setBrakingApplicationLevel = target.value;
        this.setState({breakingError: breakingError})
      }
    reversorChange(event) {
        let reversorError
        const target = event.target;
        this.state.aircraft.setReverserAmount = target.value;
        if (!this.state.aircraft.getReverserAmount) {
            reversorError = "The reverser is required."
        } else {
            reversorError = ""
        }
        this.setState({ reversorError: reversorError })
    }

    aircraftWeightChangeMin(event) {
         const target = event.target;
         this.state.aircraft.setAircraftWeightMin = target.value;
         if (this.aircraftWeightMin <= 0) {
           this.setState({ weightMinError: "The weight must be above zero" })
         }
         if (this.state.weightMinError.includes("required") || this.state.weightMinError.includes("above") || this.aircraftWeightMin >= 0) {
           this.setState({ weightMinError: "" })
         }
         if (this.state.result != "") this.setState({ result: "" })
       }


    aircraftWeightChangeMax(event) {
        const target = event.target;
        this.state.aircraft.setAircraftWeightMax = target.value;
        if (this.aircraftWeightMax <= 0) {
            this.setState({ weightMaxError: "The weight must be above zero" })
        }
        if (this.state.weightMaxError.includes("required") || this.state.weightMaxError.includes("above") || this.aircraftWeightMax >= 0) {
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
        this.table.refWithIce = target.value;
        if (!this.table.refWithIce) {
            refWithIceError = "The reference with ice is required";
        }else{
            refWithIceError = ""
        }
        this.setState({ refWithIceError: refWithIceError})
        }

    refWithouIceChange(event) {
        let refWithouIceError;
        const target = event.target;
        this.table.refWithoutIce = target.value;
        if (!this.table.refWithoutIce) {
            refWithouIceError = "The reference without ice is required";
        }else{
            refWithouIceError = ""
        }
        this.setState({ refWithouIceError: refWithouIceError})
        }

    weightReferenceChange(event){
        let weightReferenceError;
        const target = event.target;
        this.table.weightReference = target.value;
        if (!this.table.weightReference) {
            weightReferenceError = "The weight reference is required";
        }else{
            weightReferenceError = ""
        }
        this.setState({ weightReferenceError: weightReferenceError})
        }

    weightBellowWithoutIceChange(event) {
        let weightBellowWithoutIceError;
        const target = event.target;
        this.table.weightBellowWithoutIce = target.value;
        if (!this.table.weightBellowWithoutIce) {
            weightBellowWithoutIceError = "The weight bellow without ice is required";
        }else{
            weightBellowWithoutIceError = ""
        }
        this.setState({ weightBellowWithoutIceError: weightBellowWithoutIceError})
        }

    weightAboveWithoutIceChange(event) {
        let weightAboveWithoutIceError;
        const target = event.target;
        this.table.weightAboveWithoutIce = target.value;
        if (!this.table.weightAboveWithoutIce) {
            weightAboveWithoutIceError = "The weight above without ice is required";
        }else{
            weightAboveWithoutIceError = ""
        }
        this.setState({ weightAboveWithoutIceError: weightAboveWithoutIceError})
        }

    weightBellowWithIceChange(event) {
        let weightBellowWithIceError;
        const target = event.target;
        this.table.weightBellowWithIce = target.value;
        if (!this.table.weightBellowWithIce) {
            weightBellowWithIceError = "The weight bellow with ice is required";
        }else{
            weightBellowWithIceError = ""
        }
        this.setState({ weightBellowWithIceError: weightBellowWithIceError})
        }

    weightAboveWithIceChange(event) {
        let weightAboveWithIceError;
        const target = event.target;
        this.table.weightAboveWithIce = target.value;
        if (!this.table.weightAboveWithIce) {
            weightAboveWithIceError = "The weight above with ice is required";
        }else{
            weightAboveWithIceError = ""
        }
        this.setState({ weightAboveWithIceError: weightAboveWithIceError})
        }

    altitudeReferenceChange(event) {
        let altitudeReferenceError;
        const target = event.target;
        this.table.altitudeReference = target.value;
        if (!this.table.altitudeReference) {
            altitudeReferenceError = "The altitude reference is required";
        }else{
            altitudeReferenceError = ""
        }
        this.setState({ altitudeReferenceError: altitudeReferenceError})
        }

    altitudeWithIceChange(event) {
        let altitudeWithIceError;
        const target = event.target;
        this.table.altitudeWithIce = target.value;
        if (!this.table.altitudeWithIce) {
            altitudeWithIceError = "The altitude with ice is required";
        }else{
            altitudeWithIceError = ""
        }
        this.setState({ altitudeWithIceError: altitudeWithIceError})
        }

    altitudeWithoutIceChange(event) {
        let altitudeWithoutIceError;
        const target = event.target;
        this.table.altitudeWithoutIce = target.value;
        if (!this.table.altitudeWithoutIce) {
            altitudeWithoutIceError = "The altitude without ice is required";
        } else {
            altitudeWithoutIceError = ""
        }
        this.setState({ altitudeWithoutIceError: altitudeWithoutIceError})
        }

    tempReferenceChange(event) {
        let tempReferenceError;
        const target = event.target;
        this.table.tempReference = target.value;
        if (!this.table.tempReference) {
            tempReferenceError = "The temperature reference is required";
        } else {
            tempReferenceError = ""
        }
        this.setState({ tempReferenceError: tempReferenceError})
        }

    tempBellowWithIceChange(event) {
        let tempBellowWithIceError;
        const target = event.target;
        this.table.tempBellowWithIce = target.value;
        if (!this.table.tempBellowWithIce) {
            tempBellowWithIceError = "The temperature bellow with ice is required";
        } else {
            tempBellowWithIceError = ""
        }
        this.setState({ tempBellowWithIceError: tempBellowWithIceError})
        }

    tempAboveWithIceChange(event) {
        let tempAboveWithIceError;
        const target = event.target;
        this.table.tempAboveWithIce = target.value;
        if (!this.table.tempAboveWithIce) {
            tempAboveWithIceError = "The temperature above with ice is required";
        } else {
            tempAboveWithIceError = ""
        }
        this.setState({ tempAboveWithIceError: tempAboveWithIceError})
        }

    tempBellowWithoutIceChange(event) {
        let tempBellowWithoutIceError;
        const target = event.target;
        this.table.tempBellowWithoutIce = target.value;
        if (!this.table.tempBellowWithoutIce) {
            tempBellowWithoutIceError = "The temperature bellow with ice is required";
        } else {
            tempBellowWithoutIceError = ""
        }
        this.setState({ tempBellowWithoutIceError: tempBellowWithoutIceError})
        }

    tempAboveWithoutIceChange(event) {
        let tempAboveWithoutIceError;
        const target = event.target;
        this.table.tempAboveWithoutIce = target.value;
        if (!this.table.tempAboveWithoutIce) {
            tempAboveWithoutIceError = "The temperature above without ice is required";
        } else {
            tempAboveWithoutIceError = ""
        }
        this.setState({ tempAboveWithoutIceError: tempAboveWithoutIceError})
        }

    windReferenceChange(event) {
        let windReferenceError;
        const target = event.target;
        this.table.windReference = target.value;
        if (!this.table.windReference) {
            windReferenceError = "The wind reference is required";
        } else {
            windReferenceError = ""
        }
        this.setState({ windReferenceError: windReferenceError})
        }

    windHeadWithIceChange(event) {
        let windHeadWithIceError;
        const target = event.target;
        this.table.windHeadWithIce = target.value;
        if (!this.table.windHeadWithIce) {
            windHeadWithIceError = "The wind head with ice is required";
        } else {
            windHeadWithIceError = ""
        }
        this.setState({ windHeadWithIceError: windHeadWithIceError})
        }

    windTailWithIceChange(event) {
        let windTailWithIceError;
        const target = event.target;
        this.table.windTailWithIce = target.value;
        if (!this.table.windTailWithIce) {
            windTailWithIceError = "The wind tail with ice is required";
        } else {
            windTailWithIceError = ""
        }
        this.setState({ windTailWithIceError: windTailWithIceError})
        }

    windHeadWithoutIceChange(event) {
        let windHeadWithoutIceError;
        const target = event.target;
        this.table.windHeadWithoutIce = target.value;
        if (!this.table.windHeadWithoutIce) {
            windHeadWithoutIceError = "The wind head without ice is required";
        } else {
            windHeadWithoutIceError = ""
        }
        this.setState({ windHeadWithoutIceError: windHeadWithoutIceError})
        }

    windTailWithoutIceChange(event) {
        let windTailWithoutIceError;
        const target = event.target;
        this.table.windTailWithoutIce = target.value;
        if (!this.table.windTailWithoutIce) {
            windTailWithoutIceError = "The wind tail without ice is required";
        } else {
            windTailWithoutIceError = ""
        }
        this.setState({ windTailWithoutIceError: windTailWithoutIceError})
        }

    slopeReferenceChange(event) {
        let slopeReferenceError;
        const target = event.target;
        this.table.slopeReference = target.value;
        if (!this.table.slopeReference) {
            slopeReferenceError = "The slope reference is required";
        } else {
            slopeReferenceError = ""
        }
        this.setState({ slopeReferenceError: slopeReferenceError})
        }

    slopeUphillWithIceChange(event) {
        let slopeUphillWithIceError;
        const target = event.target;
        this.table.slopeUphillWithIce = target.value;
        if (!this.table.slopeUphillWithIce) {
            slopeUphillWithIceError = "The slope uphill with ice is required";
        } else {
            slopeUphillWithIceError = ""
        }
        this.setState({ slopeUphillWithIceError: slopeUphillWithIceError})
        }

    slopeDownhillWithIceChange(event) {
        let slopeDownhillWithIceError;
        const target = event.target;
        this.table.slopeDownhillWithIce = target.value;
        if (!this.table.slopeDownhillWithIce) {
            slopeDownhillWithIceError = "The slope downhill with ice is required";
        } else {
            slopeDownhillWithIceError = ""
        }
        this.setState({ slopeDownhillWithIceError: slopeDownhillWithIceError})
        }

    slopeUphillWithoutIceChange(event) {
        let slopeUphillWithoutIceError;
        const target = event.target;
        this.table.slopeUphillWithoutIce = target.value;
        if (!this.table.slopeUphillWithoutIce) {
            slopeUphillWithoutIceError = "The slope uphill without ice is required";
        } else {
            slopeUphillWithoutIceError = ""
        }
        this.setState({ slopeUphillWithoutIceError: slopeUphillWithoutIceError})
        }

    slopeDownhillWithoutIceChange(event) {
        let slopeDownhillWithoutIceError;
        const target = event.target;
        this.table.slopeDownhillWithoutIce = target.value;
        if (!this.table.slopeDownhillWithoutIce) {
            slopeDownhillWithoutIceError = "The slope downhill without ice is required";
        } else {
            slopeDownhillWithoutIceError = ""
        }
        this.setState({ slopeDownhillWithoutIceError: slopeDownhillWithoutIceError})
        }

    overspeedReferenceChange(event) {
        let overspeedReferenceError;
        const target = event.target;
        this.table.overspeedReference = target.value;
        if (!this.table.overspeedReference) {
            overspeedReferenceError = "The overspeed reference is required";
        } else {
            overspeedReferenceError = ""
        }
        this.setState({ overspeedReferenceError: overspeedReferenceError})
        }

    overspeedWithIceChange(event) {
        let overspeedWithIceError;
        const target = event.target;
        this.table.overspeedWithIce = target.value;
        if (!this.table.overspeedWithIce) {
            overspeedWithIceError = "The overspeed with ice is required";
        } else {
            overspeedWithIceError = ""
        }
        this.setState({ overspeedWithIceError: overspeedWithIceError})
        }

    overspeedWithoutIceChange(event) {
        let overspeedWithoutIceError;
        const target = event.target;
        this.table.overspeedWithoutIce = target.value;
        if (!this.table.overspeedWithoutIce) {
            overspeedWithoutIceError = "The overspeed without ice is required";
        } else {
            overspeedWithoutIceError = ""
        }
        this.setState({ overspeedWithoutIceError: overspeedWithoutIceError})
        }

    reverserWithIceChange(event) {
        let reverserWithIceError;
        const target = event.target;
        this.table.reverserWithIce = target.value;
        if (!this.table.reverserWithIce) {
            reverserWithIceError = "The reverser with ice is required";
        } else {
            reverserWithIceError = ""
        }
        this.setState({ reverserWithIceError: reverserWithIceError})
        }

    reverserWithoutIceChange(event) {
        let reverserWithoutIceError;
        const target = event.target;
        this.table.reverserWithoutIce = target.value;
        if (!this.table.reverserWithoutIce) {
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

        if (!this.state.aircraft.getModel) {
            modelError = "The model is required"
        } else {
            modelError = ""
        }
        if (!this.state.aircraft.getEngine) {
            engineError = "The engine is required";
        } else {
            engineError = ""
        }
        if (!this.state.aircraft.getReverserAmount) {
            reversorError = "The reverser is required."
        } else {
            reversorError = ""
        }

        if (!this.state.aircraft.getAircraftWeightMin) {
            weightMinError = "The minimum weight is required";
        } else if (this.state.aircraft.getAircraftWeightMin <= 0) {
            weightMinError = "The weight must be above zero";
        } else {
            weightMinError = ""
        }


        if (!this.state.aircraft.getAircraftWeightMax) {
            weightMaxError = "The maximum weight is required";
        }else if(this.state.aircraft.getAircraftWeightMax <= 0){
            weightMaxError = "The weight must be above zero"
        }else{
            weightMaxError= ""
        }
        
        if (!this.table.refWithIce) {
            refWithIceError = "The reference with ice is required";
        } else {
        refWithIceError = ""
        }
        if (!this.table.refWithoutIce) {
        refWithouIceError = "The reference without is required";
        } else {
        refWithouIceError = ""
        }
        if (!this.table.weightReference) {
        weightReferenceError = "The weight reference is required";
        } else {
        weightReferenceError = ""
        }
        if (!this.table.weightBellowWithoutIce) {
        weightBellowWithoutIceError = "The weight bellow without ice is required";
        } else {
        weightBellowWithoutIceError = ""
        }
        if (!this.table.weightAboveWithoutIce) {
        weightAboveWithoutIceError = "The weight above without is required";
        } else {
        weightAboveWithoutIceError = ""
        }
        if (!this.table.weightBellowWithIce) {
        weightBellowWithIceError = "The weight bellow with ice is required";
        } else {
        weightBellowWithIceError = ""
        }
        if (!this.table.weightAboveWithIce) {
        weightAboveWithIceError = "The weight above with ice is required";
        } else {
        weightAboveWithIceError = ""
        }
        if (!this.table.altitudeReference) {
        altitudeReferenceError = "The altitude reference is required";
        } else {
        altitudeReferenceError = ""
        }
        if (!this.table.altitudeWithIce) {
        altitudeWithIceError = "The altitude with ice is required";
        } else {
        altitudeWithIceError = ""
        }
        if (!this.table.altitudeWithoutIce) {
        altitudeWithoutIceError = "The altitude without ice is required";
        } else {
        altitudeWithoutIceError = ""
        }
        if (!this.table.tempReference) {
        tempReferenceError = "The temperature reference is required";
        } else {
        tempReferenceError = ""
        }
        if (!this.table.tempBellowWithIce) {
        tempBellowWithIceError = "The temperature bellow with ice is required";
        } else {
        tempBellowWithIceError = ""
        }
        if (!this.table.tempAboveWithIce) {
        tempAboveWithIceError = "The temperature above with ice is required";
        } else {
        tempAboveWithIceError = ""
        }
        if (!this.table.tempBellowWithoutIce) {
        tempBellowWithoutIceError = "The temperature bellow with ice is required";
        } else {
        tempBellowWithoutIceError = ""
        }
        if (!this.table.tempAboveWithoutIce) {
        tempAboveWithoutIceError = "The temperature above without ice is required";
        } else {
        tempAboveWithoutIceError = ""
        }
        if (!this.table.windReference) {
        windReferenceError = "The wind reference is required";
        } else {
        windReferenceError = ""
        }
        if (!this.table.windHeadWithIce) {
        windHeadWithIceError = "The wind head with ice is required";
        } else {
        windHeadWithIceError = ""
        }
        if (!this.table.windTailWithIce) {
        windTailWithIceError = "The wind tail with ice is required";
        } else {
        windTailWithIceError = ""
        }
        if (!this.table.windHeadWithoutIce) {
        windHeadWithoutIceError = "The wind head without is required";
        } else {
        windHeadWithoutIceError = ""
        }
        if (!this.table.windTailWithoutIce) {
        windTailWithoutIceError = "The wind tail without ice is required";
        } else {
        windTailWithoutIceError = ""
        }
        if (!this.table.slopeReference) {
        slopeReferenceError = "The slope reference is required";
        } else {
        slopeReferenceError = ""
        }
        if (!this.table.slopeUphillWithIce) {
        slopeUphillWithIceError = "The slope uphill with ice is required";
        } else {
        slopeUphillWithIceError = ""
        }
        if (!this.table.slopeDownhillWithIce) {
        slopeDownhillWithIceError = "The slope downhill with ice is required";
        } else {
        slopeDownhillWithIceError = ""
        }
        if (!this.table.slopeUphillWithoutIce) {
        slopeUphillWithoutIceError = "The slope uphill without ice is required";
        } else {
        slopeUphillWithoutIceError = ""
        }
        if (!this.table.slopeDownhillWithoutIce) {
        slopeDownhillWithoutIceError = "The slope downhill without ice is required";
        } else {
        slopeDownhillWithoutIceError = ""
        }
        if (!this.table.overspeedReference) {
        overspeedReferenceError = "The overspeed reference is required";
        } else {
        overspeedReferenceError = ""
        }
        if (!this.table.overspeedWithIce) {
        overspeedWithIceError = "The overspeed with ice is required";
        } else {
        overspeedWithIceError = ""
        }
        if (!this.table.overspeedWithoutIce) {
        overspeedWithoutIceError = "The overspeed without ice is required";
        } else {
        overspeedWithoutIceError = ""
        }
        if (!this.table.reverserWithIce) {
        reverserWithIceError = "The reverser with ice is required";
        } else {
        reverserWithIceError = ""
        }
        if (!this.table.reverserWithoutIce) {
        reverserWithoutIceError = "The reverser without ice is required";
        } else {
        reverserWithoutIceError = ""
        }

        this.setState({ modelError: modelError, engineError: engineError, reversorError: reversorError, weightMinError: weightMinError, weightMaxError: weightMaxError, refWithIceError: refWithIceError, refWithouIceError: refWithouIceError,
            weightReferenceError: weightReferenceError, weightBellowWithoutIceError: weightBellowWithoutIceError, weightAboveWithoutIceError: weightAboveWithoutIceError,
            weightBellowWithIceError: weightBellowWithIceError, weightAboveWithIceError: weightAboveWithIceError, altitudeReferenceError: altitudeReferenceError, altitudeWithIceError: altitudeWithIceError, 
            altitudeWithoutIceError: altitudeWithoutIceError, tempReferenceError:tempReferenceError, tempBellowWithIceError:tempBellowWithIceError, tempAboveWithIceError: tempAboveWithIceError, 
            tempBellowWithoutIceError: tempBellowWithoutIceError, tempAboveWithoutIceError: tempAboveWithoutIceError, windReferenceError: windReferenceError, windHeadWithIceError: windHeadWithIceError, 
            windTailWithIceError: windTailWithIceError, windHeadWithoutIceError: windHeadWithoutIceError, windTailWithoutIceError: windTailWithoutIceError, slopeReferenceError: slopeReferenceError, 
            slopeUphillWithIceError: slopeUphillWithIceError, slopeDownhillWithIceError: slopeDownhillWithIceError, slopeUphillWithoutIceError: slopeUphillWithoutIceError, 
            slopeDownhillWithoutIceError: slopeDownhillWithoutIceError, overspeedReferenceError: overspeedReferenceError, overspeedWithIceError: overspeedWithIceError, 
            overspeedWithoutIceError: overspeedWithoutIceError, reverserWithIceError: reverserWithIceError, reverserWithoutIceError: reverserWithoutIceError});
        if (modelError || engineError || reversorError || weightMinError || weightMaxError || refWithIceError
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
            console.log("teste " + this.props.taskId)
            axios.put("http://localhost:3001/airplane/modificar/" + this.props.taskId, {
                model: this.state.aircraft.getModel,
                engine: this.state.aircraft.getEngine,
                certification: this.state.aircraft.getCertification,
                aircraftWeightMin: this.state.aircraft.getAircraftWeightMin,
                aircraftWeightMax: this.state.aircraft.getAircraftWeightMax,
                flap: this.state.aircraft.getFlapValue,
                reverserAmount: this.state.aircraft.getReverserAmount,
                brakingApplicationLevel: this.state.aircraft.getBrakingApplicationLevel
            })
            axios.post("http://localhost:3001/operationDistance/cadastrar",{
                    refWithoutIce: this.table.refWithoutIce,
                    refWithIce: this.table.refWithIce,
                    weightReference: this.table.weightReference,
                    weightBellowWithoutIce: this.table.weightBellowWithoutIce,
                    weightAboveWithoutIce: this.table.weightAboveWithoutIce,
                    weightBellowWithIce: this.table.weightBellowWithIce,
                    weightAboveWithIce: this.table.weightAboveWithIce,
                    altitudeReference: this.table.altitudeReference,
                    altitudeWithIce: this.table.altitudeWithIce,
                    altitudeWithoutIce: this.table.altitudeWithoutIce,
                    tempReference: this.table.tempReference,
                    tempBellowWithIce: this.table.tempBellowWithIce,
                    tempAboveWithIce: this.table.tempAboveWithIce,
                    tempBellowWithoutIce: this.table.tempBellowWithoutIce,
                    tempAboveWithoutIce: this.table.tempAboveWithoutIce,
                    windReference: this.table.windReference,
                    windHeadWithIce: this.table.windHeadWithIce,
                    windTailWithIce: this.table.windTailWithIce,
                    windHeadWithoutIce: this.table.windHeadWithoutIce,
                    windTailWithoutIce: this.table.windTailWithoutIce,
                    slopeReference: this.table.slopeReference,
                    slopeUphillWithIce: this.table.slopeUphillWithIce,
                    slopeDownhillWithIce: this.table.slopeDownhillWithIce,
                    slopeUphillWithoutIce: this.table.slopeUphillWithoutIce,
                    slopeDownhillWithoutIce: this.table.slopeDownhillWithoutIce,
                    overspeedReference: this.table.overspeedReference,
                    overspeedWithIce: this.table.overspeedWithIce,
                    overspeedWithoutIce: this.table.overspeedWithoutIce,
                    reverserWithIce: this.table.reverserWithIce,
                    reverserWithoutIce: this.table.reverserWithoutIce,
                    airplaneId: this.props.taskId
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Update completed',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    render() {
        return (
                <Container className="px-2 mb-5">
                    <Container>
                        <Row className="px-2 mb-5 mt-5">
                            <img src={aviao} alt="Avião." className="img col-sm-5 col-md-3 col-lg-2"></img>
                            <h1 className='text-center mt-5 col-sm-7 col-md-9'>Aircraft update</h1>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Form onSubmit={this.eventoFormulario} id="form">
                            <Row>
                                <Col>
                                    <h5 className="card-title">Aircraft model</h5>
                                    <input type='text' className='input form-control form-control-lg inputGroup-sizing-sm' id="model"
                                        placeholder="Aircraft model" onChange={this.modelChange} value={this.state.aircraft.getModel} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.modelError}
                                    </div>

                                </Col>
                                <Col>
                                    <h5 className="card-title">Engine</h5>
                                    <input type='text' className="input form-control form-control-lg inputGroup-sizing-sm" id='engine' placeholder='Engine' onChange={this.engineChange} value={this.state.aircraft.getEngine}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.engineError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Reversor</h5>
                                    <input type='number' className="input form-control form-control-lg inputGroup-sizing-sm" id='reversor' placeholder='Reversor' onChange={this.reversorChange} value={this.state.aircraft.getReverserAmount}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.reversorError}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <h5 className="card-title">Braking application level</h5>
                                    <select value={this.state.aircraft.getBrakingApplicationLevel} className="input text-select form-select form-select-sm form-control-sm select custom-select mb-3" id="brankingLevel" onChange={this.brakingLevelChange}>
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
                                    <select value={this.state.aircraft.getCertification} className="input text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnCertification" onChange={this.certificationChange}>
                                        <option value="ANAC">ANAC</option>
                                        <option value="EASA">EASA</option>
                                        <option value="FAA">FAA</option>
                                    </select>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.certificationError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Flap</h5>
                                    <select value={this.state.aircraft.getFlapValue} className="input text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnFlap" onChange={this.flapChange}>
                                        <option value="220">220</option>
                                        <option value="450">450</option>
                                    </select>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.flapError}
                                    </div>
                                </Col>
                                
                               
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="card-title">Aircraft Weight Min </h5>
                                    <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChangeMin} value={this.state.aircraft.getAircraftWeightMin}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightMinError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Aircraft Weight Max </h5>
                                    <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChangeMax} value={this.state.aircraft.getAircraftWeightMax} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightMaxError}
                                    </div>
                                </Col>
                                <Col>
                                </Col>
                                <Container>
                                    <Form>
                                        <Row>
                                            <h2 className="pt-5 pb-5 text-center">Operational Landing Configuration</h2>
                                            <Row></Row>
                                            <Row>
                                                <Col className="pb-4">
                                                    <h4>&#x2022; Reference</h4>
                                                </Col>
                                            </Row>
                                            <Col>
                                                <h5 className="card-title">Reference With Ice (M)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="refWithIce" placeholder="Reference with ice" onChange={this.refWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.refWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Reference Without Ice (M)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="refWithoutIce" placeholder="Reference without ice" onChange={this.refWithouIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.refWithouIceError}
                                                </div>
                                            </Col>
                                            <Col></Col>

                                            <Row>
                                                <Col className="pt-4 pb-4">
                                                    <h4>&#x2022; Weight</h4>
                                                </Col>
                                            </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Weight Reference (Kg)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightReference" placeholder="Wheight Reference" onChange={this.weightReferenceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.weightReferenceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Weight Bellow Without Ice (Kg)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightBellowWithoutIce" placeholder="Weight Bellow Without Ice" onChange={this.weightBellowWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.weightBellowWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Weight Above Without Ice (Kg)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightAboveWithoutIce" placeholder="Weight Above Without Ice" onChange={this.weightAboveWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.weightAboveWithoutIceError}
                                                </div>
                                            </Col>
                                        </Row>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Weight Bellow With Ice (Kg)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightBellowWithIce" placeholder="Weight Bellow With Ice" onChange={this.weightBellowWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.weightBellowWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Weight Above With Ice (Kg)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightAboveWithIce" placeholder="Weight Above With Ice" onChange={this.weightAboveWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.weightAboveWithIceError}
                                                </div>
                                            </Col>
                                            <Col></Col>
                                        </Row>

                                        <Row>
                                            <Col className="pt-4 pb-4">
                                                <h4>&#x2022; Altitude</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Altitude Reference (Ft)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="altitudeReference" placeholder="Altitude Reference" onChange={this.altitudeReferenceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.altitudeReferenceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Altitude With Ice (Ft)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="altitudeWithIce" placeholder="Altitude With Ice" onChange={this.altitudeWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.altitudeWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Altitude Without Ice (Ft)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="altitudeWithoutIce" placeholder="Altitude Without Ice" onChange={this.altitudeWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.altitudeWithoutIceError}
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="pt-4 pb-4">
                                                <h4>&#x2022; Temperature</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Temperature Reference (ºC)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempReference" placeholder="Temperature Reference" onChange={this.tempReferenceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.tempReferenceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Temperature Bellow With Ice (ºC)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempBellowWithIce" placeholder="Temperature Bellow With Ice" onChange={this.tempBellowWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.tempBellowWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Temperature Above With Ice (ºC)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempAboveWithIce" placeholder="Temperature Above With Ice" onChange={this.tempAboveWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.tempAboveWithIceError}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Temperature Bellow Without Ice (ºC)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempBellowWithoutIce" placeholder="Temperature Bellow Without Ice" onChange={this.tempBellowWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.tempBellowWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Temperature Above Without Ice (ºC)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempAboveWithoutIce" placeholder="Temperature Above Without Ice" onChange={this.tempAboveWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.tempAboveWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col></Col>
                                        </Row>

                                        <Row>
                                            <Col className="pt-4 pb-4">
                                                <h4>&#x2022; Wind</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Wind Reference (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windReference" placeholder="Wind Reference" onChange={this.windReferenceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.windReferenceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Wind Head With Ice (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windHeadWithIce" placeholder="Wind Head With Ice" onChange={this.windHeadWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.windHeadWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Wind Tail With Ice (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windTailWithIce" placeholder="Wind Tail With Ice" onChange={this.windTailWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.windTailWithIceError}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Wind Head Without Ice (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windHeadWithoutIce" placeholder="Wind Head Without Ice" onChange={this.windHeadWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.windHeadWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Wind Tail Without Ice (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windTailWithoutIce" placeholder="Wind Tail Without Ice" onChange={this.windTailWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.windTailWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col></Col>
                                        </Row>

                                        <Row>
                                            <Col className="pt-4 pb-4">
                                                <h4>&#x2022; Slope</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Slope Reference</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeReference" placeholder="Slope Reference" onChange={this.slopeReferenceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.slopeReferenceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Slope Uphill With Ice</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeUphillWithIce" placeholder="Slope Uphill With Ice" onChange={this.slopeUphillWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.slopeUphillWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Slope Downhill With Ice</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeDownhillWithIce" placeholder="Slope Downhill With Ice" onChange={this.slopeDownhillWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.slopeDownhillWithIceError}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Slope Uphill Without Ice</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeUphillWithoutIce" placeholder="Slope Uphill Without Ice" onChange={this.slopeUphillWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.slopeUphillWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Slope Downhill Without Ice</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeDownhillWithoutIce" placeholder="Slope Downhill Without Ice" onChange={this.slopeDownhillWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.slopeDownhillWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                            
                                        <Row>
                                            <Col className="pt-4 pb-4">
                                                <h4>&#x2022; Overspeed</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Overspeed Reference (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="overspeedReference" placeholder="Overspeed Reference" onChange={this.overspeedReferenceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.overspeedReferenceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Overspeed With Ice (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="overspeedWithIce" placeholder="Overspeed With Ice" onChange={this.overspeedWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.overspeedWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Overspeed Without Ice (Kt)</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="overspeedWithoutIce" placeholder="Overspeed Without Ice" onChange={this.overspeedWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.overspeedWithoutIceError}
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="pt-4 pb-4">
                                                <h4>&#x2022; Reverser</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="card-title">Reverser With Ice</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="reverserWithIce" placeholder="Reverser With Ice" onChange={this.reverserWithIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.reverserWithIceError}
                                                </div>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title">Reverser Without Ice</h5>
                                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="reverserWithoutIce" placeholder="Reverser Without Ice" onChange={this.reverserWithoutIceChange} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.reverserWithoutIceError}
                                                </div>
                                            </Col>
                                            <Col></Col>
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
        );
    }
}


export default editarAeronave;