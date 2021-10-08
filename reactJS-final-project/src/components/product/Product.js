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
        done: false,
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        count: 0,
        done: false,
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        count: 0,
        done: false,
        price: 4
    }
];


const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function increaseItemsCount(product) {
    const item = products.find(item => item.name === product.name);
    item.count++;
}

function decreaseItemsCount(product) {
    const item = products.find(item => item.name === product.name);
    if (item.count > 0) {
        item.count--;
    }
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if (productIndex < 0) {
                return state;
            }
            const update = [...state];
            update.splice(productIndex, 1)
            return update
        default:
            return state;
    }
}

function totalReducer(state, action) {
    if (action.type === 'add') {
        return state + action.price;
    }
    return state - action.price;
}

function Product({ mylist }) {

    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0);

    function getTotal(cart) {
        const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString(undefined, currencyOptions)
    }

    function addItem(product) {
        increaseItemsCount(product);
        setCart({ product, type: 'add' });
    }

    function addToWishList(product) {
        const indexItem = mylist.findIndex(item => item.name === product.name);
        // alert(item1);
        if (indexItem === -1) {
            mylist.push(product);
            // alert(mylist.length)
        }
    }

    function removeItem(product) {
        decreaseItemsCount(product);
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
                    addToWishList={() => addToWishList(product)}
                />
            ))}
        </div>
    );

}

export default Product;