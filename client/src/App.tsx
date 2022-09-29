import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Calculo from './Views/Calculo';
import Teste from './Views/teste';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Calculo/>}/>
    <Route path="*" element={<Navigate to="/" />}/>
    <Route path="/teste" element={<Teste/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;