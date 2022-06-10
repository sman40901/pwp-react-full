import React, { Component, useReducer, useState } from 'react';
import WishListItem from './wishlistItem';




export default function WishList({ mylist }) {
    if (mylist == null || mylist.length !== 0) {
        return (
            <div>
                <h1>Here is your Wish List</h1>
                <ul>
                    {mylist.map(item => (
                        <WishListItem
                           item={item}
                        />
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <h1>Wish List is empty</h1>
        );
    }
}