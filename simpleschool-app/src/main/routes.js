import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import Login from '../views/login/login';
import InsertUser from '../views/user/insert-user';
import Home from '../views/login/home';

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/insert-user" component={InsertUser} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;