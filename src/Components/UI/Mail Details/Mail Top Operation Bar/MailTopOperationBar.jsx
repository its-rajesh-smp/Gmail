import React from "react";
import "./MailTopOperationBar.css";

function MailTopOperationBar(props) {
  return (
    <div className=" MailTopOperationBar-div container">
      <div className="MailTopOperationBar-div__left">
        <i class="bx bx-x"></i>
        <i class="bx bx-share-alt"></i>
        <i class="bx bx-envelope"></i>
      </div>
      <div className="MailTopOperationBar-div__right">
        <i class="bx bx-printer"></i>
      </div>
    </div>
  );
}

export default MailTopOperationBar;
