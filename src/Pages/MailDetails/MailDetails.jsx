import React, { useEffect } from "react";
import "./MailDetails.css";
import MailTopOperationBar from "../../Components/UI/Mail Details/Mail Top Operation Bar/MailTopOperationBar";
import WhichUser from "../../Components/UI/Mail Details/Which User/WhichUser";
import MailDescContainer from "../../Components/Mail Details/Mail Desc Container/MailDescContainer";
import MailSubject from "../../Components/UI/Mail Details/Mail Subject/MailSubject";
import MailDetailsBtnGroup from "../../Components/UI/Mail Details/Mail Details Btn Group/MailDetailsBtnGroup";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendReadStatusAct } from "../../Store/Actions/recivedMailActions";

function MailDetails(props) {
  const param = useParams();
  const data = JSON.parse(param.mailData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendReadStatusAct(data.id));
  }, []);

  return (
    <div className=" MailDetails-div removeHeader ">
      <MailTopOperationBar data={data} />
      <WhichUser data={data} />
      <MailSubject data={data} />
      <MailDescContainer data={data} />
      <MailDetailsBtnGroup data={data} />
    </div>
  );
}

export default MailDetails;
