import React from 'react';

import { Button } from 'primereact/button';

function GradesTable(props) {
    const rows = props.list.map(i => {
        return (
            <tr key={i.id}>
                <td>{i.subject}</td>
                <td>{i.student}</td>
                <td>{i.school.name}</td>
                <td className="text-center">{i.grade1}</td>
                <td className="text-center">{i.grade2}</td>
                <td className="text-center">{i.grade3}</td>
                <td className="text-center">{i.grade4}</td>
                <td className="text-center">{(i.grade1 + i.grade2 + i.grade3 + i.grade4) / 4}</td>
                <td className="text-center">
                    <div className="d-flex justify-content-center">
                        <Button
                            className="p-button p-component p-button-rounded p-button-info p-button-text p-button-icon-only"
                            onClick={e => props.edit(i.id)}
                            icon="pi pi-user-edit"
                        />
                        <Button
                            className="p-button p-component p-button-rounded p-button-danger p-button-text p-button-icon-only"
                            onClick={e => props.delete(i)}
                            icon="pi pi-trash"
                        />
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <div class="table-responsive">
            <table className="table table-striped table-sm table-hover align-middle">
                <thead className="table-dark align-middle text-center">
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Student</th>
                        <th scope="col">School</th>
                        <th scope="col">Grade 1</th>
                        <th scope="col">Grade 2</th>
                        <th scope="col">Grade 3</th>
                        <th scope="col">Grade 4</th>
                        <th scope="col">Average</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default GradesTable