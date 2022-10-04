import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aviao from "../Icons/aviao.png";
import '../Style/App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Aircraft from '../Models/aircraft';
import { BrakingLevel, RunwayCondition, UnitMeasurement } from '../Enuns/enuns';

type state = {
  weightTitle: string,
  windTitle: string,
  temperatureTitle: string,
  airportAltitudeTitle: string,
  result: string,
  unitMeasurementError: string,
  aircraftError: string,
  weightError: string,
  breakingError: string,
  temperatureError: string,
  windError: string,
  runwayError: string,
  altitudeError: string,
  slopeError: string
}

class Calculo extends Component<{}, state>{

  private aircraftSelected!: Aircraft;
  private aircraftWeight: number = 0;
  private wind: number = 0;
  private runwayCondition: RunwayCondition;
  private temperature: number = 0;
  private airportAltitude: number = 0;
  private slope: number = 0;
  private reversor: number = 0;
  private iceAccreation: boolean = false;
  private brakingLevel: BrakingLevel;
  private unitMeasurement: UnitMeasurement;

  constructor(props) {
    super(props);
    this.state = { airportAltitudeTitle: "", temperatureTitle: "", weightTitle: "", windTitle: "",
      result: "", slopeError: "", aircraftError: "", altitudeError: "", breakingError: "", runwayError: "",
      temperatureError: "", unitMeasurementError: "", weightError: "", windError: ""}
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
    this.unitMeasurement = target.value;
    if(target.value == 1){
      this.setState({
        weightTitle: "(Kg)",
        windTitle: "(Km/h)",
        airportAltitudeTitle: "(M)",
        temperatureTitle: "(ºC)"
      });
    }else if(target.value == 2){
      this.setState({
        weightTitle: "(Lb)",
        windTitle: "(Wt)",
        airportAltitudeTitle: "(Ft)",
        temperatureTitle: "(ºF)"
      });
    }else{
      this.setState({
        weightTitle: "",
        windTitle: "",
        airportAltitudeTitle: "",
        temperatureTitle: ""
      });
    }
    let unitMeasurementError = ""
    if (!this.unitMeasurement) {
      unitMeasurementError = "Select an unit of measurement";
    }else{
      unitMeasurementError = ""
    }
    this.setState({unitMeasurementError: unitMeasurementError})
  }
  temperatureChange(event) {
    let temperatureError = ""
    const target = event.target;
    this.temperature = target.value;
    if (!this.temperature) {
      temperatureError = "The temperature is required";
    }else{
      temperatureError = ""
    }
    this.setState({temperatureError: temperatureError})
  }

  windChange(event) {
    let windError = ""
    const target = event.target;
    this.wind = target.value;
    if (!this.wind) {
      windError = "The wind is required";
    }else if(this.wind == 0) {
      windError = "The wind must be different than 0";
    }else{
      windError = ""
    }
    this.setState({windError:windError})

  }
  aircraftWeightChange(event) {
    let weightError = ""
    const target = event.target;
    this.aircraftWeight = target.value;

    if (!this.aircraftWeight) {
      weightError = "The weight is required";
    }else if(this.aircraftWeight < 10000) {
      weightError = "The weight must be above 10000";
    }else{
      weightError = ""
    }
    this.setState({weightError:weightError})
  }
  slopeChange(event) {
    let slopeError = ""
    const target = event.target;
    this.slope = target.value;

    if (!this.slope) {
      slopeError = "The slope is required";
    }else{
      slopeError = ""
    }
    this.setState({slopeError:slopeError})
  }

  airportAltitudeChange(event) {
    let altitudeError = ""
    const target = event.target;
    this.airportAltitude = target.value;

    if (!this.airportAltitude) {
      altitudeError = "The airport altitude is required";
    }else{
      altitudeError = ""
    }
    this.setState({altitudeError:altitudeError})
  }
  brakingLevelChange(event) {
    let breakingError = ""
    const target = event.target;
    this.brakingLevel = target.value;
    if (!this.brakingLevel) {
      breakingError = "Select a braking level";
    }else{
      breakingError = ""
    }
    this.setState({breakingError:breakingError})
  }
  runwayConditionChange(event) {
    let runwayError = ""
    const target = event.target;
    this.runwayCondition = target.value;

    if (!this.runwayCondition) {
      runwayError = "Select a runway condition";
    }else{
      runwayError = ""
    }
    this.setState({runwayError:runwayError})
  }

  iceAccreationChange(event){
    const target = event.target;
    this.iceAccreation = target.value;
  }

  calculate(event) {
    event.preventDefault()
    // if(this.aircraftSelected === undefined) return;
    if(this.unitMeasurement === UnitMeasurement.IMPERIAL){
      console.log("teste")
    }

    const isValid = this.validate();

    if(isValid){
      console.log("validou")
    }else{
      this.setState({
        result: "Unidade Medida: " + this.unitMeasurement + ", Vento: " + this.wind + ", Temperatura: " + this.temperature + ", Braking application: " + this.brakingLevel + ", airportAltitude: " + this.airportAltitude + ", Runway Condition: " + this.runwayCondition + ", Peso Avião: " + this.aircraftWeight
        + ", Slope: " + this.slope + ", tem ice: " + this.iceAccreation
      });
    }

  }


  validate = () => {
    let unitMeasurementError = ""; let aircraftError = ""; let weightError = "";
    let breakingError = ""; let temperatureError = ""; let windError = "";
    let runwayError = ""; let altitudeError = ""; let slopeError = "";

    if (!this.unitMeasurement) {
      unitMeasurementError = "Select an unit of measurement";
    }else{
      unitMeasurementError = ""
    }

    // if (!this.aircraftSelected) {
    //   aircraftError = "Select an aircraft";
    // }else{
    //   aircraftError = ""
    // }

    if (!this.aircraftWeight) {
      weightError = "The weight is required";
    }else if(this.aircraftWeight < 10000) {
      weightError = "The weight must be above 10000";
    }else{
      weightError = ""
    }

    if (!this.brakingLevel) {
      breakingError = "Select a braking level";
    }else{
      breakingError = ""
    }

    if (!this.temperature) {
      temperatureError = "The temperature is required";
    }else{
      temperatureError = ""
    }

    if (!this.wind) {
      windError = "The wind is required";
    }else if(this.wind == 0) {
      windError = "The wind must be different than 0";
    }else{
      windError = ""
    }

    if (!this.runwayCondition) {
      runwayError = "Select a runway condition";
    }else{
      runwayError = ""
    }

    if (!this.airportAltitude) {
      altitudeError = "The airport altitude is required";
    }else{
      altitudeError = ""
    }

    if (!this.slope) {
      slopeError = "The slope is required";
    }else{
      slopeError = ""
    }
    this.setState({ aircraftError: aircraftError, altitudeError: altitudeError, breakingError: breakingError,
    runwayError: runwayError, slopeError: slopeError, temperatureError: temperatureError, weightError: weightError,
    unitMeasurementError: unitMeasurementError, windError: windError });
    if (aircraftError || altitudeError || breakingError || runwayError || slopeError || temperatureError || weightError || unitMeasurementError || windError) {
      return false;
    }

    return true;
  };


  render() {
    return (
      <Container className=" px-2 mb-5">
        <Container>
          <Row className="px-2 mb-5 mt-5">
            <img src={aviao} alt="Avião." className="img col-sm-5 col-md-3 col-lg-2"></img>
            <h1 className='text-center mt-5 col-sm-7 col-md-9'>Performance calculation</h1>
          </Row>
        </Container>

        <Container className="px-2">
        <Form onSubmit={(e) => this.calculate(e)} >
        <Row>
          <Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Unit of measurement</h5>
                <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm custom-select select mb-3" id="btnMeasurement" onChange={this.unitMeasurementChange}>
                  <option value="-1" disabled>Select</option>
                  <option value="1">Internacional</option>
                  <option value="2">Imperial</option>
                </select>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.unitMeasurementError}
              </div>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Aircraft</h5>
                <select defaultValue="-1" className="text-select form-select form-select-sm form-control-sm custom-select select mb-3">
                  <option value="-1" disabled>Select</option>
                  <option value="1">Model XPTO</option>
                  <option value="2">Model XXYY</option>
                </select>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.aircraftError}
              </div>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Aircraft Weight {this.state.weightTitle}</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="weight" placeholder="Aircraft Weight" onChange={this.aircraftWeightChange} />
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.weightError}
              </div>
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
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.breakingError}
              </div>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Temperature {this.state.temperatureTitle}</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="temperature" placeholder="Temperature" onChange={this.temperatureChange}/>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.temperatureError}
              </div>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Wind {this.state.windTitle}</h5>
                <input type='text' className='form-control form-control-lg inputGroup-sizing-sm' id="wind" placeholder="Wind" onChange={this.windChange}/>
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.windError}
              </div>
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
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.runwayError}
              </div>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Airport altitude {this.state.airportAltitudeTitle}</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="AirportAltitude" placeholder="Airport altitude" onChange={this.airportAltitudeChange} />
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.altitudeError}
              </div>
              </Col>
              <Col style={{width: "33%"}}>
                <h5 className="card-title">Slope of the runway</h5>
                <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="slope" placeholder="Slope of the runway" onChange={this.slopeChange} />
                <div style={{ fontSize: 12, color: "red" }}>
                   {this.state.slopeError}
              </div>
              </Col>
          </Col>
        </Row>

        <Row className="px-2">
          <Col style={{width: "33%"}}>
          <h5 className='card-tittle'>Has ice accreation?</h5>
          <BootstrapSwitchButton
              onChange={(checked: boolean) => {
                this.iceAccreation = checked
            }}
          />
          </Col>
          <Col style={{width: "33%"}}></Col>
          <Col style={{width: "33%"}}></Col>
        </Row>

        <Row className="px-2 mt-5">
            <Col/>
            <Col><h5 className="card-title">Resultado:</h5></Col>
        </Row>
        <Row className="px-2">
          <Col>
              <Button type='submit' className="botao-resultado" size="lg" >Calculate</Button>
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
/* <Form>
<Col style={{width: "33%"}}>
  <h5 className="card-title">Speed additive</h5>
  <input type='number' className='form-control form-control-lg inputGroup-sizing-sm' id="speedAdditive" placeholder="Speed additive" onChange={this.aircraftSpeedAdctiveChange} />
</Col>
</Form> */
