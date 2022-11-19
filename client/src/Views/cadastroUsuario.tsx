import { Component } from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import React from "react";
import User from '../Models/user';
import axios from 'axios';
import Swal from 'sweetalert2';
import user from "../Icons/user.png";

type state = {
    nameError: string,
    emailError: string,
    passwordError: string,
    typeUserError: string
}

class CadastroUsuario extends Component<any, state>{
    private user: User = new User('','','','');

    constructor(props: any){
        super(props);
        this.state = {
            nameError: '',
            emailError: '',
            passwordError: '',
            typeUserError: ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.typeUserChange = this.typeUserChange.bind(this);
    }

    nameChange(event) {
        let nameError;
        const target = event.target;
        this.user.setName = target.value;
        if (!this.user.getName) {
            nameError = "The name is required";
        } else {
            nameError = ""
        }
        this.setState({ nameError: nameError })
    }

    emailChange(event) {
        let emailError;
        const target = event.target;
        this.user.setEmail = target.value;
        if (!this.user.getEmail) {
            emailError = "The email is required";
        } else {
            emailError = ""
        }
        this.setState({ emailError: emailError })
    }

    passwordChange(event) {
        let passwordError = ''
        const target = event.target;
        this.user.setPassword = target.value;
        if (!this.user.getPassword) {
            passwordError = "The password is required";
        } else { 
            passwordError = ""
        }
        this.setState({ passwordError: passwordError})
    }   

    typeUserChange(event) {
        let typeUserError = ''
        const target = event.target;
        this.user.setTypeUser = target.value;
        if (!this.user.getTypeUser) {
            typeUserError = "The type of user is required";
        } else {
            typeUserError = ""
        }
        this.setState({ typeUserError: typeUserError})
    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let typeUserError = "";

        if (!this.user.getName){
            nameError = "The name is required"
        } else {
            nameError = ""
        }

        if (!this.user.getEmail){
            emailError = "The email is required"
        } else {
            emailError = ""
        }

        if (!this.user.getPassword){
            passwordError = "The password is required"
        } else {
            passwordError = ""
        }

        if (!this.user.getTypeUser){
            typeUserError = "The type of user is required"
        } else {
            typeUserError = ""
        }

        this.setState({ nameError: nameError, emailError: emailError, passwordError: passwordError, typeUserError: typeUserError});
        if (nameError || emailError || passwordError || typeUserError) {
            return false
        } 
        return true;
    }

    postClickButton = async (event: any) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let res = -1
            await axios.post("http://localhost:3001/users/cadastrar", {
                name: this.user.getName,
                email: this.user.getEmail,
                senha: this.user.getPassword,
                tipoUsuario: this.user.getTypeUser
            }).then((response) => {
                res = response.data.id
            });

            console.log(res);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Register completed',
                showConfirmButton: false,
                timer: 1500
              })
            setTimeout(function() {
                window.location.href = "/users"
              }, 1500);
        }
    }


    render() {
        return (
            <Container>
                <Form>
                    <Row className="px-2 mt-3">
                        <img src={user} style={{paddingLeft: '15vh', height:'100px'}} alt="User." className="col-md-2"></img>
                        <h1 style={{}} className='mt-8 col-sm-7 col-md-9'>Register User</h1>
                    </Row>
                </Form>

                <Form>
                    <Row>
                        <Col md={{ span: 6, offset: 3}}>
                            <h5 className="card-title"  style={{ marginTop: "30px" }}>Name</h5>
                            <input type='text' className='input form-control form-control-lg inputGroup-sizing-sm' id="NameUser"
                            placeholder="Name" onChange={this.nameChange}/>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.nameError}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3}}>
                            <h5 className="card-title"  style={{ marginTop: "30px" }}>Email</h5>
                            <input type='text' className='input form-control form-control-lg inputGroup-sizing-sm' id="EmailUser"
                            placeholder="Email" onChange={this.emailChange}/>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3}}>
                            <h5 className="card-title"  style={{ marginTop: "30px" }}>Password</h5>
                            <input type='password' className='input form-control form-control-lg inputGroup-sizing-sm' id="SenhaUser"
                            placeholder="Password" onChange={this.passwordChange}/>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.passwordError}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3}}>
                            <h5 className="card-title"  style={{ marginTop: "30px" }}>Type of User</h5>
                            <select defaultValue="-1" className="input text-select form-select form-select-sm form-control-sm custom-select select md-3" id="btnTypeUser" onChange={this.typeUserChange}>
                                <option value="-1" disabled>Select</option>
                                <option value="User">User</option>
                                <option value="Adm">Adm</option>
                            </select>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.typeUserError}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 4}}>
                            <Button variant="danger" style={{margin:'10px', marginTop:'15px'}} size='lg' href="/users">Back</Button>
                            <Button className="botao-resultado" style={{margin:'10px', marginTop:'15px'}} size="lg" onClick={this.postClickButton}>Save</Button>
                        </Col>
                    </Row>

                </Form>
            </Container>
        )
    }
}

export default CadastroUsuario
