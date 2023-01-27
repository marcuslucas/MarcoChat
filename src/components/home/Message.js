import React from "react";
import classes from "../styles/home.module.css";

const Message = (props) => {
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
