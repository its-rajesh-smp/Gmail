import React from "react";
import "./Email.css";

function Email(props) {
  return (
    <div className=" Email-div">
      <div className="status"></div>
      <input type="checkbox" name="" id="" />

      <i className="bx bx-star"></i>

      <p className="emailId">
        {props.for === "send" ? props.data.to : props.data.from}
      </p>

      <p>{props.data.desc}</p>
    </div>
  );
}

export default Email;
