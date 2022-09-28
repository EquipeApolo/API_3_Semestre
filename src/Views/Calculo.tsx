import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aviao from "../Icons/aviao.png";
import '../Style/App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

type state = {
  unitMeasurement: Number,
  aircraftWeight: Number,
  weightTitle: string,
  wind: number,
  windTitle: string,
  runwayCondition: Number,
  temperature: number,
  temperatureTitle: string,
  airportAltitude: Number,
  airportAltitudeTitle: string,
  slope: Number,
  reversor: Number,
  iceAccreation: Boolean,
  result: string
  brakingLevel: Number
}

class Calculo extends Component<{}, state>{

  constructor(props) {
    super(props);
    this.state = { airportAltitudeTitle: "", temperatureTitle: "", weightTitle: "", windTitle: "",
      unitMeasurement: 0, aircraftWeight: 0,
      airportAltitude: 0, iceAccreation: false, reversor: 0, runwayCondition: 0, slope: 0, temperature: 0, wind: 0, result: "", brakingLevel: 0
    }
    this.temperatureChange = this.temperatureChange.bind(this);
    this.windChange = this.windChange.bind(this);
    this.aircraftWeightChange = this.aircraftWeightChange.bind(this);
    this.unitMeasurementChange = this.unitMeasurementChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.slopeChange = this.slopeChange.bind(this);
    this.airportAltitudeChange = this.airportAltitudeChange.bind(this);
    this.brakingLevelChange = this.brakingLevelChange.bind(this);
    this.runwayConditionChange = this.runwayConditionChange.bind(this);
    this.iceAccreationChange = this.iceAccreationChange.bind(this);
  }

  unitMeasurementChange(event) {
    const target = event.target;
    this.setState({
      unitMeasurement: target.value
    })
    if(target.value == 1){
      this.setState({
        weightTitle: "(Kg)",
        windTitle: "(Km/h)",
        airportAltitudeTitle: "(M)",
        temperatureTitle: "(ºC)"
      });
    }else{
      this.setState({
        weightTitle: "(Lb)",
        windTitle: "(Wt)",
        airportAltitudeTitle: "(Ft)",
        temperatureTitle: "(ºF)"
      });
    }
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

  iceAccreationChange(event){
    const target = event.target;
    this.setState({
      iceAccreation: target.state
    })
  }

  calculate(event) {
    const target = event.target;
    this.setState({
      result: "Unidade Medida: " + this.state.unitMeasurement + ", Vento: " + this.state.wind + ", Temperatura: " + this.state.temperature + ", Braking application: " + this.state.brakingLevel + ", airportAltitude: " + this.state.airportAltitude + ", Runway Condition: " + this.state.runwayCondition + ", Peso Avião: " + this.state.aircraftWeight
        + ", Slope: " + this.state.slope + ", tem ice: " + this.state.iceAccreation
    });
  }

  render() {
    return (
      <Container className="px-2 mb-5">
        <Container>
          <Row className="px-2 mb-5 mt-5">
            <img src={aviao} alt="Avião." className="img col-sm-5 col-md-3 col-lg-2"></img>
            <h1 className='text-center mt-5 col-sm-7 col-md-9'>Performance calculation</h1>
          </Row>
        </Container>

        <Container>
        <Form>
        <Row>
          <Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Unit of measurement</h5>
                <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm custom-select select mb-3" id="btnMeasurement" onChange={this.unitMeasurementChange}>
                  <option value="-1" disabled>Select</option>
                  <option value="1">Internacional</option>
                  <option value="2">Imperial</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Aircraft</h5>
                <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm custom-select select mb-3" onChange={this.unitMeasurementChange}>
                  <option value="-1" disabled>Select</option>
                  <option value="1">Model XPTO</option>
                  <option value="2">Model XXYY</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Aircraft Weight {this.state.weightTitle}</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChange} />
              </Col>
          </Col>
        </Row>

        <Row>
          <Col>
            <Col style={{width: "33%"}}>
                <h5 className="card-title">Braking application level</h5>
                <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm select custom-select mb-3" id="brankingLevel" onChange={this.brakingLevelChange}>
                  <option value="-1" disabled>Select...</option>
                  <option value="1">Maximum Manual</option>
                  <option value="2">Autobrake Med.</option>
                  <option value="3">Autobrake Low</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Temperature {this.state.temperatureTitle}</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="temperature" placeholder="Temperature" onChange={this.temperatureChange}/>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Wind {this.state.windTitle}</h5>
                <input type='text' className='form-control form-control-lg inputGroup-sizing-sm' id="wind" placeholder="Wind" onChange={this.windChange}/>
              </Col>
          </Col>
        </Row>

        <Row>
          <Col>
          <Col style={{width: "33%"}}>
                <h5 className="card-title">Runway condition</h5>
                <select defaultValue="-1" className="text-select form-select form-select-sm select form-control-sm custom-select mb-3" id="btnCondition" onChange={this.runwayConditionChange}>
                  <option value="-1" disabled>Select...</option>
                  <option value="1">1 (Poor)</option>
                  <option value="2">2 (Medium to poor)</option>
                  <option value="3">3 (Medium)</option>
                  <option value="4">4 (Good to medium)</option>
                  <option value="5">5 (Good)</option>
                  <option value="6">6 (Dry)</option>
                </select>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Airport altitude {this.state.airportAltitudeTitle}</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="AirportAltitude" placeholder="Airport altitude" onChange={this.airportAltitudeChange} />
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Slope of the runway</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="slope" placeholder="Slope of the runway" onChange={this.slopeChange} />
              </Col>
          </Col>
        </Row>

        <Row>
          <Col>
          <h5 className='card-tittle'>Has ice accreation?</h5>
          <BootstrapSwitchButton
              onChange={(checked: boolean) => {
                this.setState({ iceAccreation: checked })
            }}
          />
          </Col>
        </Row>

        <Row className="px-2 mt-5">
            <Col/>
            <Col><h5 className="card-title">Resultado:</h5></Col>
        </Row>
        <Row className="px-2">
          <Col>
              <Button className="botao-resultado" size="lg" onClick={this.calculate}>Calculate</Button>
          </Col>
          <Col>
          <textarea className="botao-resultado w-100" disabled value={this.state.result}/>
          </Col>
        </Row>
        </Form>
        </Container>
      </Container>
    );
  }
}

export default Calculo;


// Caso seja necessário incluir o "Aditivo de velocidade" basta copiar abaixo e colocar no formulário.
{/* <Form>
<Col style={{width: "33%"}}>
  <h5 className="card-title">Speed additive</h5>
  <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="speedAdditive" placeholder="Speed additive" onChange={this.aircraftSpeedAdctiveChange} />
</Col>
</Form> */}