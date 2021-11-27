import { Button } from "@material-ui/core";
import { useStateValue } from "context/context";
import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";
const Login = () => {
    const { login, loggedInUser } = useStateValue();

  console.log(loggedInUser);
  return (
    <div className="login">
      {/* <img className="login__logo" src={logo} alt="Classroom" /> */}
      <h1>Welcome to Simpl-e-Classrooom</h1>
      <Button variant="contained" color="default" onClick={()=>login()}>
        Login Now!
      </Button>
    </div>
  );
};

export default Login;