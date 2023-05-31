import React from "react";
import "./TopBar.css";
import { useSelector } from "react-redux";

function TopBar(props) {
  const totalMails = useSelector((state) => state.totalMailSlice);

  return (
    <div className=" TopBar-div container ">
      <div className="TopBar-div__left">
        <i className="bx bx-checkbox"></i>
        <i className="bx bx-refresh"></i>
        <i className="bx bx-dots-vertical-rounded"></i>
      </div>
      <div className="TopBar-div__right">
        <p>
          <span>{totalMails.read}</span> Read <span>{totalMails.unread}</span>{" "}
          Unread
        </p>
      </div>
    </div>
  );
}

export default TopBar;
