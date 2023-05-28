import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser, sighUpUser } from "../../Store/Actions/authActions";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const [isLogin, setIslogin] = useState(true);
  // On Create New Account Click
  const onCreateNewAccBtnHandeler = () => {
    dispatch(sighUpUser({ email: email, password: password }));
  };

  // OnClick Chage To Create New Acc
  const onClickSwitchLogin = () => {
    setIslogin((p) => !p);
  };

  // On Click Login Btn
  const onLoginBtnClick = () => {
    dispatch(loginUser({ email: email, password: password }));
  };

  return (
    <div className=" Login-div ">
      <div className=" Login-div__container">
        <h1>TempMail</h1>
        {isLogin ? <h3>Login</h3> : <h3>Create New Account</h3>}
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
        {isLogin ? (
          <>
            <button onClick={onLoginBtnClick}>Login</button>
            <p onClick={onClickSwitchLogin}>Create New Account</p>
          </>
        ) : (
          <>
            <button onClick={onCreateNewAccBtnHandeler}>
              Create New Account
            </button>
            <p onClick={onClickSwitchLogin}>Existing User Login</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
