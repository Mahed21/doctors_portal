import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import DrugListRow from "./DrugListRow";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const DrugList = () => {

  let navigate = useNavigate();
  const [drugName, setDrugName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [reason, setReason] = useState("");
  const [company, setCompany] = useState("");
  const [dosage, setDosage] = useState("");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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

  const DrugInfo = (e) => {
    e.preventDefault();
    const generatedId = `${drugName}${company}${groupName}`;
    const drugDetails = {
      drugName: drugName,
      groupName: groupName,
      reason: reason,
      company: company,
      dosage: dosage,
      drugId: generatedId,
    };
    fetch(`http://localhost:5000/drugsDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(drugDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("New Patient Added Successfully");
          navigate("/drugList");
        } else {
          alert(data.data);
        }
      });
  };


  const [allDrugs, setAllDrugs] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/drugsDetails")
      .then((res) => res.json())
      .then((data) => {
        setAllDrugs(data.data);
      });
  }, []);


  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
        <div>
          <h4> Drug List</h4>
        </div>
        <div>
          <div>
            <button onClick={openModal} className="btn btn-primary btn-success">Add New Drug</button>
          </div>
        </div>
      </div>
      <div>
        <div className="container home_page mt-5 d-flex justify-content-center">
          <div>
            <table className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Drug</th>
                  <th scope="col">Company</th>
                  <th scope="col">Dosage</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allDrugs?.map((data, index) => (
                  <DrugListRow data={data} key={data._id} index={index}></DrugListRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={DrugInfo}>

          <h4 className="mb-2 text-center">Add New Drug</h4>
          <div className='w-96'>

            <div className="form-group">
              <label htmlFor="drugName" className='mr-2'>Drug Name:</label>
              <input id="drugName" type="text" name='drugName' className="px-3 py-2 form-control" onChange={(e) => setDrugName(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="groupName" className='mr-2'>Group Name:</label>
              <input id="groupName" type="text" name='groupName' className="px-3 py-2 form-control" onChange={(e) => setGroupName(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="reason" className='mr-2'>Reason:</label>
              <input id="reason" type="text" name='reason' className="px-3 py-2 form-control" onChange={(e) => setReason(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="company" className='mr-2'>Company Name:</label>
              <input id="company" type="text" name='company' className="px-3 py-2 form-control" onChange={(e) => setCompany(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="dosage" className='mr-2'>Dosage:</label>
              <input id="dosage" type="text" name='dosage' className="px-3 py-2 form-control" onChange={(e) => setDosage(e.target.value)} />
            </div>

          </div>

          <br />

          <div className="d-flex mt-1">
            <input type="submit" value="Add" className="btn btn-success me-2" />
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>

        </form>
      </Modal>
    </div>
  );
};

export default DrugList;
