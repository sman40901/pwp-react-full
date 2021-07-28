import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types';


class App extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        const bio = this.state.displayBio ? (
            <>
                
                <button onClick={this.toggleDisplayBio}>Show Less</button>
                <h3>some title</h3>
                <p>this is description is shown and hide</p>
            </>
        ) : (
            <>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </>
        );
        return (
            <div>
                {bio}
            </div>
        );
    }
} // class ends here  

export default App;