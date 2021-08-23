import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
//10-aug-2021

const TextInput=React.forwardRef((props,ref)=>{
  <input type="text" placeholder="abda" ref={ref}/>
})

const inputRef=React.createRef();

class App extends Component{
  handleSumbit=(e)=>{
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  render(){
    return(
      <div>
      
        <form onSubmit={e=>this.handleSumbit(e)}>
          <TextInput ref={inputRef}/>
          <button>Submit</button>
        </form>
      </div>
    );

  }
}


export default App;
