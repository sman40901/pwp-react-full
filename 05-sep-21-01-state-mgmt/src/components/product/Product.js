import React, { Component } from 'react';
import { useState } from 'react';
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

class Product extends Component {
    state = {
        cart: [],
        // total: 0
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    getTotal = () => {
        // return this.state.total.toLocaleString(undefined, this.currencyOptions)
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString(undefined, this.currencyOptions)
    }

    addItem = (product) => {
        this.setState(state => ({
            cart: [...state.cart, product],
            // total: state.total + product.price
        }))
    }

    removeItem = (product) => {
        this.setState(state => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex(p => p.name === product.name);
            if (productIndex < 0) {
                return;
            }
            cart.splice(productIndex, 1)
            return ({
                cart
            })
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <Cart
                    items={this.state.cart}
                    total={this.getTotal()}
                />
                {products.map(product => (

                    <Item
                        name={product.name}
                        emoji={product.emoji}
                        addItem={() => this.addItem(product)}
                        removeItem={() => this.removeItem(product)}
                    />
                ))}
            </div>
        );
    }
}

export default Product;