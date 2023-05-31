import React from "react";
import "./MailDescContainer.css";

function MailDescContainer(props) {
  return (
    <div className=" MailDescContainer-div container ">{props.data.desc}</div>
  );
}

export default MailDescContainer;
