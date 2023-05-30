import React from "react";
import Login from "../Pages/Login/Login";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ComposeMail from "../Pages/Compose Mail/ComposeMail";
import Inbox from "../Pages/Inbox/Inbox";
import SendBox from "../Pages/SendBox/SendBox";
import MailDetails from "../Pages/MailDetails/MailDetails";

const MyRoutes = () => {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<Inbox />} />
          <Route path="/mail" element={<MailDetails />} />
          <Route path="/compose" element={<ComposeMail />} />
          <Route path="/sended" element={<SendBox />} />
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
