import React, { Component, useReducer, useState } from 'react';
import './wishlistitem.css';

function itemDone(item) {
    // alert(name);
    let status = 'strikethrough';
    if (document.getElementById(item.name).className === 'nd') {
        status = 'strikethrough';
    } else {
        status = 'nd';
    }
    document.getElementById(item.name).className = status;

}

function removeItem(item) {
    // alert(name);
    item.done = true;
}


export default function WishListItem({ item }) {
    return (
        <div className="item" key={item.name}>
            <span className='nd' id={item.name}>{item.name}</span>
            <button
                className='btnDoneItem'
                onClick={() => itemDone(item)}
            >Done</button>
            <button
                className='btnRemove'
                onClick={() => removeItem(item)}
            >Remove</button>
        </div>
    );
}