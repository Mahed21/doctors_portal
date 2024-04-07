import React from 'react';

const DrugListRow = (props, index) => {

    const { drugName, groupName, reason, company, dosage, updatedAt } = props.data;

    return (
        <tr>
            <th scope="row">1</th>
            <td>{drugName} ({groupName})</td>
            <td>{company}</td>
            <td>{dosage}</td>
            <td>{reason}</td>
            <td>
                <button className="btn btn-primary me-1">Drug Profile</button>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
};

export default DrugListRow;