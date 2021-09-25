// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Manatee from '../manatee/Mantee';


function App() {


  return (
    <div className='App'>
      <h1>Mammals</h1>
      <BrowserRouter>
        <Manatee />
      </BrowserRouter>
    </div>
  );

}



export default App;
