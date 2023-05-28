import React from "react";
import Login from "../Pages/Login/Login";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ComposeMail from "../Pages/Compose Mail/ComposeMail";

const MyRoutes = () => {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<ComposeMail />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
        </>
      )}
    </Routes>
  );
};
export default MyRoutes;
