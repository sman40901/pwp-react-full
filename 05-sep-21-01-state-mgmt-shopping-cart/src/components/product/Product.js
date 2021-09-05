import React, { Component } from 'react';
import { useState } from 'react';
import Cart from '../cart/cart'
import Item from '../items/Item';
import './Product.css';


class Product extends Component {
    state = {
        cart: [],
        total: 0
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    getTotal = () => {
        return this.state.total.toLocaleString(undefined, this.currencyOptions)
    }

    addItem = (event) => {
        const target = event.target;
        alert(target.name)
        // this.setState({
        //     cart: ['ice cream'],
        //     total: 5
        // })
    }

    removeItem = () => {
        this.setState({
            cart: [],
            total: 0
        })
    }

    // "https://hotemoji.com/images/emoji/x/6mnhuxe873ax.png"
    render() {
        return (
            <div className='wrapper'>
                <Cart
                    items={this.state.cart}
                    total={this.getTotal()}
                />
                <Item
                    name="icecream"
                    price="5"
                    addItem={this.addItem}
                    removeItem={this.removeItem}
                    pic="https://hotemoji.com/images/emoji/9/fy8o5d1ara2s9.png"
                />
                <Item
                    name="coffee"
                    price="4"
                    addItem={this.addItem}
                    removeItem={this.removeItem}
                    pic="https://hotemoji.com/images/emoji/x/6mnhuxe873ax.png"
                />
            </div>
        );
    }
}

export default Product;