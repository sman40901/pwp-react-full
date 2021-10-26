// import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../component/Home/Home';
import Header from '../component/Header/Header';
import Product from '../component/Product/Product';
import Login from '../component/Login/Login';


// import {Switch} from 'react-router';
//02-sep-2021

function App() {

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">\
            <Header />
            <Home />
            <Login />
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
