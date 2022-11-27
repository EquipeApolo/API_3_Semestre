import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes, useNavigate, useParams } from 'react-router-dom';
import Calculo from './Views/calculo';
import CadastroAeronave from './Views/cadastroAeronave';
import EditarAeronave from './Views/editarAeronave';
import AircraftTable from './Views/listaAeronaves';
import CadastroUsuario from './Views/cadastroUsuario';
import EditarUsuario from './Views/editarUsuario';
import TelaLogin from './Views/telaLogin';
import UserTable from './Views/listaUsuario';
import Nav from './Components/Nav';
import ListaFlap from './Views/listaFlap';
import EditarFlap from './Views/editarFlap';
import Home from './Views/home';
import CadastroFlap from './Views/CadastroFlap';
import HistoryTable from './Views/historico';

function GetIdAeronave(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <EditarAeronave taskId={id}></EditarAeronave>
    </div>
  )
}
function GetIdUsuario(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <EditarUsuario taskId={id}></EditarUsuario>
    </div>
  )
}
function GetIdFlap(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <EditarFlap taskId={id}></EditarFlap>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        {
          localStorage.getItem('nome') ?
          <>
            <Route index element={<Home/>}/>
          </>
          : 
          <Route index element={<TelaLogin/>}/>
        }
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/calculation" element={<Calculo/>}/>
        <Route path="/registerAircraft" element={<CadastroAeronave/>}/>
        <Route path="/registerFlap" element={<CadastroFlap/>}/>
        <Route path="/editAircraft/:id" element={<GetIdAeronave/>}/>
        <Route path="/editFlap/:id" element={<GetIdFlap/>}/>
        <Route path="/aircrafts" element={<AircraftTable/>}/>
        <Route path="/users" element={<UserTable/>}/>
        <Route path="/flaps" element={<ListaFlap/>} />
        <Route path="/registerUser" element={<CadastroUsuario />}/>
        <Route path="/editUser/:id" element={<GetIdUsuario/>}/>
        <Route path="/historic" element={<HistoryTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;