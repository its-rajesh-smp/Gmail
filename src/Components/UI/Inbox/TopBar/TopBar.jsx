import React from "react";
import "./TopBar.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteMailAct } from "../../../../Store/Actions/userMailActions";

function TopBar(props) {
  const totalMails = useSelector((state) => state.totalMailSlice);
  const dispatch = useDispatch();

  // On Click Delete Mail btn
  const onDeleteBtnclick = () => {
    dispatch(deleteMailAct(props.path));
  };

  return (
    <div className=" TopBar-div container ">
      <div className="TopBar-div__left">
        <i className="bx bx-checkbox"></i>
        <i className="bx bx-refresh"></i>
        <i className="bx bx-dots-vertical-rounded"></i>
        <i onClick={onDeleteBtnclick} className="bx bx-message-square-x"></i>
      </div>
      {props.path !== "SENDED" && (
        <div className="TopBar-div__right">
          <p>
            <span>{totalMails.read}</span> Read <span>{totalMails.unread}</span>{" "}
            Unread
          </p>
        </div>
      )}
    </div>
  );
}

export default TopBar;
