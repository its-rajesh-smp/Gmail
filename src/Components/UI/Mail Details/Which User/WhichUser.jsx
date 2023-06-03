import React from "react";
import "./WhichUser.css";

function WhichUser(props) {
  return (
    <div className=" WhichUser-div container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt=""
      />
      <div>
        <p>{props.data.from}</p>
        <p>to me</p>
      </div>
    </div>
  );
}

export default WhichUser;
