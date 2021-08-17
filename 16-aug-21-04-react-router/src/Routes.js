import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import loadable from 'react-loadable';

import Loading from "./Loading";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SubPage from './pages/SubPage';

const AsyncPages = {
    myAsyncSubPage: loadable({
        loader: () => import('./pages/myAsyncSubPage'),
        loading: Loading
    })
};

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const Routes = () => (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/sub-page' component={SubPage} />
        <Route exact path='/my-async-sub-page' component={AsyncPages.myAsyncSubPage} />

        <Redirect exacts from='/' to='/login' />

        <Route component={Page404} />
    </Switch>
);

export default Routes;