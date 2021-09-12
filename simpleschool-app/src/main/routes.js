import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import Login from '../views/login/login';
import Home from '../views/login/home';
import InsertUser from '../views/user/insert-user';
import SearchGrades from '../views/grades/search-grades';
import InsertGrades from '../views/grades/insert-grades';

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/insert-user" component={InsertUser} />
                <Route path="/search-grades" component={SearchGrades} />
                <Route path="/insert-grades/:id" component={InsertGrades} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;