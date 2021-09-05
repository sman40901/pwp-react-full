import React, { Component } from 'react';
import './Product.css';


class Product extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
                {/* <div className='addremove'></div>
                <div className='product'>

                </div> */}
                {/* <div className='totalno'>

                </div> */}
                <button className='addProduct'>Add</button>
                <button className='removeProduct'>Remove</button>
            </div>
        );
    }
}

export default Product;