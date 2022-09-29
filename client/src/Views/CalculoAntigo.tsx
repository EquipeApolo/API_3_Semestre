import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aviao from "./Icons/aviao.png";
import '../Style/App.css';

function Calculo() {

  return (
    <div className="container">
    <div className="container">
      <div className="row mt-5 mb-5">
            <img src={aviao} className="img col-sm-5 col-md-3 col-lg-2"/>
            <h1 className="text-center mt-5 col-sm-7 col-md-9">Performance Calculation</h1>     
      </div>
    </div>

    <div className="container mb-5 fundo">
        <div className="row mb-5 fundo">
            <div className="col-4 fundo">
                <div className="card border-0 fundo">
                    <i className="text"></i>
                    <h5 className="card-title">Unit of measurement</h5>
                    <select className="form-select form-select-sm form-control form-control-sm custom-select mb-3" id="btnMeasurement">
                      <option defaultValue="Unit of measurement" disabled>Unit of measurement</option>
                      <option value="1">Internacional</option>
                      <option value="2">Imperial</option>
                    </select>                   
                </div>
            </div>

            <div className="col-4 fundo">
                <div className="card border-0 fundo">
                  <i className="text"></i>
                    <h5 className="card-title">Aircraft model</h5>
                    <div className="input-group input-group-sm mb-3">
                      <input type="text" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="model"/>
                    </div>
                </div>
            </div>

            <div className="col-4 fundo">
                <div className="card border-0 fundo">
                  <i className="text"></i>
                    <h5 className="card-title">Engine</h5>
                    <div className="input-group input-group-sm mb-3">
                      <input type="text" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="engine"/>
                    </div>
                </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
                <i className="text"></i>
                  <h5 className="card-title">Certification</h5>
                  <select className="form-select form-select-sm form-control form-control-sm custom-select mb-3" id="btnCertification">
                    <option defaultValue="Certification" disabled>Certification</option>
                    <option value="1">ANAC</option>
                    <option value="2">EASA</option>AircraftWeightty
                    <option value="3">FAA</option>
                  </select>
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
                <i className="text"></i>
                  <h5 className="card-title">Aircraft weight</h5>
                  <div className="input-group input-group-sm mb-3">
                    <input type="number" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="weight"/>
                    <span className="input-group-text" id="AircraftWeight"></span>
                  </div>
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Speed additive</h5> 
                  <div className="input-group input-group-sm mb-3">
                    <input type="number" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="speedAdditive"/>
                    <span className="input-group-text" id="SpeedAdditive"></span>
                  </div>
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Flap</h5> 
                  <select className="form-select form-select-sm form-control form-control-sm custom-select mb-3" id="flap">
                    <option defaultValue="Flap" disabled>Flap</option>                
                    <option value="1">220</option>
                    <option value="2">450</option>
                  </select>
              </div>
            </div>
            
            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Wind</h5> 
                  <div className="input-group input-group-sm mb-3">
                    <input type="number" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="wind"/>
                    <span className="input-group-text" id="Wind"></span>
                  </div>
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Type of Wind</h5> 
                  <select className="form-select form-select-sm form-control form-control-sm custom-select mb-3" id="typeWind">
                    <option defaultValue="Type of Wind" disabled>Type of Wind</option>                
                    <option value="0">Head Wind</option>
                    <option value="1">Tail Wind</option>
                  </select>
              </div>
            </div>            

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Runway condition</h5>
                  <select className="form-select form-select-sm form-control form-control-sm custom-select mb-3" id="btnCondition">
                    <option defaultValue="Runway condition" disabled>Runway condition</option>                
                    <option value="1">1 (Poor)</option>
                    <option value="2">2 (Medium to Poor)</option>
                    <option value="3">3 (Medium)</option>
                    <option value="4">4 (Good to Medium)</option>
                    <option value="5">5 (Good)</option>
                    <option value="6">6 (Dry)</option>
                  </select>                 
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Temperature</h5> 
                  <div className="input-group input-group-sm mb-3">
                    <input type="number" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="temperature"/>
                    <span className="input-group-text" id="Temperature"></span>
                  </div>
              </div>
            </div>
            
            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Type of Slope</h5> 
                  <select className="form-select form-select-sm form-control form-control-sm custom-select mb-3" id="typeSlope">
                    <option defaultValue="Type of Slope" disabled>Type of Slope</option>                
                    <option value="1">Downhill</option>
                    <option value="0">Uphill</option>
                  </select>
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Airport Altitude</h5> 
                  <div className="input-group input-group-sm mb-3">
                    <input type="number" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="altitude"/>
                    <span className="input-group-text" id="AirportAltitude"></span>
                  </div>
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Slope</h5> 
                  <div className="input-group input-group-sm mb-3">
                    <input type="number" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="slope"/>
                  </div>
              </div>
            </div>

            <div className="col-4 fundo">
              <div className="card border-0 fundo">
              <i className="text"></i>
                  <h5 className="card-title">Reversor</h5> 
                  <div className="input-group input-group-sm mb-3">
                    <input type="number" className="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm" id="reversor"/>
                  </div>
              </div>
            </div>

              <div className="col-4 fundo">
                <h5 className="form-check-label justify-content-start" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-sm">With Ice Accreation?</h5>
              <div className="form-check form-switch">
                  <div className="input-group input-group-sm">
                    <input className="transform form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  id="IceAccreation" 
                  >
                </input>
                </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col">
                <input type="submit" className="height w-50 btn btn-primary col-4"  id="btnResult" value="Result" ></input>
              </div>

              <div className="col-4">
                <form className="w-100 col-8"><input type="text" className="height w-100 form-control form-control-lg" id="Result" placeholder="Result" disabled/></form>
              </div>
            </div>
        </div>
        </div>
  );
}

export default Calculo;
//linha 184 for="IceAccreation"