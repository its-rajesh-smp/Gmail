import React from "react";
import "./Email.css";
import { useNavigate } from "react-router-dom";

function Email(props) {
  const navigate = useNavigate();
  // On Click Navigate To MailDetails
  const onClickNavigate = () => {
    navigate(`/mail/${JSON.stringify(props.data)}`);
  };
  return (
    <div onClick={onClickNavigate} className=" Email-div">
      <div
        style={{ backgroundColor: `${props.data.showDot && "red"}` }}
        className="status"
      ></div>

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
