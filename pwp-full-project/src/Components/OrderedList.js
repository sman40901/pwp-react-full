import React, { Component } from 'react';
import ListItemWork from './ListItemWork';

function OrderedList({ books }) {
    return (
        <ol>
            {books.map((item) => <ListItemWork workitem={item} />)}
        </ol>
    );
}

export default OrderedList;