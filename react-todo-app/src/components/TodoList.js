import React, { Component } from 'react';
// import TodoList from './TodoList';



const TodoList=(props)=>{
    function handleClick(event){
        event.preventDefault();
        props.handleClickList(props.cardId, props.list.id)

    }
    return (
        <div onClick={handleClick} className='to-do-class-container'>
            <h3>{props.list.description}
            ?"/"
            :
            </h3>
        </div>
    );
}

export default TodoList;