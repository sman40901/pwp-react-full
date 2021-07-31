import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import reactDom from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personGoing: true,
            numberOfPersons: 56,
            nameOfPersons: ""
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const nameOfPersons = target.nameOfPersons;
        this.setState({
            [nameOfPersons]: nameOfPersons
        });
    }

    showCapturedValues = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const nameOfPersons = target.nameOfPersons;
        alert(target + " " + value + " " + nameOfPersons);
    }

    render() {
        return (
            <form>
                <h1>Multiple Input Controlled Form Example</h1>
                <label>
                    Is Person going:
                    <input
                        name="personGoing"
                        type="checkbox"
                        checked={this.state.personGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of persons:
                    <input
                        name="numberOfPersons"
                        type="number"
                        value={this.state.numberOfPersons}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Name of persons:
                    <input
                        name="nameOfPersons"
                        type="text"
                        value={this.state.nameOfPersons}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
export default App;