import React from "react";
import "./Header.css";
import SearchBar from "../UI/Search Bar/SearchBar";

function Header(props) {
  return (
    <header className=" Header-div ">
      <i className="bx bxs-paper-plane logo"></i>
      <div className="navItems">
        <i className="bx bx-pencil"></i>
        <i className="bx bx-mail-send"></i>
        <i className="bx bx-star"></i>
        <i className="bx bx-user-circle"></i>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
