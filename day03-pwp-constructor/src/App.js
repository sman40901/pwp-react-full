import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';



class App extends React.Component {
    constructor() {
        super();
        this.findDOMNodeHandler1 = this.findDOMNodeHandler1.bind(this);
        this.findDOMNodeHandler2 = this.findDOMNodeHandler2.bind(this);
    };
    forceUpdateState = ()=>{
        this.forceUpdate();
    };

    findDOMNodeHandler1() {
        let myDiv = document.getElementById("myDivOne");
        reactDom.findDOMNode(myDiv).style.color = 'red';
    };
    findDOMNodeHandler2() {
        let myDiv = document.getElementById("myDivTwo");
        reactDom.findDOMNode(myDiv).style.color = 'magenta';
    };
    render() {
        return (
            <div>
                <h1> ReactJS Find DOM Node Example </h1>
                <button onClick={this.findDOMNodeHandler1}> Find Dom Node 1 </button>
                <button onClick={this.findDOMNodeHandler2}> Find Dom Node 2 </button>
                <h3 id="myDivOne" style={{color:'black'}}> NODE - 1 </h3>
                <h3 id="myDivTwo" style={{color:'black'}}> NODE - 2 </h3>
                <h3>Random number : {Math.random()}</h3>
                <button onClick={this.forceUpdateState}>FORCE UPDATE</button>

            </div>);
    }
} // class ends here


export default App;