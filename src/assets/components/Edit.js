import Patients from "../db/Patients.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Edit.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Edit() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [room, setRoom] = useState("");
  const [bill, setBill] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Patients.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Patients[index];
    a.Name = name;
    a.Contact = contact;
    a.Room = room;
    a.Bill = bill;

    history("/home");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setContact(localStorage.getItem("Contact"));
    setRoom(localStorage.getItem("Room"));
    setBill(localStorage.getItem("Bill"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <section className="main_heading " id="Patient-list">
        <div className="text-center">
          <h1
            id="contactus"
            className="display-3"
            style={{ marginTop: "50px" }}
          >
            Edit Details
          </h1>
          <hr className="w-25  mx-auto bg-dark" style={{ height: "3px" }} />

          <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
            <Form.Group className="mb-3" controlid="formName">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formContact">
              <Form.Control
                type="text"
                placeholder="Enter Contact"
                value={contact}
                required
                onChange={(e) => setContact(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formRoom">
              <Form.Control
                type="text"
                placeholder="Enter Room"
                value={room}
                required
                onChange={(e) => setRoom(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlid="formBill">
              <Form.Control
                type="text"
                placeholder="Enter Bill"
                value={bill}
                required
                onChange={(e) => setBill(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              style={{ color: "#FFFFFF", backgroundColor: "#457" }}
            >
              Update
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
}
export default Edit;
