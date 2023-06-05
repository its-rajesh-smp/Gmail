import React from "react";
import "./Email.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../../../Store/Reducers/selectedMailReducer";

function Email(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  // On Click Navigate To MailDetails
  const onClickNavigate = () => {
    navigate(
      `/${myEmail}/${props.for ? props.for : "recived"}/${props.data.id}`
    );
  };

  // On Click Checkbox Select Mail
  const onCheckboxClick = () => {
    dispatch(setSelected(props.data.id));
  };
  return (
    <div className=" Email-div">
      <div
        style={{ backgroundColor: `${props.data.showDot && "red"}` }}
        className="status"
      ></div>

      <input onClick={onCheckboxClick} type="checkbox" name="" id="" />

      <i className="bx bx-star"></i>

      <p onClick={onClickNavigate} className="emailId">
        {props.for === "sended" ? props.data.to : props.data.from}
      </p>

      <p onClick={onClickNavigate}>{props.data.desc}</p>
    </div>
  );
}

export default Email;
