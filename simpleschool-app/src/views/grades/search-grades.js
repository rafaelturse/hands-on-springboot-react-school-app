import React from 'react';
import { withRouter } from 'react-router-dom'

import GradesService from '../../app/service/gradesService'
import LocalStorageService from '../../app/service/localStorageService'

import { errorMessage, successMessage, warningMessage } from '../../components/toastr'
import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/select-menu';
import GradesTable from '../../components/grades/gradesTable';

class SearchGrades extends React.Component {
    state = {
        school: "",
        student: "",
        subject: "",
        grades: []
    }

    constructor() {
        super();
        this.service = new GradesService();
    }

    find = () => {
        const gradesFilter = {
            school: this.state.school,
            student: this.state.student,
            subject: this.state.subject,
            user: LocalStorageService.getItem('_logged_user').id
        }

        this.service.find(gradesFilter)
            .then(response => {
                this.setState({ grades: response.data })

                if (response.data.length == 0) {
                    warningMessage("No records found")
                }
            }).catch(error => {
                this.setState({ grades: [] })
                warningMessage("No records found")
            })
    }

    render() {
        const subjectOptions = [
            { label: 'Select...', value: '' },
            { label: 'Philosophy', value: 1 },
            { label: 'Mathmatics', value: 2 },
            { label: 'Spanish', value: 3 },
            { label: 'English', value: 4 },
            { label: 'Chemical', value: 5 },
            { label: 'Physical', value: 6 },
            { label: 'Story', value: 7 },
            { label: 'Music', value: 8 },
            { label: 'Physical Education', value: 9 },
            { label: 'Sociology', value: 10 },
            { label: 'Geography', value: 11 },
            { label: 'Art', value: 12 }
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
                                        onChange={e => this.setState({ school: e.target.value })}
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
                                        onChange={e => this.setState({ student: e.target.value })}
                                        type="text"
                                    />
                                </FormGroup>
                            </div>
                            <div className="mt-2">
                                <FormGroup label="Subject:" htmlFor="inputSubject">
                                    <SelectMenu
                                        id="inputSubject"
                                        list={subjectOptions}
                                        value={this.state.subject}
                                        onChange={e => this.setState({ subject: e.target.value })}
                                    />
                                </FormGroup>
                            </div>

                            <div className="col-lg-12 d-flex justify-content-end">
                                <button className="btn btn-success mt-3" onClick={this.insert}>Insert</button>
                                <button className="btn btn-info mt-3 mx-2" onClick={this.find}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <GradesTable list={this.state.grades}>

                            </GradesTable>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default SearchGrades;