import React from 'react';

import NavbarItem from './navbar-item'
import AuthService from '../app/service/AuthService';

const logout = () => {
    window.location.reload()
    AuthService.removeAuthenticatedUser()
}

const isAuthenticatedUser = () => {
    return AuthService.isAuthenticatedUser()
}

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#/home" >Simple School</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarResponsive" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <NavbarItem render={isAuthenticatedUser()} href="#/insert-user" label="Users" />
                        <NavbarItem render={isAuthenticatedUser()} href="#/search-school" label="Schools" />
                        <NavbarItem render={isAuthenticatedUser()} href="#/search-grades" label="Grades" />
                        <NavbarItem render={isAuthenticatedUser()} onClick={logout} href="#/login" label="Logout" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar