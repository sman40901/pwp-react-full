import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import SubPage from './pages/SubPage';
import {Link} from 'react-router-dom';


const pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
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