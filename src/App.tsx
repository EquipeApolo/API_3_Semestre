import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aviao from "./Icons/aviao.png";
import './Style/App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

type props = {
  Teste: String
}
type state = {
  unitMeasurement: number,
  aircraftModel: string,
  aircraftEngine: string,
  aircraftCertification: string,
  aircraftWeight: number,
  aircraftSpeedAdctive: number,
  aircraftFlap: number,
  wind: number,
  typeOfWind: number,
  runwayCondition: number,
  temperature: number,
  airportAltitude: number,
  slope: number,
  typeOfSlope: number,
  reversor: number,
  iceAccreation: boolean,
  result: string
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
      result: (this.state.temperature * this.state.wind).toFixed(2)
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