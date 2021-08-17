import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Page404 from "./pages/404Page";
import HomePage from "./pages/HomePage";
import SubPage from './pages/SubPage';

const pages = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/sub-page' component={SubPage} />

        <Route component={Page404} />
    </Switch>
);

function Routes(){
    return(
        {pages}
    );
}

export default Routes;