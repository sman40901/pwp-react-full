
import React, { Component } from 'react';
import TodoCard from '../components/TodoCard'

class MainContainer extends Component {
    state = {
        cards: []
    }
    componentDidMount() {
        fetch("http://localhost:3000/cards")
            .then(resp => resp.json())
            .then(cards => {
                this.setState({ cards: cards })
            })
    }
    createNewCard = (input) => {
        fetch('http://localhost:3000/cards', {
            method:"POST",
            headers: {
                'Content-Type': 'application-json',
                Accept: 'application/json'
            },
            bofy: JSON.stringify({
                title: input
            })
        });
    }
    render(){
    return(

        <>
            <TodoCard/>
        </>
    );
    }
}

export default MainContainer;
