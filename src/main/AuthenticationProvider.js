import React from 'react'

import AuthService from '../app/service/AuthService';

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

const AuthProvider = AuthContext.Provider

class AuthenticationProvider extends React.Component {
    state = {
        authenticatedUser: null,
        isAuthenticated: false
    }

    sessionStart = (user) => {
        console.log(user)

        AuthService.login(user)
        this.setState({
            authenticatedUser: user,
            isAuthenticated: true
        })
    }

    sessionEnd = (user) => {
        AuthService.removeAuthenticatedUser(user)
        this.setState({
            authenticatedUser: null,
            isAuthenticated: false
        })
    }

    render() {
        const context = {
            authenticatedUser: this.state.authenticatedUser,
            isAuthenticated: this.state.isAuthenticated,
            sessionStart: this.isAuthenticated,
            sessionEnd: this.isAuthenticated
        }

        return (
            <AuthProvider value={context}>
                {this.props.children}
            </AuthProvider>
        )
    }
}

export default AuthenticationProvider