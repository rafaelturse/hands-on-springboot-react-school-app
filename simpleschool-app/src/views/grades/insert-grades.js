import React from 'react';
import { withRouter } from 'react-router-dom'

import GradeService from '../../app/service/gradesService'
import SchoolService from '../../app/service/schoolService'

import { errorMessage, successMessage } from '../../components/toastr'
import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/select-menu';

class InsertGrades extends React.Component {
    state = {
        school: "",
        schools: [],
        schoolOptions: []
    }

    constructor() {
        super();
        this.service = new GradeService();
        this.schoolService = new SchoolService();
    }

    schoolOptions() {
        const options = []

        options.push({ label: 'Select...', value: '' })

        const schools = this.state.schools.map(
            (school) => {
                options.push({ label: school.name, value: school.id })
            }
        )

        return options
    }

    getSchools = () => {
        this.schoolService.find()
            .then(response => {
                this.setState({ schools: response.data })
                this.setState({ schoolOptions: this.schoolOptions() })
                console.log(this.state.schoolOptions)
            })
    }

    componentDidMount() {
        this.getSchools()
    }

    render() {
        return (
            <Card title="Insert Grades">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-content">
                            <div className="mt-2">
                                <FormGroup label="School:" htmlFor="inputSchool">
                                    <SelectMenu
                                        id="inputSchool"
                                        list={this.state.schoolOptions}
                                        value={this.state.school}
                                        onChange={e => this.setState({ school: e.target.value })}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(InsertGrades)