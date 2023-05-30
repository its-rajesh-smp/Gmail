import React from "react";
import "./MailDetails.css";
import MailTopOperationBar from "../../Components/UI/Mail Details/Mail Top Operation Bar/MailTopOperationBar";
import WhichUser from "../../Components/UI/Mail Details/Which User/WhichUser";
import MailDescContainer from "../../Components/Mail Details/Mail Desc Container/MailDescContainer";
import MailSubject from "../../Components/UI/Mail Details/Mail Subject/MailSubject";
import MailDetailsBtnGroup from "../../Components/UI/Mail Details/Mail Details Btn Group/MailDetailsBtnGroup";

function MailDetails(props) {
  return (
    <div className=" MailDetails-div removeHeader ">
      <MailTopOperationBar />
      <WhichUser />
      <MailSubject />
      <MailDescContainer />
      <MailDetailsBtnGroup />
    </div>
  );
}

export default MailDetails;
