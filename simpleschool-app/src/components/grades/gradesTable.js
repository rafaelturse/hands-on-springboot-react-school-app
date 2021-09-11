import React from 'react';

function GradesTable(props) {
    const rows = props.list.map(i => {
        return (
            <tr key={i.id}>
                <td>{i.subject}</td>
                <td>{i.student.name}</td>
                <td>{i.school.name}</td>
                <td>{i.grade1}</td>
                <td>{i.grade2}</td>
                <td>{i.grade3}</td>
                <td>{i.grade4}</td>
                <td>
                    <div className="d-flex justify-content-center">
                        <button 
                            className="btn btn-info"
                            onClick={e => props.edit(i.id)}>
                            U
                        </button>
                        <button 
                            className="btn btn-danger mx-2"
                            onClick={e => props.delete(i)}>
                            X
                        </button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Student</th>
                    <th scope="col">School</th>
                    <th scope="col">Grade 1</th>
                    <th scope="col">Grade 2</th>
                    <th scope="col">Grade 3</th>
                    <th scope="col">Grade 4</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default GradesTable