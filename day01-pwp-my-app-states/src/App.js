import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [{ "name": "Jack" }, { "name": "Jill" }, { "name": "Bill" }] }
  }

  render() {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map((item) => <ListStudentNames data={item} />)}
        </ul>
      </div>
    );
  }
}
class StudentName extends React.Component {
  render() {
    return (
      <div><h1>Student Name Detail</h1></div>
    );
  }
}


class ListStudentNames extends React.Component {
  render() {
    return (
      // <ul>
        <li>{this.props.data.name}</li>
      // </ul> 
    );
  }
}

export default App;
