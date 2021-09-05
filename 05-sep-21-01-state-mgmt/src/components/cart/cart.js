import React, { Component } from 'react';
// import './Product.css';


function Cart({total, items}){
    
        return (
            <div className='cart'>
                <div>Shopping Cart:{items.length} total items</div>
                <div>Total:{total}</div>
            </div>
        );
    
}

export default Cart;