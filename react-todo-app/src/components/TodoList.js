import React, { Component } from 'react';
// import TodoList from './TodoList';



class TodoList extends Component {
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

export default TodoList;