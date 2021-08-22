import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
import CustomerForm from './forms/CustomerForm';
//10-aug-2021

function App() {
  return (
    <div id="App">
      <CustomerForm />
    </div>
  );
}

export default App;
