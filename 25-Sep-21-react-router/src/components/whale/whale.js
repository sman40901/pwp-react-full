import React from 'react'
import { useLocation, useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import Beluga from './beluga';
import BlueWhale from './blue_whale';

export default function Whale() {
    // 1st method
    // const { search } = useLocation();
    // const match = search.match(/type=(.*)/);
    // const type = match?.[1];

    //2nd method
    // const { type } = useParams();

    //3rd method
    const { path } = useRouteMatch();

    return (
        <>
            <h2>Whale</h2>
            {/* {type === 'beluga' && <Beluga />}
            {type === 'blue' && <BlueWhale />} */}

            <Switch>
                <Route path={`${path}/beluga`}>
                    <Beluga />
                </Route>
                <Route path={`${path}/blue`}>
                    <BlueWhale />
                </Route>
            </Switch>
        </>
    );
}