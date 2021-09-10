import React from 'react';

import UserService from '../../app/service/userService'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import { errorMessage, successMessage } from '../../components/toastr'

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

    validate() {
        const messages = []

        if (!this.state.name) {
            messages.push("Name is required")
        }

        if (!this.state.email) {
            messages.push("Email is required")
        } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]/)) {
            messages.push("Enter a valid email")
        }

        if (!this.state.password || !this.state.passwordConfirm) {
            messages.push("Password fields are required")
        } else if (this.state.password !== this.state.passwordConfirm) {
            messages.push("Passwords do not match")
        }

        return messages;
    }

    insert = () => {
        const messages = this.validate()

        if (messages && messages.length > 0) {
            messages.forEach((message, i) => {
                errorMessage(message)
            })

            return false
        }

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.service.save(user)
            .then(response => {
                successMessage("Registered user")
                this.redirectHome()
            })
            .catch(error => {
                errorMessage(error.response.data)
            })
    }

    redirectLogin = () => {
        this.props.history.push('/login');
    }

    redirectHome = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <Card title="Insert User">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-content">
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
                                </FormGroup></div>

                            <div className="col-lg-12 d-flex justify-content-end">
                                <button className="btn btn-danger mt-3 mx-2" onClick={this.redirectLogin}>Cancel</button>
                                <button className="btn btn-success mt-3" onClick={this.insert}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default InsertUser;