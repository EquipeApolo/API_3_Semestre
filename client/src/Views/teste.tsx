import React, { Component} from 'react';
import axios from 'axios';


type state = {
  nome: string,
  senha: string;
  email: string,
  nameError: string,
  emailError: string,
  senhaError: string
}



class Teste extends Component<any, state>{
	
  constructor(props: any) {
    super(props)
    this.state = {
      nome: '',
      senha: '',
      email: '',
      nameError: '',
      emailError: '',
      senhaError: ''
    }
  }
  eventoFormulario = (evento: any) => {
    evento.preventDefault()
  }

  obterNome = (evento: any) => {
    this.setState({
      nome: evento.target.value
    })
    console.log(this.state.nome)
  }

  obterSenha = (evento: any) => {
    this.setState({
      senha: evento.target.value
    })
    console.log(this.state.senha)
  }

  obterEmail = (evento: any) => {
    this.setState({
      email: evento.target.value
    })
    console.log(this.state.email)
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    let senhaError = ""
  

    if (!this.state.nome) {
      nameError = "O nome não pode ficar vazio";
    }

    if (!this.state.senha) {
      senhaError = "A senha não pode ficar vazio";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (emailError || nameError || senhaError) {
      this.setState({ emailError, nameError, senhaError});
      return false;
    }

    return true;
  };

  postClickButton = (event: any) =>{
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        axios.post("http://localhost:3001/users/cadastrar",{
         name: this.state.nome,
         senha: this.state.senha,
         email: this.state.email
       })
      this.setState(this.state);
    }
  }

  render(){
      
    return (
      <form onSubmit={this.eventoFormulario}>
      <div>
        <p>Nome:</p>
        <input type="text" name="name" onChange={this.obterNome}/><br></br>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        <p>email</p>
        <input type="email" name='email'onChange={this.obterEmail}/><br />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        <p>senha</p>
        <input type="password" name="senha" onChange={this.obterSenha}/>
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.senhaError}
        </div>

  
        <input type="button" value="enviar" onClick={this.postClickButton} /> 
      </div>
      </form>
    );
  }
  
}



export default Teste;
