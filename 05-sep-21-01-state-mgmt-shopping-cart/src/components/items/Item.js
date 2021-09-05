import React, { Component } from 'react';

function Item({name, price, addItem, removeItem, pic}) {
    return (
        <div className={name}><span role="img" aria-label={name}>
            <img src={pic} alt={name}/>
            {name}
            {price}
        </span>
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