import React from "react";
import { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class TelaLogin extends Component<any>{

    render() {
        return (
            <Container>
                <Form>
                    <Row>
                        <h1 className='text-center' style={{ marginTop: "50px" }}>Login</h1>
                    </Row>
                </Form>

                <Form>
                    <Row>
                        <Col md={{ span: 6, offset: 3}}>
                            <h5 className="card-title"  style={{ marginTop: "30px" }}>Email</h5>
                            <input type='text' className='input form-control form-control-lg inputGroup-sizing-sm' id="EmailUser"
                            placeholder="Email"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3}}>
                            <h5 className="card-title"  style={{ marginTop: "30px" }}>Password</h5>
                            <input type='password' className='input form-control form-control-lg inputGroup-sizing-sm' id="SenhaUser"
                            placeholder="Password"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3}}>
                            <Button className="botao-resultado" style={{margin:'10px', marginTop:'15px'}} size="lg">Save</Button>
                        </Col>
                    </Row>

                </Form>
            </Container>
        )
    }
}
export default TelaLogin;