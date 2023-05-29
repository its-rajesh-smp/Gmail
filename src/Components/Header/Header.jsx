import React from "react";
import "./Header.css";
import SearchBar from "../UI/Search Bar/SearchBar";
import { NavLink } from "react-router-dom";

function Header(props) {
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
      </div>

      <SearchBar />
    </header>
  );
}

export default Header;
