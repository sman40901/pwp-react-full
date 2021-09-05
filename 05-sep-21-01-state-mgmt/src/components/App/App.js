import './App.css';
// import { render } from 'react-dom';
// import { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Product from '../product/Product'

//05-sep-2021

function App() {
  return (
    <div className="App">

     <Product></Product>
    </div>
  );
}

export default App;
