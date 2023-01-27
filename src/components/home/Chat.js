import React from "react";
import classes from "../styles/home.module.css";
import Input from "./Input";
import Messages from "./Messages";

const Chat = (props) => {
  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>Jane</span>
        <div className={classes.chatIcons}>
          <button>Add friend</button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
