// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../component/Home/Home';
import Header from '../component/Header/Header';
import Product from '../component/Product/Product';

// import {Switch} from 'react-router';
//02-sep-2021

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">\
            <Header />
            <Home />
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
