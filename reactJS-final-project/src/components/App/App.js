import './App.css';
// import { render } from 'react-dom';
// import { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Product from '../product/Product'
import Home from '../Home/home';
import Login from '../login/Login';
import WishList from '../wishlist/wishlist';

const myList = [];

function App() {
  return (
    <div className="App">
      <table>
        <BrowserRouter>
          <tr className="top">
            <td className="top">
              <table>
                <tr>
                  <td>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/home" id="home">Home</Link>
                        </li>
                        <li>
                          <Link to="/product" id="product">Buy Product</Link>
                        </li>
                        <li>
                          <Link to="/login" id="login">Login</Link>
                        </li>
                        <li>
                          <Link to="/wishlist" id="wishlist">Wish List</Link>
                        </li>
                      </ul>
                    </nav>
                  </td>
                </tr>
              </table>
            </td>

            <td>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/product">
                  <Product mylist={myList} />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/wishlist">
                  <WishList mylist={myList} />
                </Route>
              </Switch>
            </td>
          </tr>
        </BrowserRouter>
      </table>
    </div>
  );
}

export default App;
