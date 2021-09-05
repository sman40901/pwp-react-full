import React, { Component } from 'react';
import { useState } from 'react';
import Cart from '../cart/cart'
import './Product.css';


class Product extends Component {
    state = {
        cart: [],
        total: 0
      }
    

    render() {
        return (
            <div className='wrapper'>
                <Cart 
                    items={this.state.cart}
                    total={this.state.total}
                />
                <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
                <button className='addProduct'>Add</button>
                <button className='removeProduct'>Remove</button>
            </div>
        );
    }
}

export default Product;