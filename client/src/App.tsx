import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes, useParams } from 'react-router-dom';
import Calculo from './Views/calculo';
import CadastroAeronave from './Views/cadastroAeronave';
import EditarAeronave from './Views/editarAeronave';
import AircraftTable from './Views/listaAeronaves';
import CadastroUsuario from './Views/cadastroUsuario';
import EditarUsuario from './Views/editarUsuario';
import TelaLogin from './Views/telaLogin';
import UserTable from './Views/listaUsuario';
import Flap from './Views/flap';
import Nav from './Components/Nav';

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
function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route index element={<Calculo/>}/>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/registerAircraft" element={<CadastroAeronave/>}/>
        <Route path="/registerFlap" element={<Flap/>}/>
        <Route path="/editAircraft/:id" element={<GetIdAeronave/>}/>
        <Route path="/aircrafts" element={<AircraftTable/>}/>
        <Route path="/users" element={<UserTable/>}/>
        <Route path="/telaLogin" element={<TelaLogin/>}/>
        <Route path="/registerUser" element={<CadastroUsuario />}/>
        <Route path="/editUser/:id" element={<GetIdUsuario/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;