import React from 'react';
import { withRouter } from 'react-router-dom'

import GradesService from '../../app/service/gradesService'
import LocalStorageService from '../../app/service/localStorageService'

import * as messages from '../../components/toastr'
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
                    messages.warningMessage("No records found")
                }
            }).catch(error => {
                this.setState({ grades: [] })
                messages.warningMessage("No records found")
            })
    }

    edit = (id) => {

    }

    delete = (grades) => {
        this.service.deleteAction(grades.id)
        .then(response => {
            const i = this.state.grades
            const index = i.indexOf(grades)
            i.splice(i, 1)
            this.setState(i)

            messages.successMessage("Grades deleted")
        }).catch(error => {
            messages.errorMessage("It was not possible to delete")
        })
    }

    render() {
        const subjectOptions = this.service.setSubjectList()

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
                            <GradesTable 
                                list={this.state.grades} 
                                edit={this.edit}
                                delete={this.delete}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default SearchGrades;