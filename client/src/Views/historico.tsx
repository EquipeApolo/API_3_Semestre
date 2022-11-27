import axios from 'axios';
import React from 'react';
import { Component } from "react";
import aviao from "../Icons/aviao.png";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

type table = {
    id: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    usersId: string,
    airplaneId,
    dados: any[],
    users: any[],
    airplanes: any[],
    flaps: any[]
}

class HistoryTable extends Component<{}, table>{

    constructor(prop) {
        super(prop);
        this.state = {
            id: '',
            result: '',
            createdAt: '',
            updatedAt: '',
            usersId: '',
            airplaneId: '',
            dados: [],
            users: [],
            airplanes: [],
            flaps: []
        }


}


async componentDidMount(): void {

    await axios.get('http://localhost:3001/airplane').then(response => {
        let dadosBanco = response.data
        this.setState({
            airplanes: dadosBanco
        })
    })

    await axios.get('http://localhost:3001/users').then(response => {
        let dadosBanco = response.data
        this.setState({
            users: dadosBanco
        })
    })

    await axios.get('http://localhost:3001/flap').then(response => {
        let dadosBanco = response.data
        this.setState({
            flaps: dadosBanco
        })
    })

    axios.get('http://localhost:3001/historic').then(response => {
      let dadosBanco = response.data
      this.setState({
        dados: dadosBanco
      })
    })
  }

render() {
    return(
    <Container className='px-2 mb-5'>
        <Container>
            <Row className='px-2 mb-5 mt-5'>
                <img src={aviao} alt="Avião." className='img col-sm-5 col-md-3 col-lg-2'/>
                <h1 className='text-center mt-5 col-sm-7 col-md-9'>Performance calculation history</h1>
            </Row>
        </Container>
        <Container fluid>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th className='text-center'>Users</th>
                <th className='text-center'>Aircraft</th>
                <th className='text-center'>Flap</th>
                <th className='text-center'>Unit Measurement</th>
                <th className='text-center'>Result</th>
                <th className='text-center'>Weight</th>
                <th className='text-center'>Temperature</th>
                <th className='text-center'>Wind</th>
                <th className='text-center'>Overspeed</th>
                <th className='text-center'>Altitude</th>
                <th className='text-center'>Slope</th>
                <th className='text-center'>Ice</th>
                <th className='text-center'>Date</th>
            </tr>
        </thead>
        <tbody>
                {this.state.dados.map(item => {
                    let user = this.state.users.find(us => item.usersId === us.id)
                    let airplane = this.state.airplanes.find(ar => item.airplaneId === ar.id)
                    let flap = this.state.flaps.find(fl => item.flapId === fl.id)
                    let dataCadastro = new Date(item.createdAt)
                    return(
                        <tr key={item.id}>
                            <td className='text-center'>{user.name}</td>
                            <td className='text-center'>{airplane.model}</td>
                            <td className='text-center'>{flap.tipoFlap}</td>
                            <td className='text-center'>{item.unitOfMeasurement == 2 ? 'International' : 'Imperial'}</td>
                            <td className='text-center'>{item.result} {item.unitOfMeasurement == 2 ? ' meters' : ' fts'}</td>
                            <td className='text-center'>{item.aircraftWeight} {item.unitOfMeasurement == 2 ? ' kg' : ' lb'}</td>
                            <td className='text-center'>{item.temperature} ºC</td>
                            <td className='text-center'>{item.wind} Kt</td>
                            <td className='text-center'>{item.overspeed} Kt</td>
                            <td className='text-center'>{item.altitude} Ft</td>
                            <td className='text-center'>{item.slope} %</td>
                            <td className='text-center'>{item.ice == 1 ? "true" : "false"}</td>
                            <td className='text-center'>{dataCadastro.toLocaleString()}</td>
                        </tr>
                )})}
        </tbody>

        </Table>
        </Container>
    </Container>
)}        
}

export default HistoryTable;