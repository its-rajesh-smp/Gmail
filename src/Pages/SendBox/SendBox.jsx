import React from "react";
import "./SendBox.css";
import TopBar from "../../Components/UI/Inbox/TopBar/TopBar";
import EmailContainer from "../../Components/Inbox/Email Container/EmailContainer";
import { useSelector } from "react-redux";

function SendBox(props) {
  const sendedMails = useSelector((state) => state.sendedMailSlice.recived);

  return (
    <div className=" SendBox-div removeHeader">
      <TopBar />
      <EmailContainer for={"send"} mailArr={sendedMails} />
    </div>
  );
}

export default SendBox;
