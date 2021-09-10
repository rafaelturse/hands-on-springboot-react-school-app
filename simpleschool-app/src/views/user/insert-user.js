import React from 'react';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';

class InsertUser extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    }

    insert = () => {

    }

    redirectLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <Card title="Insert User">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-content">
                            <FormGroup label="Name: *" htmlFor="inputName">
                                <input
                                    id="inputName"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value })}
                                    type="text"
                                />
                            </FormGroup>
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
                            <FormGroup label="Password Confirm: *" htmlFor="inputPasswordConfirm">
                                <input
                                    id="inputPasswordConfirm"
                                    className="form-control"
                                    name="passwordConfirm"
                                    value={this.state.passwordConfirm}
                                    onChange={e => this.setState({ passwordConfirm: e.target.value })}
                                    type="password"
                                />
                            </FormGroup>

                            <button className="btn btn-success" onClick={this.signIn}>Save</button>
                            <button className="btn btn-danger" onClick={this.redirectLogin}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default InsertUser;