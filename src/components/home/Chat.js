import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import classes from "../styles/home.module.css";
import Input from "./Input";
import Messages from "./Messages";
import { useState } from "react";
import Topbar from "./Topbar";

const Chat = (props) => {
  const { data } = useContext(ChatContext);
  const displayName = data.user.displayName;
  // const [name, setName] = useState();
  const [talkingTo, setTalkingto] = useState();

  const handleSwap = () => {
    setTalkingto(!talkingTo);
  };

  return (
    <div className={classes.chat}>
      <Topbar handleSwap={handleSwap} name={displayName} />
      {talkingTo ? <Messages selected={true} /> : <Messages selected={false} />}
      <Input />
    </div>
  );
};

export default Chat;
