import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Beluga from './beluga';
import BlueWhale from './blue_whale';

export default function Whale() {
    // const { search } = useLocation();
    const { type } = useParams();
    // const match = search.match(/type=(.*)/);
    // const type = match?.[1];

    return (
        <>
            <h2>Whale</h2>
            {type === 'beluga' && <Beluga />}
            {type === 'blue' && <BlueWhale />}
        </>
    );
}