import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes, useParams } from 'react-router-dom';
import Calculo from './Views/calculo';
import Teste from './Views/teste';
import CadastroAeronave from './Views/cadastroAeronave';
import EditarAeronave from './Views/editarAeronave';
import AircraftTable from './Views/listaAeronaves';

function GetId(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <EditarAeronave taskId={id}></EditarAeronave>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Calculo/>}/>
    <Route path="*" element={<Navigate to="/" />}/>
    <Route path="/teste" element={<Teste/>}/>
    <Route path="/registerAirplane" element={<CadastroAeronave/>}/>
    <Route path="/editAirplane/:id" element={<GetId/>}/>
    <Route path="/airplanes" element={<AircraftTable/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;