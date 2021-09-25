// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Manatee from '../manatee/Mantee';
import Narwhal from '../narwhal/narwhal';
import Whale from '../whale/whale';

// {/* if we use like this, it will trigger full browser refresh */}
//         {/* <li><a href="/manatee">Manatee</a></li>
//       <li><a href="/narwhal">Narwhal</a></li>
//       <li><a href="/whale">Whale</a></li> */}
function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
