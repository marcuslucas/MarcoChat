import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import classes from "../styles/home.module.css";
import Input from "./Input";
import Messages from "./Messages";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/base";

const Chat = (props) => {
  const { data } = useContext(ChatContext);
  const talkingTo = data.user.displayName;
  // console.log(data.user.displayName);

  // const { dispatch } = useContext(ChatContext);

  // const handleDelete = async () => {
  //   console.log(data.chatId);
  //   await deleteDoc(doc(db, "chats", data.chatId));
  // };

  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>{talkingTo === null ? "Select A Chat" : talkingTo}</span>
        <div className={classes.chatIcons}>
          <button>Add friend</button>
          {/* <button
            onClick={() => {
              handleDelete();
            }}
          >
            Clear Chat
          </button> */}
        </div>
      </div>
      {talkingTo ? <Messages /> : <Messages selected={true} />}
      <Input />
    </div>
  );
};

export default Chat;
