import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aviao from "./Icons/aviao.png";
import './Style/App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { start } from 'repl';

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
  brakingLevel: Number
}

class App extends Component<props, state>{

  constructor(props) {
    super(props);
    this.state = { unitMeasurement:0, aircraftModel:"", aircraftCertification:"", aircraftEngine:"", aircraftFlap:0, aircraftSpeedAdctive:0, aircraftWeight:0, 
    airportAltitude:0,iceAccreation:false,reversor:0,runwayCondition:0,slope:0,temperature:0,typeOfSlope:0,wind:0,typeOfWind:0,result:"", brakingLevel:0}
    this.temperatureChange = this.temperatureChange.bind(this);
    this.windChange = this.windChange.bind(this);
    this.aircraftWeightChange = this.aircraftWeightChange.bind(this);
    this.unitMeasurementChange = this.unitMeasurementChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.slopeChange = this.slopeChange.bind(this);
    this.aircraftSpeedAdctiveChange = this.aircraftSpeedAdctiveChange.bind(this);
    this.airportAltitudeChange = this.airportAltitudeChange.bind(this);
    this.brakingLevelChange = this.brakingLevelChange.bind(this);
    this.runwayConditionChange = this.runwayConditionChange.bind(this);
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

  aircraftWeightChange(event){
    const target = event.target;
    this.setState({
      aircraftWeight: target.value
    })
  }

  unitMeasurementChange(event){
    const target = event.target;
    this.setState({
      unitMeasurement: target.value
    })
  }
  slopeChange(event){
    const target = event.target;
    this.setState({
      slope: target.value
    })
  }
  aircraftSpeedAdctiveChange(event){
    const target = event.target;
    this.setState({
      aircraftSpeedAdctive: target.value
    })
  }
  airportAltitudeChange(event){
    const target = event.target;
    this.setState({
      airportAltitude: target.value
    })
  }
  brakingLevelChange(event){
    const target = event.target;
    this.setState({
      brakingLevel: target.value
    })
  }
  runwayConditionChange(event){
    const target = event.target;
    this.setState({
      runwayCondition: target.value
    })
  }


  calculate(event){
    this.setState({
      result: "Unidade Medida: " + this.state.unitMeasurement + ", Vento: " + this.state.wind + ", Temperatura: " + this.state.temperature + ", Braking application: " + this.state.brakingLevel + ", SpeedAdditive: " + this.state.aircraftSpeedAdctive + ", airportAltitude: " + this.state.airportAltitude + ", Runway Condition: " + this.state.runwayCondition + ", Peso Avião: " + this.state.aircraftWeight + ", Slope: " + this.state.slope
    });
  }

  render(){
    return(
      <Container mb-5>
        <Container>
          <Row mt-5 mb-5>
            <img src={aviao} className="img col-sm-5 col-md-3 col-lg-2"></img>
            <h1 className='text-center mt-5 col-sm-7 col-md-9'>Performance calculation</h1>
          </Row>
        </Container>
        <Row mb-5>
            <Col>
              Resultado: {this.state.result}
            </Col>
        </Row>
        
        <Row>
          <Col>
            <Form>
              <Col>             
                <h5 className="card-title">Unit of measurement</h5>
                <select className="form-select form-select-sm form-control-sm custom-select mb-3" id="btnMeasurement" onChange={this.unitMeasurementChange}>
                      <option defaultValue="Unit of measurement" disabled>Unit of measurement</option>
                      <option value="1">Internacional</option>
                      <option value="2">Imperial</option>
                </select>  
              </Col>
              <Col>
                <h5 className="card-title">Wind</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' placeholder="Wind" onChange={this.windChange}/>
                
              </Col>
              <Col>
                <h5 className="card-title">Temperature</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' placeholder="Temperature" onChange={this.temperatureChange}/>
              </Col>           
            </Form>
          </Col>
          </Row>

          <Row>
          <Col>
            <Form>
              <Col>
                <h5 className="card-title">Braking application level</h5>
                <select className="form-select form-select-sm form-control-sm custom-select mb-3" id="btnMeasurement" onChange={this.brakingLevelChange}>
                      <option defaultValue="Braking level" disabled>Braking level</option>
                      <option value="1">Maximum Manual</option>
                      <option value="2">Autobrake Med.</option>
                      <option value="3">Autobrake Low</option>
                </select>  
              </Col>           
            </Form>
            <Form>
              <Col>
                <h5 className="card-title">Speed additive</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' placeholder="Speed additive" onChange={this.aircraftSpeedAdctiveChange}/>
              </Col>           
            </Form>
            <Form>
              <Col>
                <h5 className="card-title">Airport altitude</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' placeholder="Airport altitude" onChange={this.airportAltitudeChange}/>
              </Col>           
            </Form>
          </Col>
          </Row>
          <Row>
          <Col>
          <Form>
              <Col>
                <h5 className="card-title">Runway condition</h5>
                <select className="form-select form-select-sm form-control-sm custom-select mb-3" id="btnMeasurement" onChange={this.runwayConditionChange}>
                      <option defaultValue="Runway condition" disabled>Runway condition</option>
                      <option value="1">Poor</option>
                      <option value="2">Medium to poor</option>
                      <option value="3">Medium</option>
                      <option value="4">Good to medium</option>
                      <option value="5">Good</option>
                      <option value="6">Dry</option>
                </select>  
              </Col>           
            </Form>
          <Form>
            <Col>
              <h5 className="card-title">Aircraft Weight</h5>
              <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' placeholder="Aircraft Weight" onChange={this.aircraftWeightChange}/>
            </Col>           
          </Form>
            <Form>
              <Col>
                <h5 className="card-title">Slope of the runway</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' placeholder="Slope of the runway" onChange={this.slopeChange}/>
              </Col>           
            </Form>
          </Col>
          </Row>

          <Row>
          <Col>
          <Form>
              <Button onClick={this.calculate}>Teste</Button>
          </Form>
          </Col>
          </Row>
        
      </Container>
    );
  }
}

export default App;