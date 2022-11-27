import { Component } from "react"
import axios from 'axios';
import Swal from 'sweetalert2'
import Table from "../Models/table";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React from "react";
import aviao from "../Icons/aviao.png";
import Flap from "../Models/flap";

type state = {
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
    flapError: string,
    result: string,
    dados: any[]
    flap: Flap
    table: Table

}

class EditarFlap extends Component<any, state>{
    private flap: Flap = new Flap('')
    private table: Table = new Table(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    
    constructor(props) {
        super(props)
        this.state = {
            flap: new Flap(''),
            table: new Table(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
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
            flapError: '',
            result: '',
            dados: []
        }

        this.flapChange = this.flapChange.bind(this);
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

    eventoFormulario = (evento: any) => {
        evento.preventDefault()
    }

    componentDidMount(): void {
        axios.get('http://localhost:3001/flap/' + this.props.taskId).then(res => {
            let dadosBanco = res.data
            this.setState({
                // dadosOperation: dadosBanco
                    flap: new Flap(dadosBanco.tipoFlap),
                    table: new Table(dadosBanco.refWithoutIce, dadosBanco.refWithIce, dadosBanco.weightReference, dadosBanco.weightBellowWithoutIce, dadosBanco.weightAboveWithoutIce, dadosBanco.weightBellowWithIce,
                    dadosBanco.weightAboveWithIce, dadosBanco.altitudeReference, dadosBanco.altitudeWithIce, dadosBanco.altitudeWithoutIce, dadosBanco.tempReference, dadosBanco.tempBellowWithIce, dadosBanco.tempAboveWithIce,
                    dadosBanco.tempBellowWithoutIce, dadosBanco.tempAboveWithoutIce, dadosBanco.windReference, dadosBanco.windHeadWithIce, dadosBanco.windTailWithIce, dadosBanco.windHeadWithoutIce, dadosBanco.windTailWithoutIce,
                    dadosBanco.slopeReference, dadosBanco.slopeUphillWithIce, dadosBanco.slopeDownhillWithIce, dadosBanco.slopeUphillWithoutIce, dadosBanco.slopeDownhillWithoutIce, dadosBanco.overspeedReference, dadosBanco.overspeedWithIce,
                    dadosBanco.overspeedWithoutIce, dadosBanco.reverserWithIce, dadosBanco.reverserWithoutIce)

                
            })
            console.log(dadosBanco);
        })
        
    }
    flapChange(event) {
        let flapError;
        const target = event.target;
        this.state.flap.tipoFlap = target.value;
        if (!this.state.flap.tipoFlap) {
            flapError = "The flap name is required";
        } else {
            flapError = ""
        }
        this.setState({ flapError: flapError })   
    }
    refWithIceChange(event) {
        let refWithIceError;
        const target = event.target;
        this.state.table.refWithIce = target.value;
        if (!this.state.table.refWithIce) {
            refWithIceError = "The reference with ice is required";
        } else {
            refWithIceError = ""
        }
        this.setState({ refWithIceError: refWithIceError })
    }

    refWithouIceChange(event) {
        let refWithouIceError;
        const target = event.target;
        this.state.table.refWithoutIce = target.value;
        if (!this.state.table.refWithoutIce) {
            refWithouIceError = "The reference without ice is required";
        } else {
            refWithouIceError = ""
        }
        this.setState({ refWithouIceError: refWithouIceError })
    }

    weightReferenceChange(event) {
        let weightReferenceError;
        const target = event.target;
        this.state.table.weightReference = target.value;
        if (!this.state.table.weightReference) {
            weightReferenceError = "The weight reference is required";
        } else {
            weightReferenceError = ""
        }
        this.setState({ weightReferenceError: weightReferenceError })
    }

    weightBellowWithoutIceChange(event) {
        let weightBellowWithoutIceError;
        const target = event.target;
        this.state.table.weightBellowWithoutIce = target.value;
        if (!this.state.table.weightBellowWithoutIce) {
            weightBellowWithoutIceError = "The weight bellow without ice is required";
        } else {
            weightBellowWithoutIceError = ""
        }
        this.setState({ weightBellowWithoutIceError: weightBellowWithoutIceError })
    }

    weightAboveWithoutIceChange(event) {
        let weightAboveWithoutIceError;
        const target = event.target;
        this.state.table.weightAboveWithoutIce = target.value;
        if (!this.state.table.weightAboveWithoutIce) {
            weightAboveWithoutIceError = "The weight above without ice is required";
        } else {
            weightAboveWithoutIceError = ""
        }
        this.setState({ weightAboveWithoutIceError: weightAboveWithoutIceError })
    }

    weightBellowWithIceChange(event) {
        let weightBellowWithIceError;
        const target = event.target;
        this.state.table.weightBellowWithIce = target.value;
        if (!this.state.table.weightBellowWithIce) {
            weightBellowWithIceError = "The weight bellow with ice is required";
        } else {
            weightBellowWithIceError = ""
        }
        this.setState({ weightBellowWithIceError: weightBellowWithIceError })
    }

    weightAboveWithIceChange(event) {
        let weightAboveWithIceError;
        const target = event.target;
        this.state.table.weightAboveWithIce = target.value;
        if (!this.state.table.weightAboveWithIce) {
            weightAboveWithIceError = "The weight above with ice is required";
        } else {
            weightAboveWithIceError = ""
        }
        this.setState({ weightAboveWithIceError: weightAboveWithIceError })
    }

    altitudeReferenceChange(event) {
        let altitudeReferenceError;
        const target = event.target;
        this.state.table.altitudeReference = target.value;
        if (!this.state.table.altitudeReference) {
            altitudeReferenceError = "The altitude reference is required";
        } else {
            altitudeReferenceError = ""
        }
        this.setState({ altitudeReferenceError: altitudeReferenceError })
    }

    altitudeWithIceChange(event) {
        let altitudeWithIceError;
        const target = event.target;
        this.state.table.altitudeWithIce = target.value;
        if (!this.state.table.altitudeWithIce) {
            altitudeWithIceError = "The altitude with ice is required";
        } else {
            altitudeWithIceError = ""
        }
        this.setState({ altitudeWithIceError: altitudeWithIceError })
    }

    altitudeWithoutIceChange(event) {
        let altitudeWithoutIceError;
        const target = event.target;
        this.state.table.altitudeWithoutIce = target.value;
        if (!this.state.table.altitudeWithoutIce) {
            altitudeWithoutIceError = "The altitude without ice is required";
        } else {
            altitudeWithoutIceError = ""
        }
        this.setState({ altitudeWithoutIceError: altitudeWithoutIceError })
    }

    tempReferenceChange(event) {
        let tempReferenceError;
        const target = event.target;
        this.state.table.tempReference = target.value;
        if (!this.state.table.tempReference) {
            tempReferenceError = "The temperature reference is required";
        } else {
            tempReferenceError = ""
        }
        this.setState({ tempReferenceError: tempReferenceError })
    }

    tempBellowWithIceChange(event) {
        let tempBellowWithIceError;
        const target = event.target;
        this.state.table.tempBellowWithIce = target.value;
        if (!this.state.table.tempBellowWithIce) {
            tempBellowWithIceError = "The temperature bellow with ice is required";
        } else {
            tempBellowWithIceError = ""
        }
        this.setState({ tempBellowWithIceError: tempBellowWithIceError })
    }

    tempAboveWithIceChange(event) {
        let tempAboveWithIceError;
        const target = event.target;
        this.state.table.tempAboveWithIce = target.value;
        if (!this.state.table.tempAboveWithIce) {
            tempAboveWithIceError = "The temperature above with ice is required";
        } else {
            tempAboveWithIceError = ""
        }
        this.setState({ tempAboveWithIceError: tempAboveWithIceError })
    }

    tempBellowWithoutIceChange(event) {
        let tempBellowWithoutIceError;
        const target = event.target;
        this.state.table.tempBellowWithoutIce = target.value;
        if (!this.state.table.tempBellowWithoutIce) {
            tempBellowWithoutIceError = "The temperature bellow with ice is required";
        } else {
            tempBellowWithoutIceError = ""
        }
        this.setState({ tempBellowWithoutIceError: tempBellowWithoutIceError })
    }

    tempAboveWithoutIceChange(event) {
        let tempAboveWithoutIceError;
        const target = event.target;
        this.state.table.tempAboveWithoutIce = target.value;
        if (!this.state.table.tempAboveWithoutIce) {
            tempAboveWithoutIceError = "The temperature above without ice is required";
        } else {
            tempAboveWithoutIceError = ""
        }
        this.setState({ tempAboveWithoutIceError: tempAboveWithoutIceError })
    }

    windReferenceChange(event) {
        let windReferenceError;
        const target = event.target;
        this.state.table.windReference = target.value;
        if (!this.state.table.windReference) {
            windReferenceError = "The wind reference is required";
        } else {
            windReferenceError = ""
        }
        this.setState({ windReferenceError: windReferenceError })
    }

    windHeadWithIceChange(event) {
        let windHeadWithIceError;
        const target = event.target;
        this.state.table.windHeadWithIce = target.value;
        if (!this.state.table.windHeadWithIce) {
            windHeadWithIceError = "The wind head with ice is required";
        } else {
            windHeadWithIceError = ""
        }
        this.setState({ windHeadWithIceError: windHeadWithIceError })
    }

    windTailWithIceChange(event) {
        let windTailWithIceError;
        const target = event.target;
        this.state.table.windTailWithIce = target.value;
        if (!this.state.table.windTailWithIce) {
            windTailWithIceError = "The wind tail with ice is required";
        } else {
            windTailWithIceError = ""
        }
        this.setState({ windTailWithIceError: windTailWithIceError })
    }

    windHeadWithoutIceChange(event) {
        let windHeadWithoutIceError;
        const target = event.target;
        this.state.table.windHeadWithoutIce = target.value;
        if (!this.state.table.windHeadWithoutIce) {
            windHeadWithoutIceError = "The wind head without ice is required";
        } else {
            windHeadWithoutIceError = ""
        }
        this.setState({ windHeadWithoutIceError: windHeadWithoutIceError })
    }

    windTailWithoutIceChange(event) {
        let windTailWithoutIceError;
        const target = event.target;
        this.state.table.windTailWithoutIce = target.value;
        if (!this.state.table.windTailWithoutIce) {
            windTailWithoutIceError = "The wind tail without ice is required";
        } else {
            windTailWithoutIceError = ""
        }
        this.setState({ windTailWithoutIceError: windTailWithoutIceError })
    }

    slopeReferenceChange(event) {
        let slopeReferenceError;
        const target = event.target;
        this.state.table.slopeReference = target.value;
        if (!this.state.table.slopeReference) {
            slopeReferenceError = "The slope reference is required";
        } else {
            slopeReferenceError = ""
        }
        this.setState({ slopeReferenceError: slopeReferenceError })
    }

    slopeUphillWithIceChange(event) {
        let slopeUphillWithIceError;
        const target = event.target;
        this.state.table.slopeUphillWithIce = target.value;
        if (!this.state.table.slopeUphillWithIce) {
            slopeUphillWithIceError = "The slope uphill with ice is required";
        } else {
            slopeUphillWithIceError = ""
        }
        this.setState({ slopeUphillWithIceError: slopeUphillWithIceError })
    }

    slopeDownhillWithIceChange(event) {
        let slopeDownhillWithIceError;
        const target = event.target;
        this.state.table.slopeDownhillWithIce = target.value;
        if (!this.state.table.slopeDownhillWithIce) {
            slopeDownhillWithIceError = "The slope downhill with ice is required";
        } else {
            slopeDownhillWithIceError = ""
        }
        this.setState({ slopeDownhillWithIceError: slopeDownhillWithIceError })
    }

    slopeUphillWithoutIceChange(event) {
        let slopeUphillWithoutIceError;
        const target = event.target;
        this.state.table.slopeUphillWithoutIce = target.value;
        if (!this.state.table.slopeUphillWithoutIce) {
            slopeUphillWithoutIceError = "The slope uphill without ice is required";
        } else {
            slopeUphillWithoutIceError = ""
        }
        this.setState({ slopeUphillWithoutIceError: slopeUphillWithoutIceError })
    }

    slopeDownhillWithoutIceChange(event) {
        let slopeDownhillWithoutIceError;
        const target = event.target;
        this.state.table.slopeDownhillWithoutIce = target.value;
        if (!this.state.table.slopeDownhillWithoutIce) {
            slopeDownhillWithoutIceError = "The slope downhill without ice is required";
        } else {
            slopeDownhillWithoutIceError = ""
        }
        this.setState({ slopeDownhillWithoutIceError: slopeDownhillWithoutIceError })
    }

    overspeedReferenceChange(event) {
        let overspeedReferenceError;
        const target = event.target;
        this.state.table.overspeedReference = target.value;
        if (!this.state.table.overspeedReference) {
            overspeedReferenceError = "The overspeed reference is required";
        } else {
            overspeedReferenceError = ""
        }
        this.setState({ overspeedReferenceError: overspeedReferenceError })
    }

    overspeedWithIceChange(event) {
        let overspeedWithIceError;
        const target = event.target;
        this.state.table.overspeedWithIce = target.value;
        if (!this.state.table.overspeedWithIce) {
            overspeedWithIceError = "The overspeed with ice is required";
        } else {
            overspeedWithIceError = ""
        }
        this.setState({ overspeedWithIceError: overspeedWithIceError })
    }

    overspeedWithoutIceChange(event) {
        let overspeedWithoutIceError;
        const target = event.target;
        this.state.table.overspeedWithoutIce = target.value;
        if (!this.state.table.overspeedWithoutIce) {
            overspeedWithoutIceError = "The overspeed without ice is required";
        } else {
            overspeedWithoutIceError = ""
        }
        this.setState({ overspeedWithoutIceError: overspeedWithoutIceError })
    }

    reverserWithIceChange(event) {
        let reverserWithIceError;
        const target = event.target;
        this.state.table.reverserWithIce = target.value;
        if (!this.state.table.reverserWithIce) {
            reverserWithIceError = "The reverser with ice is required";
        } else {
            reverserWithIceError = ""
        }
        this.setState({ reverserWithIceError: reverserWithIceError })
    }

    reverserWithoutIceChange(event) {
        let reverserWithoutIceError;
        const target = event.target;
        this.state.table.reverserWithoutIce = target.value;
        if (!this.state.table.reverserWithoutIce) {
            reverserWithoutIceError = "The reverser without ice is required";
        } else {
            reverserWithoutIceError = ""
        }
        this.setState({ reverserWithoutIceError: reverserWithoutIceError })
    }


    validate = () => {
        let flapError = "";
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

        if (!this.state.flap.tipoFlap) {
            flapError = "The reference with ice is required";
        } else {
            flapError = ""
        }

        if (!this.state.table.refWithIce) {
            refWithIceError = "The reference with ice is required";
        } else {
            refWithIceError = ""
        }
        if (!this.state.table.refWithoutIce) {
            refWithouIceError = "The reference without is required";
        } else {
            refWithouIceError = ""
        }
        if (!this.state.table.weightReference) {
            weightReferenceError = "The weight reference is required";
        } else {
            weightReferenceError = ""
        }
        if (!this.state.table.weightBellowWithoutIce) {
            weightBellowWithoutIceError = "The weight bellow without ice is required";
        } else {
            weightBellowWithoutIceError = ""
        }
        if (!this.state.table.weightAboveWithoutIce) {
            weightAboveWithoutIceError = "The weight above without is required";
        } else {
            weightAboveWithoutIceError = ""
        }
        if (!this.state.table.weightBellowWithIce) {
            weightBellowWithIceError = "The weight bellow with ice is required";
        } else {
            weightBellowWithIceError = ""
        }
        if (!this.state.table.weightAboveWithIce) {
            weightAboveWithIceError = "The weight above with ice is required";
        } else {
            weightAboveWithIceError = ""
        }
        if (!this.state.table.altitudeReference) {
            altitudeReferenceError = "The altitude reference is required";
        } else {
            altitudeReferenceError = ""
        }
        if (!this.state.table.altitudeWithIce) {
            altitudeWithIceError = "The altitude with ice is required";
        } else {
            altitudeWithIceError = ""
        }
        if (!this.state.table.altitudeWithoutIce) {
            altitudeWithoutIceError = "The altitude without ice is required";
        } else {
            altitudeWithoutIceError = ""
        }
        if (!this.state.table.tempReference) {
            tempReferenceError = "The temperature reference is required";
        } else {
            tempReferenceError = ""
        }
        if (!this.state.table.tempBellowWithIce) {
            tempBellowWithIceError = "The temperature bellow with ice is required";
        } else {
            tempBellowWithIceError = ""
        }
        if (!this.state.table.tempAboveWithIce) {
            tempAboveWithIceError = "The temperature above with ice is required";
        } else {
            tempAboveWithIceError = ""
        }
        if (!this.state.table.tempBellowWithoutIce) {
            tempBellowWithoutIceError = "The temperature bellow with ice is required";
        } else {
            tempBellowWithoutIceError = ""
        }
        if (!this.state.table.tempAboveWithoutIce) {
            tempAboveWithoutIceError = "The temperature above without ice is required";
        } else {
            tempAboveWithoutIceError = ""
        }
        if (!this.state.table.windReference) {
            windReferenceError = "The wind reference is required";
        } else {
            windReferenceError = ""
        }
        if (!this.state.table.windHeadWithIce) {
            windHeadWithIceError = "The wind head with ice is required";
        } else {
            windHeadWithIceError = ""
        }
        if (!this.state.table.windTailWithIce) {
            windTailWithIceError = "The wind tail with ice is required";
        } else {
            windTailWithIceError = ""
        }
        if (!this.state.table.windHeadWithoutIce) {
            windHeadWithoutIceError = "The wind head without is required";
        } else {
            windHeadWithoutIceError = ""
        }
        if (!this.state.table.windTailWithoutIce) {
            windTailWithoutIceError = "The wind tail without ice is required";
        } else {
            windTailWithoutIceError = ""
        }
        if (!this.state.table.slopeReference) {
            slopeReferenceError = "The slope reference is required";
        } else {
            slopeReferenceError = ""
        }
        if (!this.state.table.slopeUphillWithIce) {
            slopeUphillWithIceError = "The slope uphill with ice is required";
        } else {
            slopeUphillWithIceError = ""
        }
        if (!this.state.table.slopeDownhillWithIce) {
            slopeDownhillWithIceError = "The slope downhill with ice is required";
        } else {
            slopeDownhillWithIceError = ""
        }
        if (!this.state.table.slopeUphillWithoutIce) {
            slopeUphillWithoutIceError = "The slope uphill without ice is required";
        } else {
            slopeUphillWithoutIceError = ""
        }
        if (!this.state.table.slopeDownhillWithoutIce) {
            slopeDownhillWithoutIceError = "The slope downhill without ice is required";
        } else {
            slopeDownhillWithoutIceError = ""
        }
        if (!this.state.table.overspeedReference) {
            overspeedReferenceError = "The overspeed reference is required";
        } else {
            overspeedReferenceError = ""
        }
        if (!this.state.table.overspeedWithIce) {
            overspeedWithIceError = "The overspeed with ice is required";
        } else {
            overspeedWithIceError = ""
        }
        if (!this.state.table.overspeedWithoutIce) {
            overspeedWithoutIceError = "The overspeed without ice is required";
        } else {
            overspeedWithoutIceError = ""
        }
        if (!this.state.table.reverserWithIce) {
            reverserWithIceError = "The reverser with ice is required";
        } else {
            reverserWithIceError = ""
        }
        if (!this.state.table.reverserWithoutIce) {
            reverserWithoutIceError = "The reverser without ice is required";
        } else {
            reverserWithoutIceError = ""
        }

        this.setState({
            flapError: flapError, refWithIceError: refWithIceError, refWithouIceError: refWithouIceError, weightReferenceError: weightReferenceError, weightBellowWithoutIceError: weightBellowWithoutIceError,
            weightAboveWithoutIceError: weightAboveWithoutIceError, weightBellowWithIceError: weightBellowWithIceError, weightAboveWithIceError: weightAboveWithIceError, altitudeReferenceError: altitudeReferenceError,
            altitudeWithIceError: altitudeWithIceError, altitudeWithoutIceError: altitudeWithoutIceError, tempReferenceError: tempReferenceError, tempBellowWithIceError: tempBellowWithIceError, tempAboveWithIceError: tempAboveWithIceError,
            tempBellowWithoutIceError: tempBellowWithoutIceError, tempAboveWithoutIceError: tempAboveWithoutIceError, windReferenceError: windReferenceError, windHeadWithIceError: windHeadWithIceError,
            windTailWithIceError: windTailWithIceError, windHeadWithoutIceError: windHeadWithoutIceError, windTailWithoutIceError: windTailWithoutIceError, slopeReferenceError: slopeReferenceError,
            slopeUphillWithIceError: slopeUphillWithIceError, slopeDownhillWithIceError: slopeDownhillWithIceError, slopeUphillWithoutIceError: slopeUphillWithoutIceError,
            slopeDownhillWithoutIceError: slopeDownhillWithoutIceError, overspeedReferenceError: overspeedReferenceError, overspeedWithIceError: overspeedWithIceError,
            overspeedWithoutIceError: overspeedWithoutIceError, reverserWithIceError: reverserWithIceError, reverserWithoutIceError: reverserWithoutIceError
        })
        if (flapError || refWithIceError || refWithouIceError || weightReferenceError || weightBellowWithoutIceError || weightAboveWithoutIceError || weightBellowWithIceError || weightAboveWithIceError
            || altitudeReferenceError || altitudeWithIceError || altitudeWithoutIceError || tempReferenceError || tempBellowWithIceError || tempAboveWithIceError || tempBellowWithoutIceError
            || tempAboveWithoutIceError || windReferenceError || windHeadWithIceError || windTailWithIceError || windHeadWithoutIceError || windTailWithoutIceError || slopeReferenceError
            || slopeUphillWithIceError || slopeDownhillWithIceError || slopeUphillWithoutIceError || slopeDownhillWithoutIceError || overspeedReferenceError || overspeedWithIceError
            || overspeedWithoutIceError || reverserWithIceError || reverserWithoutIceError) {
            return false
        }
        return true
    }

    postClickButton = async (event: any) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {  
                axios.put("http://localhost:3001/flap/modificar/" + this.props.taskId, {
                    tipoFlap: this.state.flap.getTipoFlap,
                    refWithoutIce: this.state.table.getRefWithoutIce,
                    refWithIce: this.state.table.getRefWithIce,
                    weightReference: this.state.table.getWeightReference,
                    weightBellowWithoutIce: this.state.table.getWeightBellowWithoutIce,
                    weightAboveWithoutIce: this.state.table.getWeightAboveWithoutIce,
                    weightBellowWithIce: this.state.table.getWeightBellowWithIce,
                    weightAboveWithIce: this.state.table.getWeightAboveWithIce,
                    altitudeReference: this.state.table.getAltitudeReference,
                    altitudeWithIce: this.state.table.getAltitudeWithIce,
                    altitudeWithoutIce: this.state.table.getAltitudeWithoutIce,
                    tempReference: this.state.table.getTempReference,
                    tempBellowWithIce: this.state.table.getTempBellowWithIce,
                    tempAboveWithIce: this.state.table.getTempAboveWithIce,
                    tempBellowWithoutIce: this.state.table.getTempBellowWithoutIce,
                    tempAboveWithoutIce: this.state.table.getTempAboveWithoutIce,
                    windReference: this.state.table.getWindReference,
                    windHeadWithIce: this.state.table.getWindHeadWithIce,
                    windTailWithIce: this.state.table.getWindTailWithIce,
                    windHeadWithoutIce: this.state.table.getWindHeadWithoutIce,
                    windTailWithoutIce: this.state.table.getWindTailWithoutIce,
                    slopeReference: this.state.table.getSlopeReference,
                    slopeUphillWithIce: this.state.table.getSlopeUphillWithIce,
                    slopeDownhillWithIce: this.state.table.getSlopeDownhillWithIce,
                    slopeUphillWithoutIce: this.state.table.getSlopeUphillWithoutIce,
                    slopeDownhillWithoutIce: this.state.table.getSlopeDownhillWithoutIce,
                    overspeedReference: this.state.table.getOverspeedReference,
                    overspeedWithIce: this.state.table.getOverspeedWithIce,
                    overspeedWithoutIce: this.state.table.getOverspeedWithoutIce,
                    reverserWithIce: this.state.table.getReverserWithIce,
                    reverserWithoutIce: this.state.table.getReverserWithoutIce
                })

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Update completed',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function () {
                window.location.href = "/flaps"
            }, 1500);
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="px-2 mb-5 mt-5">
                        <img src={aviao} alt="Avião." className="img col-sm-5 col-md-3 col-lg-2"></img>
                        <h1 style={{ paddingLeft: '23vh' }} className='mt-5 col-sm-7 col-md-9'>Operational Landing Configuration</h1>
                    </Row>
                </Container>
                <Container>
                    <Form>
                        <Row>
                            <Row>
                                <Col className="pb-4">
                                    <h4>&#x2022; Flap</h4>
                                </Col>
                            </Row>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="card-title">Name of the flap</h5>
                                <input type='text' className='input form-control form-control-lg inputGroup-sizing-sm' id="flap" placeholder="Name of the flap" 
                                onChange={this.flapChange}  value={this.state.flap.getTipoFlap}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.flapError}
                                </div>

                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Row>
                                <Col className="pt-4 pb-4">
                                    <h4>&#x2022; Reference</h4>
                                </Col>
                            </Row>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="card-title">Reference With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="refWithIce" placeholder="Reference with ice" 
                                onChange={this.refWithIceChange} value={this.state.table.getRefWithIce} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.refWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Reference Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="refWithoutIce" placeholder="Reference without ice" 
                                onChange={this.refWithouIceChange} value={this.state.table.getRefWithoutIce} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.refWithouIceError}
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col className="pt-4 pb-4">
                                <h4>&#x2022; Weight</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="card-title">Weight Reference (Kg)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightReference" placeholder="Wheight Reference" 
                                onChange={this.weightReferenceChange} value={this.state.table.getWeightReference}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightReferenceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Weight Bellow Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightBellowWithoutIce" placeholder="Weight Bellow Without Ice" 
                                onChange={this.weightBellowWithoutIceChange} value={this.state.table.getWeightBellowWithoutIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightBellowWithoutIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Weight Above Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightAboveWithoutIce" placeholder="Weight Above Without Ice" 
                                onChange={this.weightAboveWithoutIceChange} value={this.state.table.getWeightAboveWithoutIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightAboveWithoutIceError}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5 className="card-title">Weight Bellow With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightBellowWithIce" placeholder="Weight Bellow With Ice" 
                                onChange={this.weightBellowWithIceChange} value={this.state.table.getWeightBellowWithIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightBellowWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Weight Above With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weightAboveWithIce" placeholder="Weight Above With Ice" 
                                onChange={this.weightAboveWithIceChange} value={this.state.table.getWeightAboveWithIce} />
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
                                <h5 className="card-title">Altitude Reference (Per Ft)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="altitudeReference" placeholder="Altitude Reference" 
                                onChange={this.altitudeReferenceChange} value={this.state.table.getAltitudeReference} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.altitudeReferenceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Altitude With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="altitudeWithIce" placeholder="Altitude With Ice" 
                                onChange={this.altitudeWithIceChange} value={this.state.table.getAltitudeWithIce} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.altitudeWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Altitude Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="altitudeWithoutIce" placeholder="Altitude Without Ice" 
                                onChange={this.altitudeWithoutIceChange} value={this.state.table.getAltitudeWithoutIce}/>
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
                                <h5 className="card-title">Temperature Reference ISA (Per ºC)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempReference" placeholder="Temperature Reference" 
                                onChange={this.tempReferenceChange} value={this.state.table.getTempReference}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.tempReferenceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Temperature Bellow With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempBellowWithIce" placeholder="Temperature Bellow With Ice" 
                                onChange={this.tempBellowWithIceChange} value={this.state.table.getTempBellowWithIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.tempBellowWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Temperature Above With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempAboveWithIce" placeholder="Temperature Above With Ice" 
                                onChange={this.tempAboveWithIceChange} value={this.state.table.getTempAboveWithIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.tempAboveWithIceError}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="card-title">Temperature Bellow Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempBellowWithoutIce" placeholder="Temperature Bellow Without Ice" 
                                onChange={this.tempBellowWithoutIceChange} value={this.state.table.getTempBellowWithoutIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.tempBellowWithoutIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Temperature Above Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="tempAboveWithoutIce" placeholder="Temperature Above Without Ice" 
                                onChange={this.tempAboveWithoutIceChange} value={this.state.table.getTempAboveWithoutIce} />
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
                                <h5 className="card-title">Wind Reference (Per Kt)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windReference" placeholder="Wind Reference" 
                                onChange={this.windReferenceChange} value={this.state.table.getWindReference} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.windReferenceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Wind Head With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windHeadWithIce" placeholder="Wind Head With Ice" 
                                onChange={this.windHeadWithIceChange} value={this.state.table.getWindHeadWithIce} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.windHeadWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Wind Tail With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windTailWithIce" placeholder="Wind Tail With Ice" 
                                onChange={this.windTailWithIceChange} value={this.state.table.getWindTailWithIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.windTailWithIceError}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="card-title">Wind Head Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windHeadWithoutIce" placeholder="Wind Head Without Ice" 
                                onChange={this.windHeadWithoutIceChange} value={this.state.table.getWindHeadWithoutIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.windHeadWithoutIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Wind Tail Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="windTailWithoutIce" placeholder="Wind Tail Without Ice" 
                                onChange={this.windTailWithoutIceChange} value={this.state.table.getWindTailWithoutIce} />
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
                                <h5 className="card-title">Slope Reference (Per %)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeReference" placeholder="Slope Reference" 
                                onChange={this.slopeReferenceChange} value={this.state.table.getSlopeReference} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.slopeReferenceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Slope Uphill With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeUphillWithIce" placeholder="Slope Uphill With Ice" 
                                onChange={this.slopeUphillWithIceChange} value={this.state.table.getSlopeUphillWithIce} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.slopeUphillWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Slope Downhill With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeDownhillWithIce" placeholder="Slope Downhill With Ice" 
                                onChange={this.slopeDownhillWithIceChange} value={this.state.table.getSlopeDownhillWithIce} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.slopeDownhillWithIceError}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="card-title">Slope Uphill Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeUphillWithoutIce" placeholder="Slope Uphill Without Ice" 
                                onChange={this.slopeUphillWithoutIceChange} value={this.state.table.getSlopeUphillWithoutIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.slopeUphillWithoutIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Slope Downhill Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="slopeDownhillWithoutIce" placeholder="Slope Downhill Without Ice" 
                                onChange={this.slopeDownhillWithoutIceChange} value={this.state.table.getSlopeDownhillWithoutIce}/>
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
                                <h5 className="card-title">Overspeed Reference (Per Kt)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="overspeedReference" placeholder="Overspeed Reference" 
                                onChange={this.overspeedReferenceChange} value={this.state.table.getOverspeedReference} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.overspeedReferenceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Overspeed With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="overspeedWithIce" placeholder="Overspeed With Ice" 
                                onChange={this.overspeedWithIceChange} value={this.state.table.getOverspeedWithIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.overspeedWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Overspeed Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="overspeedWithoutIce" placeholder="Overspeed Without Ice" 
                                onChange={this.overspeedWithoutIceChange} value={this.state.table.getOverspeedWithoutIce}/>
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
                                <h5 className="card-title">Reverser With Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="reverserWithIce" placeholder="Reverser With Ice" 
                                onChange={this.reverserWithIceChange} value={this.state.table.getReverserWithIce} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.reverserWithIceError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Reverser Without Ice (M)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="reverserWithoutIce" placeholder="Reverser Without Ice" 
                                onChange={this.reverserWithoutIceChange} value={this.state.table.getReverserWithoutIce}/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.reverserWithoutIceError}
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Form>
                    <Row className="px-2 mt-5">
                        <Col />
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="danger" style={{ margin: '10px', marginTop: '0px' }} size='lg' href="/registerAirplane">Back</Button>
                            <Button className="botao-resultado" style={{ margin: '10px', marginTop: '0px' }} size="lg" onClick={this.postClickButton}>Save</Button>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        )
    }

}

export default EditarFlap