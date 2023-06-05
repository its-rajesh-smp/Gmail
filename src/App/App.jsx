import React, { useEffect } from "react";
import "./App.css";

import Layout from "../Layout/Layout";
import MyRoutes from "../Routes/MyRoutes";
import { useDispatch } from "react-redux";
import { fetchUser } from "../Store/Actions/authActions";

function App(props) {
  const dispatch = useDispatch();

  // FETCH USER
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className=" App-div ">
      <Layout />
      <MyRoutes />
    </div>
  );
}

export default App;
