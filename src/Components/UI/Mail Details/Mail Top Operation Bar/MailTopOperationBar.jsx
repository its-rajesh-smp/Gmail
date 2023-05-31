import React from "react";
import "./MailTopOperationBar.css";

function MailTopOperationBar(props) {
  return (
    <div className=" MailTopOperationBar-div container">
      <div className="MailTopOperationBar-div__left">
        <i className="bx bx-x"></i>
        <i className="bx bx-share-alt"></i>
        <i className="bx bx-envelope"></i>
      </div>
      <div className="MailTopOperationBar-div__right">
        <i className="bx bx-printer"></i>
      </div>
    </div>
  );
}

export default MailTopOperationBar;
