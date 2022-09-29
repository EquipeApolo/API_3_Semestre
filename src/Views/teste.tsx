import React, { Component} from 'react';
import axios from 'axios';


type state = {
  nome: string,
  senha: string;
  email: string
}

class Teste extends Component<any, state>{
	
  constructor(props: any) {
    super(props)
    this.state = {
      nome: '',
      senha: '',
      email: ''
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

  postClickButton = () =>{
   axios.post("http://localhost:3001/users/cadastrar",{
    name: this.state.nome,
    senha: this.state.senha,
    email: this.state.email
  })
  }

  render(){
      
    return (
      <form onSubmit={this.eventoFormulario}>
      <div>
        <p>Nome:</p>
        <input type="text" name="name" onChange={this.obterNome}/><br></br>
        <p>email</p>
        <input type="email" name='email'onChange={this.obterEmail}/><br />
        <p>senha</p>
        <input type="password" name="senha" onChange={this.obterSenha}/>
        <input type="button" value="enviar" onClick={this.postClickButton} />
      </div>
      </form>
    );
  }
  
}



export default Teste;
