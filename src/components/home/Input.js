import React from "react";
import classes from "../styles/home.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="Type something..." />
      <div className={classes.send}>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
