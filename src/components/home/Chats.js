import React from "react";
import classes from "../styles/home.module.css";

const Chats = (props) => {
  return (
    <div className={classes.chats}>
      <div className={classes.userChat}>
        <div className={classes.userChatInfo}>
          <span>Marcus</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
