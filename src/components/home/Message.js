import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import classes from "../styles/home.module.css";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${classes.message} ${
        message.senderId === currentUser.uid && classes.owner
      }`}
    >
      <div className={classes.messageInfo}>
        <span>
          {message.senderId === currentUser.uid
            ? currentUser.displayName
            : data.user.displayName}
        </span>
      </div>
      <div className={classes.messageContent}>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
