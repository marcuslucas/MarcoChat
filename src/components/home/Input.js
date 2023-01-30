import React, { useContext, useState } from "react";
import classes from "../styles/home.module.css";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { arrayUnion, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/base";
import { v4 as uuid } from "uuid";

const Input = (props) => {
  const [text, setText] = useState("");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });
  };

  return (
    <div className={classes.input}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className={classes.send}>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
