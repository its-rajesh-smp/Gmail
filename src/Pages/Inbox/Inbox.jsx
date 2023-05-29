import React from "react";
import "./Inbox.css";
import TopBar from "../../Components/UI/Inbox/TopBar/TopBar";
import EmailContainer from "../../Components/Inbox/Email Container/EmailContainer";
import { useSelector } from "react-redux";

function Inbox(props) {
  const recivedMails = useSelector((state) => state.recivedMailSlice.recived);

  return (
    <div className=" Inbox-div removeHeader ">
      <TopBar />
      <EmailContainer mailArr={recivedMails} />
    </div>
  );
}

export default Inbox;
