import React from 'react';
import { withRouter } from 'react-router-dom'

import UserService from '../../app/service/userService'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/select-menu';
import { errorMessage, successMessage } from '../../components/toastr'

class SearchGrades extends React.Component {
    state = {
        school: "",
        student: "",
        subject: ""
    }

    render() {
        const subjectOptions = [
            { label: 'Select...', value: '' },
            { label: 'Philosophy', value: 0 },
            { label: 'Mathmatics', value: 1 },
            { label: 'Spanish', value: 2 },
            { label: 'English', value: 3 },
            { label: 'Chemical', value: 4 },
            { label: 'Physical', value: 5 },
            { label: 'Story', value: 6 },
            { label: 'Music', value: 7 },
            { label: 'Physical Education', value: 8 },
            { label: 'Sociology', value: 9 },
            { label: 'Geography', value: 10 },
            { label: 'Art', value: 11 }
        ]

        return (
            <Card title="Search Grades">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-content">
                            <div className="mt-2">
                                <FormGroup label="School:" htmlFor="inputSchool">
                                    <input
                                        id="inputSchool"
                                        className="form-control mt-1"
                                        name="school"
                                        value={this.state.school}
                                        onChange={e => this.setState({ name: e.target.value })}
                                        type="text"
                                    />
                                </FormGroup>
                            </div>
                            <div className="mt-2">
                                <FormGroup label="Student:" htmlFor="inputStudent">
                                    <input
                                        id="inputStudent"
                                        className="form-control mt-1"
                                        name="student"
                                        value={this.state.student}
                                        onChange={e => this.setState({ name: e.target.value })}
                                        type="text"
                                    />
                                </FormGroup>
                            </div>
                            <div className="mt-2">
                                <FormGroup label="Subject:" htmlFor="inputSubject">
                                    <SelectMenu list={subjectOptions} />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default SearchGrades;