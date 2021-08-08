import React, { Component } from 'react';
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import IconComponent from './Components/IconComponent';
import TextDisplay from './Components/TextDisplay';
import IconList from './Components/IconList';
import CustomerForm from './Forms/CustomerForm';

const icons = [
    'https://th.bing.com/th/id/OIP.WA_9JsyqFkge2HwYKcdJQwHaFO?pid=ImgDet&rs=1',
    'https://cdn4.iconfinder.com/data/icons/commenly-needed/400/Icon-04-512.png',
    'https://findicons.com/files/icons/2779/simple_icons/2048/github_2048_black.png'
];

const helloworld="Hello World!";
const intro = "A few practical React exercises with detailed solutions for real-world use cases. This site is very loosely based on Kent C Dodd's Epic React Workshops.";
const listOfWorks='List of Exercises';

function App(){
  return(
    <div id="App">
        {/* <CustomerForm/> */}
        {/* {icons.map(item => {
        <IconComponent displayPic={item}/>
        })} */}
        {/* <IconList icons={icons}/> */}
        {/* {icons.map(item => {
            console.log({item});
            <h1>{item}</h1>
        })} */}
        <table>
            <tr>
                <td>
        <IconComponent displayPic={icons[0]}/><br></br>
        <IconComponent displayPic={icons[1]}/><br></br>
        <IconComponent displayPic={icons[2]}/><br></br>
        </td>
       
            <td>
                <TextDisplay
                    id='helloworld'
                    textString={helloworld}
                />
                <TextDisplay
                    id='intro'
                    textString={intro}
                />
                 <TextDisplay
                    id='listOfWorks'
                    textString={listOfWorks}
                />
            </td>
        </tr>
        </table>
    </div>
    );
}

export default App;