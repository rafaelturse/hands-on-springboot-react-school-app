import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import InsertGrades from '../views/grades/insert-grades';
import SearchGrades from '../views/grades/search-grades';
import UpdateGrades from '../views/grades/insert-grades';

import Home from '../views/login/home';

import Login from '../views/login/login';

import InsertSchool from '../views/school/insert-school';
import SearchSchool from '../views/school/search-school';
import UpdateSchool from '../views/school/insert-school';

import InsertUser from '../views/user/insert-user';

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/search-grades" component={SearchGrades} />
                <Route path="/insert-grades/:id" component={UpdateGrades} />
                <Route path="/insert-grades" component={InsertGrades} />

                <Route path="/home" component={Home} />
                
                <Route path="/login" component={Login} />

                <Route path="/search-school" component={SearchSchool} />
                <Route path="/insert-school/:id" component={UpdateSchool} />
                <Route path="/insert-school" component={InsertSchool} />

                <Route path="/insert-user" component={InsertUser} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;