import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

// class App extends React.Component {
//     render(){
//         return(
//         <div>
//          <h1>
//              Default Prop Example
//          </h1>
//          <h3>Welcome to {this.props.name}</h3>
//          <p>
//              <h4>Javascript is the best language to learn in 2021</h4>
//          </p>
//         </div>
//         );
//     }
//  }

//  App.defaultProps={
//      name: "JavaScript"
//  }
// export default App;

class App extends React.Component {  
  render() {  
     return (  
         <div>  
             <h1>ReactJS Props validation example</h1>  
             <table border='1'>  
                 <tr>  
                     <th>Type</th>  
                     <th>Value</th>  
                     <th>Valid</th>  
                 </tr>  
               <tr>  
                     <td>Array</td>  
                     <td>{this.props.propArray}</td>  
                     <td>{this.props.propArray ? "true" : "False"}</td>  
                 </tr>  
                 <tr>  
                     <td>Boolean</td>  
                     <td>{this.props.propBool? "True":"False"}</td>  
                     <td>{this.props.propBool ? "true" : "False"}</td>  
                 </tr>  
                 <tr>  
                     <td>Function</td>  
                     <td>{this.props.propFunc(5)}</td>  
                     <td>{this.props.propFunc(5) ? "true" : "False"}</td>  
                 </tr>  
                 <tr>  
                     <td>String</td>  
                     <td>{this.props.propString}</td>  
                     <td>{this.props.propString ? "true" : "False"}</td>  
                 </tr>  
                 <tr>  
                     <td>Number</td>  
                     <td>{this.props.propNumber}</td>  
                     <td>{this.props.propNumber ? "true" : "False"}</td>  
                 </tr>  
            </table>  
       </div>  
       );  
  }  
} // class ends here  

App.propTypes = {  
   propArray: PropTypes.array.isRequired,  
   propBool: PropTypes.bool.isRequired,  
   propFunc: PropTypes.func,  
   propNumber: PropTypes.number,  
   propString: PropTypes.string,   
}  

App.defaultProps = {  
   propArray: [1,2,3,4,5],  
   propBool: true,  
   propFunc: function(x){return x+5},  
   propNumber: 1,  
   propString: "JavaTpoint",  
}  

export default App;  