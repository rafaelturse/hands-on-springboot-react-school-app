import React from 'react';
import { withRouter } from 'react-router-dom';

import UserService from '../../app/service/userService';
import LocalStorageService from '../../app/service/localStorageService'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import { errorMessage } from '../../components/toastr';

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

    signIn = async () => {
        this.service.authenticate({
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            LocalStorageService.setItem('_logged_user', response.data)
            this.redirectHome()
        }).catch(error => {
            errorMessage(error.response.data)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
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

                                            <button className="btn btn-success" onClick={this.signIn}>Sign In</button>
                                            <button className="btn btn-danger" onClick={this.redirectInsertUser}>Sign Up</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)