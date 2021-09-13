import React, { Component, useReducer, useState } from 'react';
// import { useState } from 'react';
import Cart from '../cart/cart'
import Item from './Item';
import './Product.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];


const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function Product() {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function getTotal(total) {
        return total.toLocaleString(undefined, currencyOptions)
    }

    function addItem(product) {
        setCart(current => [...current, product.name]);
        setTotal(current => current + product.price);
      }

    function removeItem(product) {
        // this.setState(state => {
        //     const cart = [...state.cart];
        //     const productIndex = cart.findIndex(p => p.name === product.name);
        //     if (productIndex < 0) {
        //         return;
        //     }
        //     cart.splice(productIndex, 1)
        //     return ({
        //         cart
        //     })
        // })
        // const newCart = cart;
        // const productIndex = cart.findIndex(p => p.name === product.name);
        // if (productIndex < 0) {
        //     return;
        // }
        // newCart.removeItem(productIndex)
        // alert(newCart)
        setCart(current=>{
            const cart1 = cart;
            const productIndex = cart1.findIndex(p => p.name === product.name);
            if (productIndex < 0) {
                return;
            }
            cart1.splice(productIndex, 1)
            return ({
                cart1
            })
        });
        setTotal(current => current - product.price);
    }

    return (
        <div className='wrapper'>
            <Cart
                items={cart.length}
                total={getTotal(total)}
            />
            {products.map(product => (

                <Item
                    name={product.name}
                    emoji={product.emoji}
                    addItem={() => addItem(product)}
                    removeItem={() => removeItem(product)}
                />
            ))}
        </div>
    );

}

export default Product;