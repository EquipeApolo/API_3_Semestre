import { Component} from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Aircraft from "../Models/aircraft";
import aviao from "../Icons/aviao.png";
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import axios from 'axios';

type state = {
    modelError: string,
    engineError: string,
    reversorError: string,
}

class cadastroAeronave extends Component<any, state>{
    
    private aircraft: Aircraft = new Aircraft('','','',0,0,0);

    constructor(props: any){
    super(props);
    this.state = {
        modelError: '',
        engineError: '',
        reversorError: ''
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

validate = () => {
    let modelError = "";
    let engineError = "";
    let reversorError = ""

    if (!this.aircraft.getModel) {
        modelError = "O modelo não pode ficar vazio";
    }else{
        modelError = ""
    }

    if (!this.aircraft.getEngine) {
        engineError = "O motor não pode ficar vazio";
    }else if(this.aircraft.getEngine.length < 3){
        engineError = "O motor tem que ter 3 digitos ou mais"
    }else{
        engineError = ""
    }
    if (!this.aircraft.getReverserAmount) {
        reversorError = "The aircraft must have at least one(1) reversor."
    }
    this.setState({ modelError: modelError, engineError: engineError, reversorError: reversorError});
    if (modelError || engineError || reversorError){
        return false
    }

    return true;
}

postClickButton = (event: any) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        axios.post("http://localhost:3001/airplane/cadastrar",{
            model: this.aircraft.model,
            engine: this.aircraft.getEngine
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
                                <input type='text' className='form-control form-control-lg inputGroup-sizing-sm' id="model" placeholder="Aircraft model" onChange={this.obterModel} />
                                <div style={{ fontSize: 12, color: "red"}}>
                                    {this.state.modelError}
                                </div>

                            </Col>
                            <Col>
                                <h5 className="card-title">Engine</h5>
                                <input type='text' className="form-control form-control-lg inputGroup-sizing-sm" id='engine' placeholder='Engine' onChange={this.engineChange} />
                                <div style={{ fontSize: 12, color:"red"}}>
                                    {this.state.engineError}
                                </div>
                            </Col>
                            <Col>
                                <h5 className="card-title">Reversor</h5>
                                <input type='number' className="form-control form-control-lg inputGroup-sizing-sm" id='reversor' placeholder='Reversor' onChange={this.reversorChange} />
                                <div style={{ fontSize: 12, color:"red"}}>
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
                            </Col>
                            <Col>
                                <h5 className="card-title">Flap</h5>
                                <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnFlap" onChange={this.flapChange}>
                                <option value="-1" disabled>Select</option>
                                <option value="1">220</option>
                                <option value="2">450</option>
                                </select>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row className="px-2 mt-5">
            <Col/>
            <Col><h5 className="card-title">Resultado:</h5></Col>
        </Row>
        <Row className="px-2">
          <Col>
              <Button className="botao-resultado" size="lg" onClick={this.postClickButton}>Cadastrar</Button>
              
          </Col>
          <Col>
          <textarea className="botao-resultado w-100" disabled value={"Result"}/>
          </Col>
        </Row>
                    </Form>
                </Container>
            </Container>
        </form>
        );
    }
}


export default cadastroAeronave;