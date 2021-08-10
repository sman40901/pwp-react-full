import React, { Component } from 'react';
import ListItemWork from './ListItemWork';

function UnNumberedList({ books }) {
    return (
        <ul>
            {books.map((item) => <ListItemWork workitem={item} />)}
        </ul>
    );
}

export default UnNumberedList;