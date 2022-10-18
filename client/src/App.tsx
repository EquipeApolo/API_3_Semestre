import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Calculo from './Views/calculo';
import Teste from './Views/teste';
import CadastroAeronave from './Views/cadastroAeronave';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Calculo/>}/>
    <Route path="*" element={<Navigate to="/" />}/>
    <Route path="/teste" element={<Teste/>}/>
    <Route path="/cadastroAeronave"private name() {
      
    }element={<CadastroAeronave/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;