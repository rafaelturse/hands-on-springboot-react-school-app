import React from 'react';

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';

import AuthService from '../app/service/AuthService'

import InsertGrades from '../views/grades/insert-grades'
import SearchGrades from '../views/grades/search-grades'
import UpdateGrades from '../views/grades/insert-grades'

import Home from '../views/login/home'
import Login from '../views/login/login'

import InsertSchool from '../views/school/insert-school'
import SearchSchool from '../views/school/search-school'
import UpdateSchool from '../views/school/insert-school'

import InsertUser from '../views/user/insert-user'

function AuthenticatedRoute({ component: Component, ...props }) {
    return (
        <Route {...props} render={(componentProps) => {
            if (isAuthenticatedUser()) {
                return (
                    <Component {...componentProps} />
                )
            } else {
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: componentProps.location }
                        }}
                    />
                )
            }
        }} 
        />
    )
}

const isAuthenticatedUser = () => {
    return AuthService.isAuthenticatedUser()
}

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <AuthenticatedRoute path="/search-grades" component={SearchGrades} />
                <AuthenticatedRoute path="/insert-grades/:id" component={UpdateGrades} />
                <AuthenticatedRoute path="/insert-grades" component={InsertGrades} />

                <AuthenticatedRoute path="/home" component={Home} />
                
                <Route path= {isAuthenticatedUser() ? "/home" : "/login" } component={Login} />

                <AuthenticatedRoute path="/search-school" component={SearchSchool} />
                <AuthenticatedRoute path="/insert-school/:id" component={UpdateSchool} />
                <AuthenticatedRoute path="/insert-school" component={InsertSchool} />

                <Route path="/insert-user" component={InsertUser} />
                <Route path="/" component={isAuthenticatedUser() ? Home : Login} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;