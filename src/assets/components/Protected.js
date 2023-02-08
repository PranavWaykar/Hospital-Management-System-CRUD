import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(props);
    let login = localStorage.getItem("emaildata");
    if (!login) {
      navigate("/");
    }
  });

  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
