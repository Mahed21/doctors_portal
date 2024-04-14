import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const HomeRows = (props, index) => {
  const { gender, email, name, number, patientId, updatedAt, _id, age } =
    props.data;
  const { afterUpdate } = props;
  const [singlePatientInfo, setSinglePatientInfo] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const deletePatient = (id) => {
    fetch(`http://localhost:5000/patientDetails/${id}`, {
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
  const viewProfile = (id) => {
    fetch(`http://localhost:5000/patientDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setSinglePatientInfo(data.data);
          openModal();
        } else {
          closeModal();
        }
      });
  };
  const addPrescription = (_id, name, age, gender, number) => {
    //console.log(_id, name, age, gender, number);
    navigate("/addPrescription", {
      state: { name: name, age: age, gender: gender, number: number },
    });
  };

  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{updatedAt}</td>
      <td>
        <button
          className="btn btn-primary me-1"
          onClick={() => viewProfile(_id)}
        >
          View Profile
        </button>
        <button className="btn btn-success me-1">Previous Prescription</button>
        <button
          className="btn btn-info me-1"
          onClick={() => addPrescription(_id, name, age, gender, number)}
        >
          Add Prescription
        </button>
        <button className="btn btn-danger" onClick={() => deletePatient(_id)}>
          Delete
        </button>
      </td>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {singlePatientInfo.length > 0 && (
          <div className="patient-info-container">
            <div className="form-group mb-3">
              <label htmlFor="name">Patient Name:</label>
              <input
                className="form-control"
                id="exampleInputName1"
                type="text"
                value={singlePatientInfo[0].name}
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="number">Number:</label>
              <input
                className="form-control"
                id="exampleInputNumber1"
                type="text"
                value={singlePatientInfo[0].number}
                readOnly
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="gender">Gender:</label>
              <input
                className="form-control"
                id="exampleInputGender1"
                type="text"
                value={singlePatientInfo[0].gender}
                readOnly
              />
            </div>
          </div>
        )}
      </Modal>
    </tr>
  );
};

export default HomeRows;
