import React from 'react';

import AuthService from '../../app/service/AuthService';

import UserService from '../../app/service/userService'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import * as m from '../../components/toastr'

class InsertUser extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    }

    constructor() {
        super();
        this.service = new UserService();
    }

    insert = () => {
        if (!this.service.validate(this.state)) {
            return false
        }
        
        this.service.save({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                m.successMessage("Registered user")
                this.service.redirectHome(this.props)
            })
            .catch(error => {
                m.errorMessage(error.response.data)
            })
    }

    redirectLoginOrHome = () => {
        this.service.redirectLoginOrHome(this.props, AuthService.isAuthenticatedUser())
    }

    render() {
        return (
            <Card title="Insert User">
                <div className="row">
                    <div className="mt-2">
                        <FormGroup label="Name: *" htmlFor="inputName">
                            <input
                                id="inputName"
                                className="form-control mt-1"
                                name="name"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })}
                                type="text"
                            />
                        </FormGroup>
                    </div>
                    <div className="mt-2">
                        <FormGroup label="Email: *" htmlFor="inputEmail">
                            <input
                                id="inputEmail"
                                className="form-control mt-1"
                                name="email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                                type="email"
                            />
                        </FormGroup>
                    </div>
                    <div className="mt-2">
                        <FormGroup label="Password: *" htmlFor="inputPassword">
                            <input
                                id="inputPassword"
                                className="form-control mt-1"
                                name="password"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                                type="password"
                            />
                        </FormGroup>
                    </div>
                    <div className="mt-2">
                        <FormGroup label="Password Confirm: *" htmlFor="inputPasswordConfirm">
                            <input
                                id="inputPasswordConfirm"
                                className="form-control mt-1"
                                name="passwordConfirm"
                                value={this.state.passwordConfirm}
                                onChange={e => this.setState({ passwordConfirm: e.target.value })}
                                type="password"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-end mt-3">
                        <button className="btn btn-danger mx-2" onClick={this.redirectLoginOrHome}>Cancel</button>
                        <button className="btn btn-success" onClick={this.insert}>Save</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default InsertUser;