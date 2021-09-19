import React from 'react';

import { Button } from 'primereact/button';

function SchoolTable(props) {
    const rows = props.list.map(i => {
        return (
            <tr key={i.id}>
                <td>{i.name}</td>
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
                <thead className="thead-dark align-middle text-center">
                    <tr>
                        <th scope="col">School</th>
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

export default SchoolTable