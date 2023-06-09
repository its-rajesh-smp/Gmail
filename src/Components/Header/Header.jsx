import React from "react";
import "./Header.css";
import SearchBar from "../UI/Search Bar/SearchBar";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Store/Reducers/authReducer";

function Header(props) {
  const dispatch = useDispatch();

  // On Click Logout
  const onClickLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className=" Header-div ">
      <NavLink to={"/"}>
        <i className="bx bxs-paper-plane logo"></i>
      </NavLink>

      <div className="navItems">
        <NavLink to={"/compose"}>
          <i className="bx bx-pencil"></i>
        </NavLink>

        <NavLink to={"/sended"}>
          <i className="bx bx-mail-send"></i>
        </NavLink>

        <i className="bx bx-star"></i>

        <i className="bx bx-user-circle"></i>

        <i onClick={onClickLogout} className="bx bx-log-out"></i>
      </div>

      <SearchBar />
    </header>
  );
}

export default Header;
