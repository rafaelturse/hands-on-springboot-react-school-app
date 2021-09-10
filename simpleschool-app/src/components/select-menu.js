import React from 'react';

function SelectMenu(props) {
    const options = props.list.map(
        option => {
            return (
                <option value={option.value}>{option.label}</option>
            )
        }
    )

    return (<select className="form-control" {...props}>{options}</select>)
}

export default SelectMenu