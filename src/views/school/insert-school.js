import React from 'react';
import { withRouter } from 'react-router-dom'

import SchoolService from '../../app/service/schoolService'

import * as m from '../../components/toastr'
import Card from '../../components/card';
import FormGroup from '../../components/form-group';

class InsertSchool extends React.Component {
    state = {
        id: '',
        school: '',
        isUpdate: false
    }

    constructor() {
        super();
        this.service = new SchoolService();
    }

    validate() {
        const messages = []

        if (!this.state.school) {
            messages.push("School is required")
        }

        return messages;
    }

    insert = () => {
        const messages = this.validate()

        if (messages && messages.length > 0) {
            messages.forEach((message, i) => {
                m.errorMessage(message)
            })

            return false
        }

        this.service.save({school: this.state.school})
            .then(response => {
                m.successMessage("Registered school")
                this.redirectSearchSchool()
            })
            .catch(error => {
                m.errorMessage(error.response.data)
            })
    }

    update = () => {
        const messages = this.validate()

        if (messages && messages.length > 0) {
            messages.forEach((message, i) => {
                m.errorMessage(message)
            })

            return false
        }

        const schoolUpdate = {
            id: this.state.id,
            school: this.state.school,
        }

        this.service.update(schoolUpdate)
            .then(response => {
                m.successMessage("Updated school")
                this.redirectSearchSchool()
            })
            .catch(error => {
                m.errorMessage(error.response.data)
            })
    }

    componentDidMount() {
        const params = this.props.match.params

        if (params.id) {
            this.service.findById(params.id)
                .then(response => {
                    this.setState({ ...response.data, isUpdate: true })
                })
                .catch(error => {
                    m.errorMessage(error.response.data)
                })
        }
    }

    redirectSearchSchool = () => {
        this.props.history.push('/search-school');
    }

    render() {
        return (
            <Card title={this.state.isUpdate ? 'Update School' : 'Insert School'}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-content">
                            <div className="mt-2">
                                <FormGroup label="School: *" htmlFor="inputSchool">
                                    <input
                                        id="inputSchool"
                                        className="form-control mt-1"
                                        name="school"
                                        value={this.state.school}
                                        onChange={e => this.setState({ school: e.target.value })}
                                        type="text"
                                    />
                                </FormGroup>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-end mt-3">
                                    <button className="btn btn-danger mx-2" onClick={this.redirectSearchSchool}>Cancel</button>
                                    {this.state.isUpdate ?
                                        (
                                            <button className="btn btn-info" onClick={this.update}>Update</button>
                                        ) : (
                                            <button className="btn btn-success" onClick={this.insert}>Save</button>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </Card >
        )
    }
}

export default withRouter(InsertSchool)