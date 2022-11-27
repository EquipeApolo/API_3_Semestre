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
    dados: any[]
}

class HistoryTable extends Component<{}, table>{

    constructor(props: any) {
        super(props);
        this.state = {
            id: '',
            result: '',
            createdAt: '',
            updatedAt: '',
            usersId: '',
            airplaneId: '',
            dados: []
        }


}


componentDidMount(): void {
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
                <th>Result</th>
                <th>Created At</th>
                <th>Users Id</th>
                <th>Airplane Id</th>
            </tr>
        </thead>
        <tbody>
                {this.state.dados.map(item => {
                    return(
                        <tr>
                        <td>{item.result}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.usersId}</td>
                        <td>{item.airplaneId}</td>
                        </tr>
                )})}
        </tbody>

        </Table>
        </Container>
    </Container>
)}        
}

export default HistoryTable;