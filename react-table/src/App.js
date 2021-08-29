import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
//10-aug-2021
class App extends Component {
  constructor(props){
    super(props);
    this.callRefInput = null;
    this.setInputRed = (element) => {
      this.callRefInput = element;
    }
    this.focusRefInput=()=>{
      //focus input using raw DOM API
      if(this.callRefInput){
        this.callRefInput.focus();
      }
    };
  
  }

  componentDidMount(){
    //auto focus of the input mount
    this.focusRefInput();
  }
  
  render(){
    return(
      <div>
        <input type="text" ref={this.setInputRef}/>
        <input type="button" onClick={this.focusRefInput}/>
      </div>
    );
  }

}





export default App;
