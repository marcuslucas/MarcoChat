import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import classes from "../styles/home.module.css";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/base";

const Messages = (props) => {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);

  // console.log(messages);

  return (
    <div className={classes.messages}>
      {props.selected ? (
        messages.map((m) => <Message message={m} key={m.id} />)
      ) : (
        <p className={classes.msgPara}>Find some friends dude</p>
      )}
    </div>
  );
};

export default Messages;
