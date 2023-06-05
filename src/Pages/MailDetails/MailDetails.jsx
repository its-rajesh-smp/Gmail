import React, { useEffect, useState } from "react";
import "./MailDetails.css";
import MailTopOperationBar from "../../Components/UI/Mail Details/Mail Top Operation Bar/MailTopOperationBar";
import WhichUser from "../../Components/UI/Mail Details/Which User/WhichUser";
import MailDescContainer from "../../Components/Mail Details/Mail Desc Container/MailDescContainer";
import MailSubject from "../../Components/UI/Mail Details/Mail Subject/MailSubject";
import MailDetailsBtnGroup from "../../Components/UI/Mail Details/Mail Details Btn Group/MailDetailsBtnGroup";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { sendReadStatusAct } from "../../Store/Actions/recivedMailActions";

function MailDetails(props) {
  const param = useParams();
  const mailId = param.mailData;
  const user = param.email;
  const type = param.type;
  const mailData = useFetch(`${user}/mails/${type}/${mailId}`);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "recived") {
      dispatch(sendReadStatusAct(mailId));
    }
  }, []);

  return (
    mailData && (
      <div className=" MailDetails-div removeHeader ">
        <MailTopOperationBar data={mailData} />
        <WhichUser data={mailData} />
        <MailSubject data={mailData} />
        <MailDescContainer data={mailData} />
        <MailDetailsBtnGroup data={mailData} />
      </div>
    )
  );
}

export default MailDetails;
