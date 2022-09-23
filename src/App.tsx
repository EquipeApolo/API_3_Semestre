import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aviao from "./Icons/aviao.png";
import './Style/App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

type props = {
  Teste: String
}
type state = {
  unitMeasurement: Number,
  aircraftModel: String,
  aircraftEngine: String,
  aircraftCertification: String,
  aircraftWeight: Number,
  aircraftSpeedAdctive: Number,
  aircraftFlap: Number,
  wind: number,
  typeOfWind: Number,
  runwayCondition: Number,
  temperature: number,
  airportAltitude: Number,
  slope: Number,
  typeOfSlope: Number,
  reversor: Number,
  iceAccreation: Boolean,
  result: String
}

class App extends Component<props, state>{

  constructor(props) {
    super(props);
    this.state = { unitMeasurement:0, aircraftModel:"", aircraftCertification:"", aircraftEngine:"", aircraftFlap:0, aircraftSpeedAdctive:0, aircraftWeight:0, 
    airportAltitude:0,iceAccreation:false,reversor:0,runwayCondition:0,slope:0,temperature:0,typeOfSlope:0,wind:0,typeOfWind:0,result:""}
    this.temperatureChange = this.temperatureChange.bind(this);
    this.windChange = this.windChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  temperatureChange(event) {
    const target = event.target;    
    this.setState({
      temperature: target.value
    });
  }

  windChange(event) {
    const target = event.target;    
    this.setState({
      wind: target.value
    });
  }

  calculate(event){
    this.setState({
      result: "Temperatura: " + this.state.temperature + ", Vento: " + this.state.wind
    });
  }

  render(){
    return(
      <Container>
        <Container>
          <Row>
            <img src={aviao} className="img col-sm-5 col-md-3 col-lg-2"></img>
            <h1 className='text-center'>Performance calculation</h1>
          </Row>
        </Container>
        <Row>
            <Col>
              Resultado: {this.state.result}
            </Col>
          </Row>
        <Row>
          <Col>
            <Form>

              <Col>
              <h1>Temperatura</h1>
              <input type='number' className='form-control form-control-lg' onChange={this.temperatureChange}/>
              </Col>
              <Col>
              <h1>Vento:</h1>
              <input type='number' className='form-control form-control-lg' onChange={this.windChange}/>
              </Col>
              <Button onClick={this.calculate}>Teste</Button>
            </Form>
          </Col>
          <Col>
          <h2>Testeeee</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;