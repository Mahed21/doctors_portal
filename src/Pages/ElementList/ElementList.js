import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import ElementListRow from "./ElementListRow";

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

const ElementList = () => {


  let navigate = useNavigate();
  const [elementName, setElementName] = useState("");
  const [reason, setReason] = useState("");
  const [position, setPosition] = useState("");
  const [rules, setRules] = useState("");

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
    const generatedId = `${elementName}${position}`;
    const elementDetails = {
      elementName: elementName,
      reason: reason,
      position: position,
      rules: rules,
      elementId: generatedId,
    };
    fetch(`http://localhost:5000/elementsDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(elementDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("New Element Added Successfully");
          closeModal();
          setAllElements((prevState) => [...prevState, elementDetails]);
        } else {
          alert(data.data);
        }
      });
  };

  const [allElements, setAllElements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/elementsDetails")
      .then((res) => res.json())
      .then((data) => {
        setAllElements(data.data);
      });
  }, []);



  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
        <div>
          <h4>Element List</h4>
        </div>
        <div>
          <div>
            <button onClick={openModal} className="btn btn-outline-success">Add New Element</button>
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
                  <th scope="col">Elements</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Rules</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allElements?.map((data, index) => (
                  <ElementListRow
                    data={data}
                    key={data._id}
                    index={index}
                  ></ElementListRow>
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
          <h4 className="mb-2 text-center">Add New Element</h4>
          <div className="w-96">
            <div className="form-group">
              <label htmlFor="elementName" className="mr-2">
                Element Name:
              </label>
              <input
                id="elementName"
                type="text"
                name="elementName"
                className="px-3 py-2 form-control"
                onChange={(e) => setElementName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason" className="mr-2">
                Reason:
              </label>
              <input
                id="reason"
                type="text"
                name="reason"
                className="px-3 py-2 form-control"
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="position" className="mr-2">
                Position:
              </label>
              <input
                id="position"
                type="text"
                name="position"
                className="px-3 py-2 form-control"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="rules" className="mr-2">
                Rules:
              </label>
              <input
                id="rules"
                type="text"
                name="rules"
                className="px-3 py-2 form-control"
                onChange={(e) => setRules(e.target.value)}
              />
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

export default ElementList;
