import { ResultType } from '@remix-run/router/dist/utils';
import axios from 'axios';
import React from 'react';
import { Component } from "react";
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import aviao from "../Icons/aviao.png";
import edit from "../Icons/editar.png"
import delet from "../Icons/excluir.png"

type table = {
    id: string,
    model: string,
    engine: string,
    certification: string,
    flap: string,
    reverserAmount: string,
    createdAt: string,
    result: any[]
}

class AircraftTable extends Component<{}, table>{
    
    constructor(props: any) {
        super(props);
        this.state = {
            id: '',
            model: '',
            engine: '',
            certification: '',
            flap: '',
            reverserAmount: '',
            createdAt: '',
            result: []
        }
        

}


componentDidMount(): void {
    axios.get('http://localhost:3001/airplane').then(response => {
      let dadosBanco = response.data
      this.setState({
        result: dadosBanco
      })
    })
  }

render() {
    return(
    <Container className='px-2 mb-5'>
        <Container>
            <Row className='px-2 mb-5 mt-5'>
                <img src={aviao} alt="Avião." className='img col-sm-5 col-md-3 col-lg-2'/>
                <h1 className='text-center mt-5 col-sm-7 col-md-9'>Registered aircrafts</h1>
            </Row>
        </Container>
        <Container>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Model</th>
                <th>Engine</th>
                <th>Certificarion</th>
                <th>Flap</th>
                <th>Reverser Amount</th>
                <th>Created at</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
                {this.state.result.map(item => {
                    return(
                        <tr>
                        <td>{item.model}</td>
                        <td>{item.engine}</td>
                        <td>{item.certification}</td>
                        <td>{item.flap}</td>
                        <td>{item.reverserAmount}</td>
                        <td>{item.createdAt}</td>
                        <td className='col-xs-1 col-md-4 col-lg-2'><img src={edit} alt="Editar." className='img col-xs-1 col-sm-12 col-md-10 col-lg-4'/></td>
                        <td className='col-xs-1 col-sm-1 col-lg-2'><img src={delet} alt="Excluir." className='img col-xs-2 col-sm-10 col-md-10 col-lg-4'/></td>
                        </tr>
                )})}
        </tbody>

        </Table>
        </Container>
    </Container>
)}        
}

export default AircraftTable;