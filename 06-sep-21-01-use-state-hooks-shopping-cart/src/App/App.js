// import logo from './logo.svg';
import './App.css';
// import { render } from 'react-dom';
// import { Component } from 'react';
import Manatee from '../component/manatee/Mantee';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Narwhal from '../component/narwhal/narwhal';
import Whale from '../component/whale/whale';
// import {Switch} from 'react-router';
//02-sep-2021

function App() {
  return (
    <div className="App">

      <h1>Marine Annimals</h1> {/* global page tag */}

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Mantee</Link>
            </li>
            <li>
              <Link to="/narwhal">Narwhal</Link>
            </li>
            <li>
              <Link to="/whale">Whale</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/manatee'>
            <Manatee />
          </Route>
          <Route path='/narwhal'>
            <Narwhal />
          </Route>
          <Route path='/whale'>
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
