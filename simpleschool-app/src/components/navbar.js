import React from 'react';

import NavbarItem from './navbar-item'

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="https://bootswatch.com/"
                    className="navbar-brand">Simple School</a>

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
                        <NavbarItem href="#/home" label="Home" />
                        <NavbarItem href="#/insert-user" label="Users" />
                        <NavbarItem href="" label="Schools" />
                        <NavbarItem href="#/search-grades" label="Grades" />
                        <NavbarItem href="#/login" label="Login" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar