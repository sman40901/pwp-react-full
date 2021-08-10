import React, { Component } from 'react';
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import IconComponent from './Components/IconComponent';
import TextDisplay from './Components/TextDisplay';
import IconList from './Components/IconList';
import CustomerForm from './Forms/CustomerForm';
import ListItemWork from './Components/ListItemWork';
import UnNumberedList from './Components/UnNumberedList';
import OrderedList from './Components/OrderedList';

const icons = [
    'https://th.bing.com/th/id/OIP.WA_9JsyqFkge2HwYKcdJQwHaFO?pid=ImgDet&rs=1',
    'https://cdn4.iconfinder.com/data/icons/commenly-needed/400/Icon-04-512.png',
    'https://findicons.com/files/icons/2779/simple_icons/2048/github_2048_black.png'
];

const helloworld = "Hello World!";
const intro = "A few practical React exercises with detailed solutions for real-world use cases. This site is very loosely based on Kent C Dodd's Epic React Workshops.";
const listOfWorks = 'List of Exercises';
const references = 'References';

const works = [
    'TicTacToe and avoiding state management complexity',
    'Vanilla Tilt, direct DOM access and Memory Leaks',
    'Fetching Pokemons and error boundaries',
    'Safely fetch Rick and Morty Characters handling Async operations',
    'Simple fetch-and-cache pattern with Rick and Morty Characters',
    'Exposing properties to the parent with a scrollable component using forwardRef and useImperativeHandle',
    'Showing Big Head Avatars and debugging detecting user\'s screen sizes with useDebugValue',
    'User Update forms and the context modules function pattern',
    'Designing flexible compound accordion components',
    'Prop Collections and useAnimatedCounter',
    'Add additional functionality to useAnimatedCounter with Prop Getters',
    'The State Reducer Pattern to modify an accordion component\'s default behavior',
    'Understanding control props with a simple button component',
    'Creating a controllable Rating component',
    'Optimized rendering of large lists of items with React-Virtual'
];

const books = [
    'Kyle Simpson: You Don\'t Know JS',
    'Sandi Metz: Practical Object-Oriented Design Using Ruby'
]

const paidCourse = [
    'Kent C Dodds: Epic React.dev and Testing Javascript',
    'Josh W Comeau: CSS for JS Devs',
    'AlgoExpert',
    'Tanner Linsley\'s React Query Essentials'
]

function App() {
    return (
        <div id="App">
            {/* {icons.map(item => {
        <IconComponent displayPic={item}/>
        })} */}
            {/* <IconList icons={icons}/> */}
            {icons.map((item) => {
                console.log({ item });
                <h1>{item}</h1>
            })}
            <table>
                <tr>
                    <td>
                        {/* I want to make this in loop */}
                        {/* <IconComponent displayPic={icons[0]}/><br></br>
        <IconComponent displayPic={icons[1]}/><br></br>
        <IconComponent displayPic={icons[2]}/><br></br> */}
                    </td>

                    <td>
                        <TextDisplay
                            id='helloworld'
                            class='helloworld'
                            textString={helloworld}
                        />
                        <TextDisplay
                            id='intro'
                            class='intro'
                            textString={intro}
                        />
                        <TextDisplay
                            id='listOfWorks'
                            textString={listOfWorks}
                        />
                      <OrderedList
                            books={works} />
                        <TextDisplay
                            id='references'
                            class='helloworld'
                            textString={references}
                        />
                        <TextDisplay
                            id='references'
                            class='helloworld'
                            textString='Books'
                        />
                        <UnNumberedList
                            books={books} />
                        <TextDisplay
                            id='references'
                            class='helloworld'
                            textString='Paid Courses (For review)'
                        />
                        <UnNumberedList
                            books={paidCourse} />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default App;