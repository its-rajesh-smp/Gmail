import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { sighUpUser } from "../../Store/Actions/authActions";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  // On Create New Account Click
  const onCreateNewAccBtnHandeler = () => {
    dispatch(sighUpUser({ email: email, password: password }));
  };

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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            size="small"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* <button>Login</button> */}
        <button onClick={onCreateNewAccBtnHandeler}>Create New Account</button>
        {/* <p>Create New Account</p> */}
        <p>Existing User Login</p>
      </div>
    </div>
  );
}

export default Login;
