import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        // this.handleChange=this.handleChange.bind(this);?


    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    handleSubmit = (event) => {
        alert("You have Submitted the input  Successfully " + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Controlled Form Example</h1>
                {/* <label>Name:
               <input type = "text" ref= {this.input} /> 
               </label> */}
                <label>Company Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />

            </form>
        );
    }

}
export default App;