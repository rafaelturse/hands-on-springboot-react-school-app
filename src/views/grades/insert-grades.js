import React from 'react';
import { withRouter } from 'react-router-dom'

import GradeService from '../../app/service/gradesService'
import SchoolService from '../../app/service/schoolService'

import LocalStorageService from '../../app/service/localStorageService'

import * as m from '../../components/toastr'
import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/select-menu';

class InsertGrades extends React.Component {
    state = {
        id: '',
        school: '',
        schools: [],
        schoolOptions: [],
        user: '',
        student: '',
        subject: '',
        subjects: [],
        grade1: '',
        grade2: '',
        grade3: '',
        grade4: '',
        isUpdate: false
    }

    constructor() {
        super();
        this.service = new GradeService();
        this.schoolService = new SchoolService();
    }

    schoolOptions() {
        const options = []

        options.push({ label: 'Select...', value: '' })

        this.state.schools.map(
            (school) => {
                return options.push({ label: school.name, value: school.id })
            }
        )

        return options
    }

    getSchools = () => {
        this.schoolService.findAll()
            .then(response => {
                this.setState({ schools: response.data })
                this.setState({ schoolOptions: this.schoolOptions() })
            })
    }

    getSubjects = () => {
        this.setState({ subjects: this.service.setSubjectList() })
    }

    validate() {
        const messages = []

        if (!this.state.school) {
            messages.push("School is required")
        }

        if (!this.state.student) {
            messages.push("Student is required")
        }

        if (!this.state.subject) {
            messages.push("Subject is required")
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

        const grades = {
            user: this.state.user,
            school: this.state.school,
            student: this.state.student,
            subject: this.state.subject - 1,
            grade1: this.state.grade1,
            grade2: this.state.grade2,
            grade3: this.state.grade3,
            grade4: this.state.grade4
        }

        this.service.save(grades)
            .then(response => {
                m.successMessage("Registered grades")
                this.redirectSearchGrades()
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

        const grades = {
            id: this.state.id,
            user: this.state.user,
            school: this.state.school,
            student: this.state.student,
            subject: this.state.subject - 1,
            grade1: this.state.grade1,
            grade2: this.state.grade2,
            grade3: this.state.grade3,
            grade4: this.state.grade4
        }

        this.service.update(grades)
            .then(response => {
                m.successMessage("Updated grades")
                this.redirectSearchGrades()
            })
            .catch(error => {
                m.errorMessage(error.response.data)
            })
    }

    componentDidMount() {
        const params = this.props.match.params

        this.getSchools()
        this.getSubjects()
        this.setState({ user: LocalStorageService.getItem('_logged_user').id })

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

    redirectSearchGrades = () => {
        this.props.history.push('/search-grades');
    }

    render() {
        return (
            <Card title={this.state.isUpdate ? 'Update Grades' : 'Insert Grades'}>
                <div className="row">
                    <div className="col">
                        <FormGroup label="School: *" htmlFor="inputSchool">
                            <SelectMenu
                                id="inputSchool"
                                className="form-control mt-1"
                                list={this.state.schoolOptions}
                                value={this.state.school}
                                onChange={e => this.setState({ school: e.target.value })}
                            />
                        </FormGroup>
                    </div>
                    <div className="mt-2">
                        <FormGroup label="Student: *" htmlFor="inputStudent">
                            <input
                                id="inputStudent"
                                className="form-control mt-1"
                                name="student"
                                value={this.state.student}
                                onChange={e => this.setState({ student: e.target.value })}
                                type="text"
                            />
                        </FormGroup>
                    </div>
                    <div className="mt-2">
                        <FormGroup label="Subject: *" htmlFor="inputSubject">
                            <SelectMenu
                                id="inputSubject"
                                list={this.state.subjects}
                                value={this.state.subject}
                                onChange={e => this.setState({ subject: e.target.value })}
                            />
                        </FormGroup>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mt-2">
                            <FormGroup label="Grade 1:" htmlFor="inputGrade1">
                                <input
                                    id="inputGrade1"
                                    className="form-control mt-1"
                                    name="grade1"
                                    value={this.state.grade1}
                                    onChange={e => this.setState({ grade1: e.target.value })}
                                    type="text"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <FormGroup label="Grade 2:" htmlFor="inputGrade2">
                                <input
                                    id="inputGrade2"
                                    className="form-control mt-1"
                                    name="grade2"
                                    value={this.state.grade2}
                                    onChange={e => this.setState({ grade2: e.target.value })}
                                    type="text"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <FormGroup label="Grade 3:" htmlFor="inputGrade3">
                                <input
                                    id="inputGrade3"
                                    className="form-control mt-1"
                                    name="grade3"
                                    value={this.state.grade3}
                                    onChange={e => this.setState({ grade3: e.target.value })}
                                    type="text"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <FormGroup label="Grade 4:" htmlFor="inputGrade4">
                                <input
                                    id="inputGrade4"
                                    className="form-control mt-1"
                                    name="grade4"
                                    value={this.state.grade4}
                                    onChange={e => this.setState({ grade4: e.target.value })}
                                    type="text"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-end mt-3">
                            <button className="btn btn-danger mx-2" onClick={this.redirectSearchGrades}>Cancel</button>
                            {this.state.isUpdate ?
                                (
                                    <button className="btn btn-info" onClick={this.update}>Update</button>
                                ) : (
                                    <button className="btn btn-success" onClick={this.insert}>Save</button>
                                )}
                        </div>
                    </div >
                </div >
            </Card >
        )
    }
}

export default withRouter(InsertGrades)