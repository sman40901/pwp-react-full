import logo from './logo.svg';
// import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
//19-aug-2021
import styles from './mystyles.modules.css';
class App extends Component {

  render() {

    return (
      <div id="App">
        <h1 className={styles.mystyle}> hello javasc</h1>
        <p className={styles.parastyle}>css tutorial</p>
      </div>
    );

  }
}


export default App;
