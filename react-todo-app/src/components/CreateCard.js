import React, { Component } from 'react';


class CreateCard extends Component {
    state = {
        input: ""
    }

    handleInput = (event) => {
        event.persists();
        this.ListeningStateChangedEvent({
            input: event.target.value
        });
    }

    handleNewCard = (event) => {
        event.preventDeault();
        this.props.creteNewCard(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleNewCard} className="new-card-form">
                <input onChange={this.handleInput} className='new-card-input' type='text' value={this.state.input} />
                <input type='submit' value='Submit'/>
            </form>
        );
    }

}

export default CreateCard;