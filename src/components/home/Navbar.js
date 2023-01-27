import React from "react";
import classes from "../styles/home.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>MarcoChat</span>
      <div className={classes.user}>
        <span>Name</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
