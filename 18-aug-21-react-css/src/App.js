import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
//10-aug-2021

const TextInput = React.forwardRef((props, ref) => {
  <input type="text" placeholder="abda" ref={ref} />
})

const inputRef = React.createRef();

class App extends Component {

  render() {
    return (
      <div id="App">
        <h1 style={{ color: "green" }}> hello javasc</h1>
      </div>
    );

  }
}


export default App;
