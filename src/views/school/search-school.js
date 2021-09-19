import React from 'react';
import { Button } from 'primereact/button';

import SchoolService from '../../app/service/schoolService'

import * as messages from '../../components/toastr'
import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SchoolTable from '../../components/school/schoolTable';

import { ConfirmDialog } from 'primereact/confirmdialog';

class SearchSchools extends React.Component {
    state = {
        school: "",
        schools: [],

        showConfirmDialog: false,
        deleteItem: ''
    }

    constructor() {
        super();
        this.service = new SchoolService();
    }


    find = () => {
        this.service.find(this.state.school)
            .then(response => {
                this.setState({ schools: response.data })

                if (response.data.length === 0) {
                    messages.warningMessage("No records found")
                }
            }).catch(error => {
                this.setState({ schools: [] })
                messages.warningMessage("No records found")
            })
    }

    edit = (id) => {
        this.redirectUpdateSchool(id)
    }

    deleteAction = () => {
        this.service.deleteAction(this.state.deleteItem.id)
            .then(response => {
                const i = this.state.schools

                i.splice(i.indexOf(this.state.deleteItem), 1)

                this.setState({ schools: i })

                messages.successMessage("Schools deleted")
            })
    }

    deleteDialog = (schools) => {
        this.setState({
            showConfirmDialog: true,
            deleteItem: schools
        })
    }

    redirectUpdateSchool = (id) => {
        this.props.history.push(`/insert-school/${id}`);
    }

    redirectInsertSchool = () => {
        this.props.history.push('/insert-school');
    }

    render() {
        const exportPdf = () => {
            import('jspdf').then(jsPDF => {
                import('jspdf-autotable').then(() => {
                    const cols = [
                        { field: 'id', header: 'ID' },
                        { field: 'school', header: 'School' }
                    ];

                    const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

                    const options = []
                    this.state.schools.map((i) => {
                        return options.push({
                            id: i.id,
                            school: i.name
                        })
                    })

                    const doc = new jsPDF.default(0, 0);
                    doc.autoTable(exportColumns, options);
                    doc.save('schools.pdf');
                })
            })
        }

        const exportExcel = () => {
            import('xlsx').then(xlsx => {
                const worksheet = xlsx.utils.json_to_sheet(this.state.schools);
                const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                saveAsExcelFile(excelBuffer, 'schools');
            });
        }

        const saveAsExcelFile = (buffer, fileName) => {
            import('file-saver').then(FileSaver => {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], { type: EXCEL_TYPE });
                FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
            });
        }

        return (
            <Card title="Search Schools">
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
                <div className="col-lg-12 d-flex justify-content-end mt-3">
                    <button className="btn btn-success" onClick={this.redirectInsertSchool}>Insert</button>
                    <button className="btn btn-info mx-2" onClick={this.find}>Search</button>
                </div>

                {this.state.schools.length > 0 ? (
                    <div className="row mt-5">
                        <SchoolTable
                            id="table-schools"
                            list={this.state.schools}
                            edit={this.edit}
                            delete={this.deleteDialog}
                        />

                        <div className="d-flex justify-content-end mt-3">
                            <Button className="p-button-raised p-button-success p-button-rounded mx-2" icon="pi pi-file-excel" onClick={exportExcel} />
                            <Button className="p-button-raised p-button-danger p-button-rounded" icon="pi pi-file-pdf" onClick={exportPdf} />
                        </div>

                        <div>
                            <ConfirmDialog
                                visible={this.state.showConfirmDialog}
                                onHide={() => this.setState({ showConfirmDialog: false })}
                                message="Are you sure you want to proceed?"
                                header="Confirmation"
                                icon="pi pi-exclamation-triangle"
                                accept={this.deleteAction}
                            />
                        </div>
                    </div>
                ) : (<div />)
                }
            </Card>
        )
    }
}

export default SearchSchools;