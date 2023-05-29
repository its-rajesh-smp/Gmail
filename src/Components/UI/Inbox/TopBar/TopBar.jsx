import React from "react";
import "./TopBar.css";

function TopBar(props) {
  return (
    <div className=" TopBar-div container ">
      <i className="bx bx-checkbox"></i>
      <i className="bx bx-refresh"></i>
      <i className="bx bx-dots-vertical-rounded"></i>
    </div>
  );
}

export default TopBar;
