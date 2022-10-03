import React, { Component} from 'react';
import axios from 'axios';


type state = {
  nameError: string,
  emailError: string,
  senhaError: string
}



class Teste extends Component<any, state>{
	private nome:string = ""
  private senha:string = ""
  private email:string = ""
  constructor(props: any) {
    super(props)
    this.state = {
      nameError: '',
      emailError: '',
      senhaError: ''
    }
  }
  eventoFormulario = (evento: any) => {
    evento.preventDefault()
  }

  obterNome = (evento: any) => {
    this.nome = evento.target.value
  }

  obterSenha = (evento: any) => {
    this.senha = evento.target.value
  }

  obterEmail = (evento: any) => {
    this.email = evento.target.value
  }

  validate = () => {
    let nameError = "";
    let emailError = ""; 
    let senhaError = ""
  

    if (!this.nome) {
      nameError = "O nome não pode ficar vazio";
    }else{
      nameError = ""
    }

    if (!this.senha) {
      senhaError = "A senha não pode ficar vazia";
    }else if(this.senha.length < 8){
      senhaError = "Senha tem que ter 8 digitos ou mais"
    }else{
      senhaError = ""
    }

    if (!this.email.includes("@")) {
      emailError = "Email inválido";
    }else{
      emailError = ""
    }
    this.setState({ emailError, nameError, senhaError});
    if (emailError || nameError|| senhaError) {
      return false;
    }

    return true;
  };

  postClickButton = (event: any) =>{
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        axios.post("http://localhost:3001/users/cadastrar",{
         name: this.nome,
         senha: this.senha,
         email: this.email
         
       })
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
