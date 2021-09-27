
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

    addList=(cardId, input)=>{
        fetch('http://localhost:3000/lists', {
            method:"POST",
            headers: {
                'Content-Type': 'application-json',
                Accept: 'application/json'
            },
            bofy: JSON.stringify({
                description: input,
                card_id:cardId,
                completed:false
            })
            .then(resp=>resp.json)
            .then(newList=>{
                const foundCard={...this.state.cards.find(card=>card.id===cardId)}
                foundCard.List={...foundCard.lists,newList}

                const newCards=this.state.cards.map(card=>{
                    if(card.id===cardId){
                        return foundCard;
                    }else{
                        return card;
                    }
                })
                this.setState({
                    cards:newCards
                })
            })
        });
    }

    render(){
    return(

        <>
            <TodoCardContainer />
        </>
    );
    }
}

export default MainContainer;
