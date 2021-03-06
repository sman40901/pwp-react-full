import React, { Component } from 'react';
import './Product.css';

function Item({name,emoji, addItem, removeItem, itemCount}) {
    return (
        <div className="product" key={name}>
            <span role="img" aria-label={name}>{emoji}</span>
            <span className="count" >x {itemCount}</span>
            <button
                className='btnAddProduct'
                onClick={addItem}
            >Add</button>
            <button
                className='btnRemoveProduct'
                onClick={removeItem}
            >Remove</button>

        </div>
    );
}

export default Item;