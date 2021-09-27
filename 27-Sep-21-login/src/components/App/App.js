import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';


// {/* if we use like this, it will trigger full browser refresh */}
//         {/* <li><a href="/manatee">Manatee</a></li>
//       <li><a href="/narwhal">Narwhal</a></li>
//       <li><a href="/whale">Whale</a></li> */}
function App() {
  const [token, setToken] = useState();

  if (token != true) {
    return (
      <Login  setToken={setToken}/>
    );
  }
  else {
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/preferences">Preferences</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
