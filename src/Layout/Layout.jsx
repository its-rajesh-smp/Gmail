import React from "react";
import Header from "../Components/Header/Header";
import { useSelector } from "react-redux";
const Layout = () => {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  return <>{isAuth && <Header />}</>;
};

export default Layout;
