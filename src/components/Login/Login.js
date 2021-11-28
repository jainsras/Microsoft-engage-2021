import { Button } from "@material-ui/core";
import { Book } from "@mui/icons-material";
import { useStateValue } from "context/context";
import React from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";

import "./style.css";
const Login = () => {
    const { login, loggedInUser } = useStateValue();

  console.log(loggedInUser);
  return (
    <div className="login__container">
    <div className="login__image">
      <img className="login__logo" src={logo} alt="Classroom" />
    </div>
    <div className="login__side">
      <div className="login__box">
        <h1 id="welcome">Welcome to<span id="name"> Simpl-e-Classrooom</span></h1>
        <img className="book" src={book} id="book"/>
        <Button id="button" variant="contained" color="default" onClick={()=>login()}>
          Login Now!
        </Button>
      </div>
      
    </div>
    </div>
  );
};

export default Login;