import React, { useEffect } from "react";
import "./SendBox.css";
import TopBar from "../../Components/UI/Inbox/TopBar/TopBar";
import EmailContainer from "../../Components/Inbox/Email Container/EmailContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchSendboxMailsAct } from "../../Store/Actions/userMailActions";

function SendBox(props) {
  const sendedMails = useSelector((state) => state.sendedMailSlice.sended);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSendboxMailsAct());
  }, []);

  return (
    <div className=" SendBox-div removeHeader">
      <TopBar />
      <EmailContainer for={"send"} mailArr={sendedMails} />
    </div>
  );
}

export default SendBox;
