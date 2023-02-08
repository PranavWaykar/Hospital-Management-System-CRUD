import "../styles/Home.css";
import { Fragment } from "react";
import { v4 as uuid } from "uuid";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import doctorDemo from "../videos/doctorDemo.mp4";
import Patients from "../db/Patients.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Home() {
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

    Patients.push({ id: uniqueId, Name: a, Contact: b, Room: c, Bill: d });
  };
  let history = useNavigate();

  const handleEdit = (id, name, contact, room, bill) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Room", room);
    localStorage.setItem("Bill", bill);
    localStorage.setItem("Id", id);
  };

  const getemail = localStorage.getItem("emaildata");

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this record?") === true) {
      var index = Patients.map(function (e) {
        return e.id;
      }).indexOf(id);

      Patients.splice(index, 1);
      alert("Record Deleted Successful!!");
    } else {
    }
    history("/home");
  };

  const handleClick = () => {
    localStorage.clear();

    // window.location.reload();
  };

  return (
    <Fragment>
      {/* navbar start */}

      <nav className="navbar navbar-expand-md navbar-light bg-dark bg-gradient sticky-lg-top ">
        <div className="container-fluid  ">
          {/* navbar brand img start */}
          <Link className="navbar-brand bg-imageFluid" to="/">
            <img
              style={{ height: "50px", width: "90%" }}
              src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
              alt=""
            />
          </Link>
          {/* navbar brand img end*/}

          {/* heading start */}
          <div className="nav-brand lead text-light">
            <h1 id="heading"> Hospital Management System </h1>
          </div>
          {/* heading end */}

          {/* toggle button start */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* toggle button end */}

          {/* style={{ width: "auto", margin: "auto", height: "auto " }} */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto f-right mb-0">
              <li className="nav-item m-auto f-right">
                <Link className="nav-link " aria-current="page">
                  {}
                </Link>
              </li>
              <li className="m-3">
                <h2 style={{ color: "white" }}>{getemail}</h2>
              </li>

              <li className="nav-item f-right m-auto">
                {/* <NavLink className="btn btn-outline-dark btn-info" to="/" onClick={handleClick} role="button">Logout</NavLink> */}
                <NavLink to="/">
                  <button
                    className="btn btn-danger btn-md  "
                    onClick={handleClick}
                    type="submit"
                  >
                    Logout
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* navbar end */}

      {/* Video part */}
      <div className="vid-container">
        <video src={doctorDemo} autoPlay loop muted />
      </div>
      <div className="vid-content">
        <h2>We Are</h2>
        <h1>THE BEST IN TOWN</h1>
      </div>
      {/* Video Part Ends */}
      {/* Placeholders Card starts */}

      <section className="heading" id="Patient-list">
        <div className="text-center">
          <h1
            id="contactus"
            className="display-3"
            style={{ marginTop: "50px" }}
          >
            Doctors
          </h1>
          <hr className="w-25  mx-auto bg-dark" style={{ height: "3px" }} />
        </div>
      </section>

      <section class="container container-fluid">
        <div class="row">
          <div class="col-xl-4 card1">
            <div class="card">
              <img
                src="https://a.mktgcdn.com/p/8jkhPn2mbM7YT5-FNENu4O_umZAHx0TfqKYXH-3k55k/1300x1300.jpg"
                class="card-img-top"
                alt="Dr. Lara Anderson"
              />

              <div class="card-body ">
                <h5 class="card-title">Dr. Lara Anderson</h5>
                <p class="card-text">
                  Dr. Lara Anderson graduated from Johns Hopkins University with
                  honors and received her training in Obstetrics and Gynecology
                  at the University of Chicago Medical Center. And have helped
                  over 227+ people across Asia.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>

          <div class="col-xl-4 card2">
            <div class="card">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                class="card-img-top"
                alt="Dr. Juan Alzate"
              />

              <div class="card-body">
                <h5 class="card-title">Dr. Juan Alzate</h5>
                <p class="card-text">
                  I Dr. Juan Alzate, a Board Certified Neurosurgeon, graduated
                  with honors from the Universidad Del Valle Medical School in
                  Colombia and received his training in Neurosurgery at the
                  Albert Einstein College of Medicine in New York City.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>

          <div class="col-xl-4 card3">
            <div class="card">
              <img
                src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                class="card-img-top"
                alt="Dr. Anna Stuart"
              />

              <div class="card-body">
                <h5 class="card-title">Dr. Anna Stuart</h5>
                <p class="card-text">
                  Dr. Anna Stuart Bagan graduated from Georgetown University and
                  completed her training in Ophthalmology at Rush University
                  Medical Center. Even have worked in Hirslanden Klinik Im Park
                  for 7 years. And have cured over 117+ people so far.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholders Card ends */}

      {/* Hero Content Starts */}

      <section className="hero-section" id="Patient-list">
        <div className="text-center">
          <h1
            id="contactus"
            className="display-3"
            style={{ marginTop: "50px" }}
          >
            Patients
          </h1>
          <hr className="w-25  mx-auto bg-dark" style={{ height: "3px" }} />

          {/* Table Starts */}

          <div style={{ margin: "10rem" }}>
            <Table striped bordered hover size="sm">
              <thead style={{ color: "#FFFFFF", backgroundColor: "#457" }}>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Room</th>
                  <th>Bill</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody style={{ color: "#000000", backgroundColor: "#ffffff" }}>
                {Patients && Patients.length > 0
                  ? Patients.map((item) => {
                      return (
                        <tr>
                          <td>{item.Name}</td>
                          <td>{item.Contact}</td>
                          <td>{item.Room}</td>
                          <td>{item.Bill}</td>
                          <td>
                            <Link to={"/edit "}>
                              <Button
                                onClick={() =>
                                  handleEdit(
                                    item.id,
                                    item.Name,
                                    item.Contact,
                                    item.Room,
                                    item.Bill
                                  )
                                }
                                style={{
                                  color: "#FFFFFF",
                                  backgroundColor: "#457",
                                }}
                              >
                                Edit
                              </Button>
                            </Link>
                            &nbsp;
                            <Button
                              onClick={() => handleDelete(item.id)}
                              style={{
                                color: "#FFFFFF",
                                backgroundColor: "#3E3A3A",
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  : "No data available"}
              </tbody>
            </Table>
            <br></br>
            {/* <Link className="gap-2" to={"/add"}>
              <Button
                size="lg"
                style={{ color: "#FFFFFF", backgroundColor: "#457" }}
              >
                Add
              </Button>
            </Link> */}

            <Button
              variant="primary"
              onClick={handleShow}
              style={{ color: "#FFFFFF", backgroundColor: "#457" }}
            >
              Add Patient
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Add Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="d-grid gap-2">
                  <Form.Group className="mb-3" controlid="formName">
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlid="formContact">
                    <Form.Control
                      type="number"
                      placeholder="Enter Contact"
                      required
                      onChange={(e) => setContact(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlid="formRoom">
                    <Form.Control
                      type="number"
                      placeholder="Enter Room"
                      required
                      onChange={(e) => setRoom(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlid="formBill">
                    <Form.Control
                      type="number"
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
                <Button
                  style={{ color: "#FFFFFF", backgroundColor: "#0c77c2" }}
                  onClick={handleClose}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </section>

      {/* Hero Content Ends */}
    </Fragment>
  );
}

export default Home;
