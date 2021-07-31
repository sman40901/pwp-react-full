import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';



class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {hello : "Prashanna"};
        this.changeState =this.changeState.bind(this)
    
    }
    render()
    {
        return(
            <div>
                <h1>ReactJS Component LifeCycle</h1>
                <h3>Hello{this.state.hello}</h3>
                <button onClick ={this.changeState}>Click Here</button>
            </div>
        );
    }
    
    componentWillMount(){
        console.log(" Component WILL MOUNT!!!");
    }
    componentDidMount(){
        console.log(" Component DID MOUNT!!!");
    }
    changeState(){
        this.setState({hello:"It is a good React Tutorial"});
    }
    componentWillReceiveProps(newProps)
    {
        console.log(" Component WILL RECEIVE PROPS!!!");
    }
    shouldComponentUpdate(newProps,newState){
        return true;
    }
    componentWillUpdate(newProps,newState){
        console.log(" Component WILL UPDATE!!!");
    }
    componentDidUpdate(prevProps,prevState){
        console.log(" Component DID UPDATE!!!");
    }
    componentWillUnmount(){
        console.log(" Component WILL UNMOUNT!!!");
    }
} // class ends here


export default App;