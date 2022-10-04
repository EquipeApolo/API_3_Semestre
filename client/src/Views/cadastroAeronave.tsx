import { Component} from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Aircraft from "../Models/aircraft";
import aviao from "../Icons/aviao.png";
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

class Teste extends Component{
    
    private aircraft: Aircraft = new Aircraft('','','',0,0,0);

    constructor(props){
    super(props);
    
    this.modelChange = this.modelChange.bind(this);
    this.engineChange = this.engineChange.bind(this);
    this.certificationChange = this.certificationChange.bind(this);
    this.reversorChange = this.reversorChange.bind(this);
    this.flapChange = this.flapChange.bind(this);
    //this.cadastrar = this.cadastrar.bind(this);
}

manipularEnvio(event) {
    event.preventDefault()
}

/*receberValorEntrada(event){
    let entrada = event.target.value
    this.setState({
        aircraft.model: entrada,
        engine: entrada,
    })
}*/

modelChange(event) {
    const target = event.target;
    this.aircraft.setModel = target.value;
}
engineChange(event) {
    const target = event.target;
    this.aircraft.setEngine = target.value;
}
certificationChange(event) {
    const target = event.target;
    this.aircraft.setCertification = target.value;
}
flapChange(event) {
    const target = event.target;
    this.aircraft.setFlapValue = target.value;
} 
reversorChange(event) {
    const target = event.target;
    this.aircraft.setReverserAmount = target.value;
}

/*cadastrar(event) {
    const target = event.target.value
    this.aircraft.result = //Adicionar result à aeronave novamente para colocar os valores necessários aqui
}*/

    render() {
        return (
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
                            </Col>
                            <Col>
                                <h5 className="card-title">Engine</h5>
                                <input type='text' className="form-control form-control-lg inputGroup-sizing-sm" id='engine' placeholder='Engine' onChange={this.engineChange} />
                            </Col>
                            <Col>
                                <h5 className="card-title">Reversor</h5>
                                <input type='number' className="form-control form-control-lg inputGroup-sizing-sm" id='reversor' placeholder='Reversor' onChange={this.reversorChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} sm={4}>
                                <h5 className="card-tittle">Flap</h5>
                                <select defaultValue="-1" className="text-select form-select form-control-sm custom-select select" id="btnFlap" onChange={this.flapChange}>
                                <option value="-1" disabled>Select</option>
                                <option value="1">220</option>
                                <option value="2">450</option>
                                </select>
                            </Col>
                            <Col md={4} sm={4}>
                                <h5 className="card-tittle">Certification</h5>
                                <select defaultValue="-1" className="text-select form-select form-control-sm custom-select select" id="btnCertification" onChange={this.certificationChange}>
                                <option value="-1" disabled>Select</option>
                                <option value="1">ANAC</option>
                                <option value="2">EASA</option>
                                <option value="3">FAA</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="px-2 mb-5 mt-5 text-center">
                                <Button className="botao-resultado" size="lg" /*onClick={this.cadastrar}*/>Cadastrar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        );
    }
}


export default Teste;