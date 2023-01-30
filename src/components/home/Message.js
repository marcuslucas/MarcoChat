import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import classes from "../styles/home.module.css";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  return (
    <div className={`${classes.message} ${classes.owner}`}>
      <div className={classes.messageInfo}>
        <span>Marcus</span>
      </div>
      <div className={classes.messageContent}>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Message;
