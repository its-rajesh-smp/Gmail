import React from "react";
import "./EmailContainer.css";
import Email from "../../UI/Inbox/Email/Email";

function EmailContainer(props) {
  return (
    <div className=" EmailContainer-div container ">
      {props.mailArr.map((mail) => {
        return <Email for={props.for} key={mail.id} data={mail} />;
      })}
    </div>
  );
}

export default EmailContainer;
