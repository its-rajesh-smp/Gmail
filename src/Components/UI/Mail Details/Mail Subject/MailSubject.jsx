import React from "react";
import "./MailSubject.css";

function MailSubject(props) {
  return (
    <div className=" MailSubject-div container">
      <p>{props.data.subject}</p>
    </div>
  );
}

export default MailSubject;
