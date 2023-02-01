import React, { useContext, useEffect, useState } from "react";
import classes from "../styles/home.module.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/base";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = (props) => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  // const { data } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        // const chatData = Object.entries(chats).toString();
        // const docData = Object.entries(doc.data()).toString();
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  // const handleDelete = (user) => {
  //   const temp = Object.values(chats);
  //   console.log(temp);
  //   const newObj = temp.filter((chat) => {
  //     return chat.userInfo !== user;
  //   });
  //   console.log(newObj);
  //   setChats(newObj);
  // };

  return (
    <div className={classes.chats}>
      {chats ? (
        Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className={classes.userChat}
              key={chat[0]}
              onClick={() => {
                handleSelect(chat[1].userInfo);
              }}
            >
              <div className={classes.userChatInfo}>
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
                {/* <button
                  onClick={() => {
                    handleDelete(chat[1].userInfo);
                  }}
                >
                  Delete
                </button> */}
              </div>
            </div>
          ))
      ) : (
        <p>No Chats...Search for someone</p>
      )}
    </div>
  );
};

export default Chats;
