import React, { Component } from 'react';

state={
    input:""
}

handleInput=(event)=>{
    event.persists();
    this.ListeningStateChangedEvent({
        input:event.target.value
    });
}

class CreateCard extends Component{
    
}