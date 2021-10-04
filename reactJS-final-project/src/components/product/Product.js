import React, { Component, useReducer, useState } from 'react';
// import { useState } from 'react';
import Cart from '../cart/cart'
import Item from './Item';
import './Product.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        count: 0,
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        count: 0,
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        count: 0,
        price: 4
    }
];

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function addItemsCount(product) {
    const item = products.find(item => item.name === product.name);
    item.count ++;
}

function subItemsCount(product) {
    const item = products.find(item => item.name === product.name);
    if (item.count > 0) {
        item.count --;
    }
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'add':
            // this function is not working
            addItemsCount(action.product);
            return [...state, action.product];

        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if (productIndex < 0) {
                return state;
            }
            const update = [...state];
            // this function is not working
            subItemsCount(action.product);
            update.splice(productIndex, 1)
            return update
        default:
            return state;
    }
}

function totalReducer(state, action) {
    if (action.type == 'add') {
        return state + action.price;
    }
    return state - action.price;
}

function Product() {

    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0);

    function getTotal(cart) {
        const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString(undefined, currencyOptions)
    }

    function addItem(product) {
        setCart({ product, type: 'add' });
    }

    function removeItem(product) {
        setCart({ product, type: 'remove' });
    }

    return (
        <div className='wrapper'>
            <Cart
                items={cart.length}
                total={getTotal(cart)}
            />
            {products.map(product => (

                <Item
                    name={product.name}
                    emoji={product.emoji}
                    itemCount={product.count}
                    addItem={() => addItem(product)}
                    removeItem={() => removeItem(product)}
                />
            ))}
        </div>
    );

}

export default Product;