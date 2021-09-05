import React, { Component } from 'react';
import { useState } from 'react';
import Cart from '../cart/cart'
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
    

    render() {
        return (
            <div className='wrapper'>
                <Cart 
                    items={this.state.cart}
                    total={this.getTotal()}
                />
                <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
                <button className='addProduct'>Add</button>
                <button className='removeProduct'>Remove</button>
            </div>
        );
    }
}

export default Product;