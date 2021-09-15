import React from 'react';

import NavbarItem from './navbar-item'
import AuthService from '../app/service/AuthService';

const logout = () => {
    window.location.reload()
    AuthService.removeAuthenticatedUser()
    redirectLogin()
}

const isAuthenticatedUser = () => {
    return AuthService.isAuthenticatedUser()
}

const redirectLogin = () => {
    this.props.history.push('/login');
}

function Navbar() {    
    return (        
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" role="navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="#/home" >Simple School</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarResponsive" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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