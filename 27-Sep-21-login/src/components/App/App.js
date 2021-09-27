import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';


// {/* if we use like this, it will trigger full browser refresh */}
//         {/* <li><a href="/manatee">Manatee</a></li>
//       <li><a href="/narwhal">Narwhal</a></li>
//       <li><a href="/whale">Whale</a></li> */}
function App() {
  return (
    <div className="wrapper">
      <Dashboard/>
      <Preferences/>
    </div>
  );
}


export default App;
