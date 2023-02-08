import Home from "./Home";
import "../styles/Login.css";
import React, { useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  // ********states start**********

  let userEvent = ""; //initial dec null it changes its states
  let passEvent = "";

  //for username validation
  const [userValiddata, setuserValid] = useState(1);
  //for password validation
  const [passValiddata, setpassValid] = useState(1);

  //check username and pass start
  const email = useRef();
  const password = useRef();

  // check wrong pass
  const [failed, setFailed] = useState("");

  //store in localstorage
  const getemail = localStorage.getItem("emaildata");
  const getpass = localStorage.getItem("passdata");

  // ********states end**********

  //**********function start***********
  const navigate = useNavigate();

  //check username and pass start ***
  function formData(e) {
    e.preventDefault();
    // console.log(user, pass)

    //check pass
    if (
      email.current.value === "pranavwaykar@gmail.com" &&
      password.current.value === "mnbvcxz@321"
    ) {
      localStorage.setItem("emaildata", "pranavwaykar@gmail.com"); //to store in local storage
      localStorage.setItem("passdata", "mnbvcxz@321");
      navigate("/home");
    } else {
      console.log("wrong");
      setFailed("Wrong email/Password !");
    }
  }
  //check username and pass end

  // usename validation ***
  function Uservalid(event) {
    userEvent = event.target.value;

    if (userEvent.length < 5) {
      if (userEvent.length === 0) {
        setuserValid(1);
      } else {
        setuserValid(2);
      }
    } else {
      setuserValid(1);
    }
  }
  //username validation end

  //password validation  ***
  function Passvalid(event) {
    passEvent = event.target.value;

    if (passEvent.length < 8) {
      if (passEvent.length === 0) {
        setpassValid(1);
      } else {
        setpassValid(2);
      }
    } else {
      setpassValid(1);
    }
  }
  //password validation end

  //**********function end***********

  return (
    <>
      <section className="vh-100  main-section gradient-custom">
        <div className="container-fluid py-5 h-100 main-container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="formMain ">
                <h1
                  style={{ color: "white" }}
                  className="d-flex justify-content-center"
                >
                  LOGIN
                </h1>
                {getemail && getpass ? (
                  <Navigate to="/home" element={<Home />} replace />
                ) : (
                  <form className="formInner" onSubmit={formData}>
                    <div className="form-outline form-dark mb-4">
                      <div className="logo" />
                      <label
                        className="form-label text-white"
                        htmlFor="typeEmailX"
                      >
                        Username :
                      </label>
                      <input
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Enter username"
                        required
                        onChange={Uservalid}
                        ref={email}
                      />
                      {userValiddata === 1 ? (
                        ""
                      ) : (
                        <p style={{ color: "red" }}>
                          minimum 5 char required *
                        </p>
                      )}
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label
                        className="form-label text-white"
                        htmlFor="typePasswordX"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        required
                        onChange={Passvalid}
                        ref={password}
                      />
                      {passValiddata === 1 ? (
                        ""
                      ) : (
                        <ul style={{ color: "red", listStyle: "none" }}>
                          <li> Min 8 characters required.</li>
                        </ul>
                      )}
                    </div>

                    <p
                      style={{
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {failed}
                    </p>

                    <button
                      className="btn btn-primary btn-lg px-5 "
                      type="submit"
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#457",
                      }}
                    >
                      Login
                    </button>

                    {/* <GradientButton
                      type="submit"
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#274dac",
                      }}
                    >
                      Login
                    </GradientButton> */}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
