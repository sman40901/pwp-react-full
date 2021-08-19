import logo from './logo.svg';
// import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import CSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm
//18-aug-2021
// import styles from './mystyles.modules.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items:['Blockchain','React']
    };
  }

  handleAdd=()=>{
    const newItems=this.state.items.concat([
      prompt('Enter ITem Name')
    ]);
    this.setState({items:newItems});
  }

  handleRemove=(i)=>{
    const newItems=this.state.items.slice();
    newItems.splice(i,1);
    this.setState({items:newItems});
  }

  render() {
    const items=this.items.map((item,i)=>{
      <div key={item} onClick={()=>this.handleRemove(i)}>{item}</div>
    });
    return (
      <div id="App">
        <h1>Animatihon Example</h1>
        <button onClick={this.handleAdd}>Insert Item</button>
        <CSSTransitionGroup 
          transitionName="example"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={600}
        >

        </CSSTransitionGroup>
      </div>
    );

  }
}


export default App;
