import React from "react";
import Message from "./Message";
import classes from "../styles/home.module.css";

const Messages = (props) => {
  return (
    <div className={classes.messages}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
