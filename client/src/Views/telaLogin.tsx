import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Axios from "axios";

const [Email, setEmail] = useState("");
const [Senha, setSenha] = useState("");

let params = {
  email: Email,
  senha: Senha,
  }
class TelaLogin extends Component<any>{
  
  navigate = useNavigate()

  receberEmail(evento: any) {
      let entrada = evento.target.value;
      setEmail(entrada)
  }

  receberSenha(evento: any) {
      let entrada = evento.target.value;
      setSenha(entrada)
  }

  handleLogin(values: any) {
      console.log(params);
      values.preventDefault();
      Axios.get(`http://localhost:3001/users/${params.email}`, {
          params: { params }

      })
          .then((response) => {
              const data = response.data;
              console.log(data);
              debugger
              if (data.length === 0) {
                  Swal.fire({
                      title: `Error`,
                      html:
                          ' <b>User not found</b>'
                  })
              } else if (data[0].senha_acesso === params.senha) {
                  if (data[0].nivel_acesso === 1) {
                      localStorage.setItem('idUsuario',`${data[0].id}`)
                      localStorage.setItem('nomeUsuario',`${data[0].nome}`)
                      localStorage.setItem('nivelAcesso',`${data[0].nivel_acesso
                      }`)
                      this.navigate("/Index")
                  }
                  else {
                      localStorage.setItem('idUsuario',`${data[0].id}`)
                      localStorage.setItem('nomeUsuario',`${data[0].nome}`)
                      localStorage.setItem('nivelAcesso',`${data[0].nivel_acesso
                      }`)
                      this.navigate("/Calculo")
                      
                  }
              } else if (data[0].senha_acesso !== params.senha) {
                  Swal.fire({
                      title: `Error`,
                      html:
                          ' <b>Incorrect Password</b> '
                  })
              }
          });
  };



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
        )}
    }
export default TelaLogin;