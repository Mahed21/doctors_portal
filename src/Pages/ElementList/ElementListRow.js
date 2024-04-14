import React from 'react';
import { PiTrashFill } from "react-icons/pi";

const ElementListRow = (props, index) => {

    const { elementName, reason, rules, position, updatedAt, _id } = props.data;

    const deleteElement = (id) => {
        fetch(`http://localhost:5000/elementsDetails/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                if (data.status === "success") {
                    // afterUpdate();
                    alert("Successfully deleted");
                } else {
                    alert("problem occure to delete data");
                }
            });
    };

    return (
        <tr>
            <th scope="row">1</th>
            <td>{position} {elementName}</td>
            <td>{reason}</td>
            <td>{rules}</td>
            <td>
                <button data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Element" className="btn btn-danger" onClick={() => deleteElement(_id)}> <PiTrashFill /></button>
            </td>
        </tr>
    );
};

export default ElementListRow;