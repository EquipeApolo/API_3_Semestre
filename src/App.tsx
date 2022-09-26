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
  brakingLevel: Number
}

class App extends Component<props, state>{

  constructor(props) {
    super(props);
    this.state = {
      unitMeasurement: 0, aircraftModel: "", aircraftCertification: "", aircraftEngine: "", aircraftFlap: 0, aircraftSpeedAdctive: 0, aircraftWeight: 0,
      airportAltitude: 0, iceAccreation: false, reversor: 0, runwayCondition: 0, slope: 0, temperature: 0, typeOfSlope: 0, wind: 0, typeOfWind: 0, result: "", brakingLevel: 0
    }
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
    this.typeOfSlopeChange = this.typeOfSlopeChange.bind(this);
    this.typeOfWindChange = this.typeOfWindChange.bind(this);
  }

  unitMeasurementChange(event) {
    const target = event.target;
    this.setState({
      unitMeasurement: target.value
    })
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
  typeOfWindChange(event){
    const target = event.target;
    this.setState({
      typeOfWind: target.value
    })
  }
  typeOfSlopeChange(event) {
    const target = event.target;
    this.setState({
      typeOfSlope: target.value
    })
  }
  aircraftSpeedAdctiveChange(event) {
    const target = event.target;
    this.setState({
      aircraftSpeedAdctive: target.value
    })
  }
  aircraftWeightChange(event) {
    const target = event.target;
    this.setState({
      aircraftWeight: target.value
    })
  }
  slopeChange(event) {
    const target = event.target;
    this.setState({
      slope: target.value
    })
  }

  airportAltitudeChange(event) {
    const target = event.target;
    this.setState({
      airportAltitude: target.value
    })
  }
  brakingLevelChange(event) {
    const target = event.target;
    this.setState({
      brakingLevel: target.value
    })
  }
  runwayConditionChange(event) {
    const target = event.target;
    this.setState({
      runwayCondition: target.value
    })
  }

  calculate(event) {
    this.setState({
      result: "Unidade Medida: " + this.state.unitMeasurement + ", Vento: " + this.state.wind + ", Temperatura: " + this.state.temperature + ", Braking application: " + this.state.brakingLevel + ", SpeedAdditive: "
        + this.state.aircraftSpeedAdctive + ", airportAltitude: " + this.state.airportAltitude + ", Runway Condition: " + this.state.runwayCondition + ", Peso Avião: " + this.state.aircraftWeight
        + ", Slope: " + this.state.slope + ", tipo Slope: " + this.state.typeOfSlope + ", tipo vento: " + this.state.typeOfWind
    });
  }

  render() {
    return (
      <Container className="mb-5">
        <Container className="ajusteCalculo">
          <Row className="mt-5 mb-5">
            <Col className="w-50"><img src={aviao} alt="Imagem de um avião." className="img col-sm-5 col-md-3 col-lg-2"/></Col>
            <Col className="w-50"><h1 className='text-center mt-5 col-sm-7 col-md-9'>Performance calculation</h1></Col>
            <Col className="w-50"></Col>
          </Row>
        </Container>

        <Container className="ajusteCalculo">
        <Form>
        <Row>
          <Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Unit of measurement</h5>
                <select id="select" defaultValue="-1" className="form-select teste form-select-sm form-control-sm custom-select mb-3" onChange={this.unitMeasurementChange}>
                  <option value="-1" disabled>Select</option>
                  <option value="1">Internacional</option>
                  <option value="2">Imperial</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Temperature (ºC)</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="temperature" placeholder="Temperature" onChange={this.temperatureChange}/>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Wind</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="wind" placeholder="Wind" onChange={this.windChange}/>
              </Col>
          </Col>
        </Row>

        <Row>
          <Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Type of wind</h5>
                <select defaultValue="-1" className="form-select teste form-select-sm form-control-sm custom-select mb-3" id="typeWind" onChange={this.typeOfWindChange}>
                  <option value="-1" disabled>Select...</option>
                  <option value="1">Head wind</option>
                  <option value="2">Tail wind</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Speed additive</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="speedAdditive" placeholder="Speed additive" onChange={this.aircraftSpeedAdctiveChange} />
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Airport altitude</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="AirportAltitude" placeholder="Airport altitude" onChange={this.airportAltitudeChange} />
              </Col>
          </Col>
        </Row>

        <Row>
          <Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Braking application level</h5>
                <select defaultValue="-1" className="form-select teste form-select-sm form-control-sm custom-select mb-3" id="brankingLevel" onChange={this.brakingLevelChange}>
                  <option value="-1" disabled>Select...</option>
                  <option value="1">Maximum Manual</option>
                  <option value="2">Autobrake Med.</option>
                  <option value="3">Autobrake Low</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Aircraft Weight</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChange} />
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Slope of the runway</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="slope" placeholder="Slope of the runway" onChange={this.slopeChange} />
              </Col>
          </Col>
        </Row>

        <Row>
          <Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Type of slope</h5>
                <select defaultValue="-1" className="form-select form-select-sm teste form-control-sm custom-select mb-3" id="typeSlope" onChange={this.typeOfSlopeChange}>
                  <option value="-1" disabled>Select...</option>
                  <option value="1">Downhill</option>
                  <option value="2">Uphill</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Runway condition</h5>
                <select defaultValue="-1" className="form-select form-select-sm teste form-control-sm custom-select mb-3" id="btnCondition" onChange={this.runwayConditionChange}>
                  <option value="-1" disabled>Select...</option>
                  <option value="1">1 (Poor)</option>
                  <option value="2">2 (Medium to poor)</option>
                  <option value="3">3 (Medium)</option>
                  <option value="4">4 (Good to medium)</option>
                  <option value="5">5 (Good)</option>
                  <option value="6">6 (Dry)</option>
                </select>
              </Col>
              <Col>
              <h5 className="card-title">Has Ice Accreation?</h5>
              <Form.Check 
                  type="switch"
                  id="0"
                />
              </Col>
          </Col>
        </Row>

        <Row className="mb-5 mt-5">
          <Col>
              <Button className="btn-primary btn-hover-scale me-5" onClick={this.calculate}>Teste</Button>
          </Col>
          <Col>
            Resultado: {this.state.result}
          </Col>
        </Row>
        </Form>
        </Container>
      </Container>
    );
  }
}

export default App;