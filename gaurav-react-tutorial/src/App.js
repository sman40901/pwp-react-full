import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';





function App() {
  const [characters, setCharacters] = useState([]);

  const loadApiData = () => {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        setCharacters([...response.data.results])
      })
  }

  useEffect(() => {
    loadApiData();
    // return () => {

    // }
  }, []);

  // loadApiData();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React is Fun
        </a>
      </header>
    </div>
  );
}

export default App;
