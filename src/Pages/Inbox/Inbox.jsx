import React, { useEffect } from "react";
import "./Inbox.css";
import TopBar from "../../Components/UI/Inbox/TopBar/TopBar";
import EmailContainer from "../../Components/Inbox/Email Container/EmailContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecivedMailsAct } from "../../Store/Actions/userMailActions";
import { unselectAll } from "../../Store/Reducers/selectedMailReducer";

function Inbox(props) {
  const dispatch = useDispatch();
  // Fetch Inbox Mails
  useEffect(() => {
    dispatch(fetchRecivedMailsAct());
    return () => {
      dispatch(unselectAll());
    };
  }, []);

  const recivedMails = useSelector((state) => state.recivedMailSlice.recived);
  return (
    <div className=" Inbox-div removeHeader ">
      <TopBar path="RECIVED" />
      <EmailContainer mailArr={recivedMails} />
    </div>
  );
}

export default Inbox;
