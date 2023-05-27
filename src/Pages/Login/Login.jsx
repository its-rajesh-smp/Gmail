import React from "react";
import "./Login.css";
import { TextField } from "@mui/material";

function Login(props) {
  return (
    <div className=" Login-div ">
      <div className=" Login-div__container">
        <h1>TempMail</h1>
        <h3>Login</h3>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            size="small"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            size="small"
            variant="outlined"
          />
        </div>
        <button>Login</button>
        <p>Create New Account</p>
      </div>
    </div>
  );
}

export default Login;
