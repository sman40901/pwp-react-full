import React, { Component } from 'react';
// import TodoList from './TodoList';



class TodoCard extends Component {
    state = {
        input: ""
    }

    handleListInput = (event) => {
        this.setState({
            input: event.target.value
        });

    }

    handleListSubmit = (event) => {
        event.preventDeault();
        this.props.addList(this.props.id,
            this.state.input);
        this.setState({
            input: ""
        });
    }

    renderList=()=>{
            return this.props.card.lists.map(list=>{
                return <TodoList
                    key={list.id}
                    handleClickLists={this.props.handleClickLists}
                    cardId={this.props.card.id}
                    list={}
                />
            });
    }

    render() {
        return (
            <div className="to-do-card">
                <h4>{this.props.card.title}</h4>
                <form
                    onSubmit={this.handleListSubmit}
                >
                    <input 
                        onChange={this.handleListInput}
                        type="text"
                        value={this.state.input}
                    />
                </form>
            </div>
        );
    }

}

export default TodoCard;
// const foundCard={...this.state.cards.find(card=>card.id===cardId)}
// foundCard.Lists={...foundCard.Lists.newlist}

// const newCards=this.state.cards.map(card=>{
//     if(card.id===cardID){
//         return foundCard;
//     }
//     else{
//         return card;
//     }
// });

// this.setState()