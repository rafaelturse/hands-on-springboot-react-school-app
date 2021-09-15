import React from 'react';

import { withRouter } from 'react-router-dom';

import { AuthContext } from '../../main/AuthenticationProvider'

import LocalStorageService from '../../app/service/localStorageService'

import UserService from '../../app/service/userService';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import * as m from '../../components/toastr'

import '../../css/general/page.css'

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    constructor() {
        super();
        this.service = new UserService();
    }

    redirectHome = () => {
        this.props.history.push('/home');
    }

    redirectInsertUser = () => {
        this.props.history.push('/insert-user');
    }

    validate() {
        const messages = []

        if (!this.state.email) {
            messages.push("Email is required")
        }

        if (!this.state.password) {
            messages.push("Password is required")
        }

        return messages;
    }

    signIn = async () => {
        const messages = this.validate()

        if (messages && messages.length > 0) {
            messages.forEach((message, i) => {
                m.errorMessage(message)
            })

            return false
        }

        this.service.authenticate({
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            //this.context.sessionStart(response.data)
            LocalStorageService.setItem('_logged_user', response.data)
            this.redirectHome()

            window.location.reload();
        }).catch(error => {
            m.errorMessage(error.response.data)
        })
    }

    render() {
        return (
            <div className="container mt-navbar">
                <div className="row">
                    <div className="
                        col-9 col-sm-9 col-md-6 col-lg-6 col-xl-6 col-xxl-3 
                        position-absolute start-50 translate-middle"
                    >
                        <Card title="Login">
                            <div className="row">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="Email: *" htmlFor="inputEmail">
                                            <input
                                                id="inputEmail"
                                                className="form-control"
                                                name="email"
                                                value={this.state.email}
                                                onChange={e => this.setState({ email: e.target.value })}
                                                type="email"
                                            />
                                        </FormGroup>
                                        <FormGroup label="Password: *" htmlFor="inputPassword">
                                            <input
                                                id="inputPassword"
                                                className="form-control"
                                                name="password"
                                                value={this.state.password}
                                                onChange={e => this.setState({ password: e.target.value })}
                                                type="password"
                                            />
                                        </FormGroup>

                                        <div className="d-flex justify-content-end mt-3">
                                            <button className="btn btn-info  mx-2" onClick={this.redirectInsertUser}>Sign Up</button>
                                            <button className="btn btn-success" onClick={this.signIn}>Sign In</button>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

Login.contextType = AuthContext

export default withRouter(Login)