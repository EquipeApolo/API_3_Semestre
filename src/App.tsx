import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Calculo from './Views/calculo';
import Teste from './Views/teste';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Calculo Teste="a"/>}/>
    <Route path="/teste" element={<Teste Thales="b"/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;