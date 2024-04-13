import React from 'react';

const DrugListRow = (props, index) => {

    const { drugName, groupName, reason, company, dosage, updatedAt, _id } = props.data;

    const deleteDrug = (id) => {
        fetch(`http://localhost:5000/drugsDetails/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                if (data.status === "success") {
                    // afterUpdate();
                    alert("Successfully deleted");
                } else {
                    alert("Problem occure while deleting data");
                }
            });
    };

    return (
        <tr>
            <th scope="row">1</th>
            <td>{drugName} ({groupName})</td>
            <td>{company}</td>
            <td>{dosage}</td>
            <td>{reason}</td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteDrug(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default DrugListRow;