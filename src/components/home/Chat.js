import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import classes from "../styles/home.module.css";
import Input from "./Input";
import Messages from "./Messages";

const Chat = (props) => {
  const { data } = useContext(ChatContext);

  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>{data.user?.displayName}</span>
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
