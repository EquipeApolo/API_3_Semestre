import { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Aircraft from "../Models/aircraft";
import aviao from "../Icons/aviao.png";
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
    dados: any[],
    dadosOperation: any[],
    aircraft: Aircraft,
    flap: any[],
    flapsSelected: any[]
}
class editarAeronave extends Component<any, state>{

    private brakingLevel: BrakingLevel;
    private aircraftWeightMin: number = 0;
    private aircraftWeightMax: number = 0;

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
            dados: [],
            dadosOperation: [],
            aircraft: new Aircraft('', '', '', 0, 0, 0, 0, 0),
            flap: [],
            flapsSelected: []
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
    }
    // let idAirplane = this.props.params.id
    async componentDidMount(): void {

        await axios.get('http://localhost:3001/airplane/' + this.props.taskId).then(response => {
            let dadosBanco = response.data
            this.setState({
                dados: dadosBanco,
                aircraft: new Aircraft(dadosBanco.model, dadosBanco.engine, dadosBanco.certification, dadosBanco.flap, dadosBanco.reverserAmount, dadosBanco.aircraftWeightMin, dadosBanco.aircraftWeightMax, dadosBanco.brakingApplicationLevel)
            })
        })

        await axios.get('http://localhost:3001/airplaneFlap/' + this.props.taskId).then(response => {
            let dadosBanco = response.data
            console.log(dadosBanco)
            this.setState({
                flapsSelected: dadosBanco
            })
        })

        axios.get('http://localhost:3001/flap').then(response => {
            let flap = response.data
            this.setState({
                flap: flap
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
        // var options: Array<any> = event.target.options;
        // for (var i = 0, l = options.length; i < l; i++) {
        //     if (options[i].selected) {
        //         let valor = Number(options[i].value)
        //         if (!this.state.flapsSelected.includes(valor)) {
        //             this.state.flapsSelected.push(valor);
        //         }
        //     } else {
        //         let valor = Number(options[i].value)
        //         if (this.state.flapsSelected.includes(valor)) {
        //             let index = this.state.flapsSelected.indexOf(valor)
        //             this.state.flapsSelected.splice(index, 1)
        //         }
        //     }
        // }
        console.log("antes" + this.state.flapsSelected)
        var checked = event.target.checked
        var value = event.target.value
        var valor = Number(value)
        if (checked){
            if (!this.state.flapsSelected.includes(valor)){
                this.state.flapsSelected.push(valor)
            } 
        } else {
            if (this.state.flapsSelected.includes(valor)){
                let index = this.state.flapsSelected.indexOf(valor)
                this.state.flapsSelected.splice(index, 1)
            }
        }
        console.log(this.state.flapsSelected)
    }
    brakingLevelChange(event) {
        let breakingError
        const target = event.target;
        this.state.aircraft.setBrakingApplicationLevel = target.value;
        this.setState({ breakingError: breakingError })
    }
    reversorChange(event) {
        let reversorError
        const target = event.target;
        this.state.aircraft.setReverserAmount = target.value;
        if (!this.state.aircraft.getReverserAmount) {
            reversorError = "The reverser is required."
        } else if (this.state.aircraft.getReverserAmount < 0) {
            reversorError = "The reverser amount cannot be negative"
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


    validate = () => {
        let modelError = "";
        let engineError = "";
        let reversorError = "";
        let weightMinError = "";
        let weightMaxError = "";

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
        } else if (this.state.aircraft.getReverserAmount < 0) {
            reversorError = "The reverser amount cannot be negative"
        } else {
            reversorError = ""
        }

        if (!this.state.aircraft.getAircraftWeightMin) {
            weightMinError = "The minimum weight is required";
        } else if (this.state.aircraft.getAircraftWeightMin <= 0) {
            weightMinError = "The weight must be above zero";
        } else if (this.state.aircraft.getAircraftWeightMin >= this.state.aircraft.getAircraftWeightMax) {
            weightMinError = "The weight must be bellow the maximum weight";
        } else {
            weightMinError = ""
        }


        if (!this.state.aircraft.getAircraftWeightMax) {
            weightMaxError = "The maximum weight is required";
        } else if (this.state.aircraft.getAircraftWeightMax <= 0) {
            weightMaxError = "The weight must be above zero"
        } else if (this.state.aircraft.getAircraftWeightMax <= this.state.aircraft.getAircraftWeightMin) {
            weightMinError = "The weight must be above the minimum weight";
        } else {
            weightMaxError = ""
        }

        this.setState({ modelError: modelError, engineError: engineError, reversorError: reversorError, weightMinError: weightMinError, weightMaxError: weightMaxError });
        if (modelError || engineError || reversorError || weightMinError || weightMaxError) {
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
            axios.post("http://localhost:3001/airplaneFlap/cadastrar/" + this.props.taskId, {
                ids: this.state.flapsSelected
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Update completed',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function () {
                window.location.href = "/aircrafts"
            }, 1500);
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
                                <input type='text' className="input form-control form-control-lg inputGroup-sizing-sm" id='engine' placeholder='Engine' onChange={this.engineChange} value={this.state.aircraft.getEngine} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.engineError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Reversor</h5>
                                <input type='number' className="input form-control form-control-lg inputGroup-sizing-sm" id='reversor' placeholder='Reversor' onChange={this.reversorChange} value={this.state.aircraft.getReverserAmount} />
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
                                {/* <select multiple={true} className="text-select form-select form-select-sm form-control-sm custom-select select md-3"
                                    onChange={this.flapChange}>
                                    {this.state.flap.map(item => {
                                        return (
                                            <option selected={this.state.flapsSelected.includes(item.id)} key={item.id} value={item.id}>{item.tipoFlap}</option>
                                        )
                                    })}
                                    </select> */}
                                <div>
                                    {this.state.flap.map(item => (
                                        <div className="mb-3">
                                            <Form.Check onChange={this.flapChange}
                                                type={"checkbox"}
                                                defaultChecked={this.state.flapsSelected.includes(item.id)}
                                                value={item.id}
                                                label={item.tipoFlap}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Col>


                        </Row>
                        <Row>
                            <Col>
                                <h5 className="card-title">Aircraft Weight Min (Kg)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChangeMin} value={this.state.aircraft.getAircraftWeightMin} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightMinError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Aircraft Weight Max (Kg)</h5>
                                <input type='number' className='input form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChangeMax} value={this.state.aircraft.getAircraftWeightMax} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.weightMaxError}
                                </div>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row className="px-2 mt-5">
                            <Col />
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="danger" style={{ margin: '10px', marginTop: '0px' }} size='lg' href="/aircrafts">Back</Button>
                                <Button className="botao-resultado" style={{ margin: '10px', marginTop: '0px' }} size="lg" onClick={this.postClickButton}>Save</Button>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        );
    }
}


export default editarAeronave;