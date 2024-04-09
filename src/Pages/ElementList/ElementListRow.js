import React from 'react';

const ElementListRow = (props, index) => {

    const { elementName, reason, rules, position, updatedAt } = props.data;

    return (
        <tr>
            <th scope="row">1</th>
            <td>{position} {elementName}</td>
            <td>{reason}</td>
            <td>{rules}</td>
            <td>
                <button className="btn btn-primary me-1">Element Profile</button>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
};

export default ElementListRow;