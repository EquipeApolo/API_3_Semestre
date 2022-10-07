import { Component } from "react";
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Aircraft from "../Models/aircraft";
import aviao from "../Icons/aviao.png";
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import axios from 'axios';
import Popup from "./alert";

type state = {
    modelError: string,
    engineError: string,
    reversorError: string,
    certificationError: string,
    flapError: string
}

class cadastroAeronave extends Component<any, state>{

    private aircraft: Aircraft = new Aircraft('', '', '', 0, 0, 0);

    constructor(props: any) {
        super(props);
        this.state = {
            modelError: '',
            engineError: '',
            reversorError: '',
            certificationError: '',
            flapError: ''
        }
        this.modelChange = this.modelChange.bind(this);
        this.engineChange = this.engineChange.bind(this);
        this.certificationChange = this.certificationChange.bind(this);
        this.reversorChange = this.reversorChange.bind(this);
        this.flapChange = this.flapChange.bind(this);
        //this.cadastrar = this.cadastrar.bind(this);

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


    /*cadastrar(event) {
        const target = event.target.value
        this.aircraft.result = //Adicionar result à aeronave novamente para colocar os valores necessários aqui
    }*/

    validate = () => {
        let modelError = "";
        let engineError = "";
        let reversorError = "";
        let certificationError = "";
        let flapError = "";

        if (!this.aircraft.getModel) {

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
        this.setState({ modelError: modelError, engineError: engineError, reversorError: reversorError, certificationError: certificationError, flapError: flapError });
        if (modelError || engineError || reversorError || certificationError || flapError) {
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
                flap: this.aircraft.getFlapValue,
                reverserAmount: this.aircraft.getReverserAmount
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.eventoFormulario}>
                <Container className="px-2 mb-5">
                    <Container>
                        <Row className="px-2 mb-5 mt-5">
                            <img src={aviao} alt="Avião." className="img col-sm-5 col-md-3 col-lg-2"></img>
                            <h1 className='text-center mt-5 col-sm-7 col-md-9'>Aircraft registration</h1>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Form>
                            <Row>
                                <Col>
                                    <h5 className="card-title">Aircraft model</h5>
                                    <input type='text' className='form-control form-control-lg inputGroup-sizing-sm' id="model" placeholder="Aircraft model" onChange={this.modelChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.modelError}
                                    </div>

                                </Col>
                                <Col>
                                    <h5 className="card-title">Engine</h5>
                                    <input type='text' className="form-control form-control-lg inputGroup-sizing-sm" id='engine' placeholder='Engine' onChange={this.engineChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.engineError}
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="card-title">Reversor</h5>
                                    <input type='number' className="form-control form-control-lg inputGroup-sizing-sm" id='reversor' placeholder='Reversor' onChange={this.reversorChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.reversorError}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className="card-title">Certification</h5>
                                    <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnCertification" onChange={this.certificationChange}>
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
                                    <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnFlap" onChange={this.flapChange}>
                                        <option value="-1" disabled>Select</option>
                                        <option value="1">220</option>
                                        <option value="2">450</option>
                                    </select>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.flapError}
                                    </div>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <Row className="px-2 mt-5">
                                <Col />
                            </Row>
                            <Row className="px-2">
                                <Col>
                                    <Button className="botao-resultado" size="lg" onClick={this.postClickButton}>Cadastrar</Button>
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