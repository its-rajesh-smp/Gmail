import React, { useRef, useState } from "react";
import "./ComposeMail.css";
import { useDispatch } from "react-redux";
import { sendMailToUser } from "../../Store/Actions/userMailActions";

function ComposeMail(props) {
  const [mailTo, setMailTo] = useState("");
  const [subject, setSubject] = useState("");
  const descRef = useRef();

  const dispatch = useDispatch();
  const onClickSendMailHandeler = () => {
    dispatch(sendMailToUser(mailTo, subject, descRef.current.textContent));
  };

  return (
    <div className=" ComposeMail-div removeHeader">
      <div className="ComposeMail-div__container container">
        <div className="mailTo__div">
          <i className="bx bxs-user-circle"></i>
          <input
            onChange={(e) => {
              setMailTo(e.target.value);
            }}
            value={mailTo}
            type="text"
            placeholder="Mail To"
            name=""
            id=""
          />
        </div>

        <div className="mailSubject__div">
          <i className="bx bxs-detail"></i>
          <input
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            value={subject}
            type="text"
            placeholder="Subject"
            name=""
            id=""
          />
        </div>

        <div className="textArea__div">
          <i className="bx bx-paperclip"></i>
          <div
            ref={descRef}
            contentEditable={true}
            className="emailPaper"
          ></div>
        </div>

        <button onClick={onClickSendMailHandeler} className="sendMailBtn">
          <i className="bx bx-paper-plane"></i>
          SEND
        </button>
      </div>
    </div>
  );
}

export default ComposeMail;
