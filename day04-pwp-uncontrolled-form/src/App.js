import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';



class App extends React.Component {
    constructor (props){
        super(props);
        // this.state = {hello : "Prashanna"};
        this.input = React.createRef();
    
    }
    updateSubmit =() => {
        event.preventDefault(); // method to prevent default action, in form's case it prevents from submitting
    }

    render()
    {
        <h1>Uncotrolled form</h1>
        return(
           <form onSubmit={this.updateSubmit}>

           </form>
        );
    }
    
} // class ends here


export default App;