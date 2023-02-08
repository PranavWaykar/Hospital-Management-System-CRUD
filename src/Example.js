import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import Employees from "./components/Employees.json";
import { v4 as uuid } from "uuid";


const Example =()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [room, setRoom] = useState("");
  const [bill, setBill] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = contact,
      c = room,
      d = bill;

    Employees.push({ id: uniqueId, Name: a, Contact: b, Room: c, Bill: d });

  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
            <Form.Group className="mb-3" controlID="formName">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlID="formContact">
              <Form.Control
                type="text"
                placeholder="Enter Contact"
                required
                onChange={(e) => setContact(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlID="formRoom">
              <Form.Control
                type="text"
                placeholder="Enter Room"
                required
                onChange={(e) => setRoom(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlID="formBill">
              <Form.Control
                type="text"
                placeholder="Enter Bill"
                required
                onChange={(e) => setBill(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              style={{ color: "#FFFFFF", backgroundColor: "#457" }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;