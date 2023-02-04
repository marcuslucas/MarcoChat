import React from "react";
import classes from "../styles/hamburger.module.css";
import Sidebar from "../home/Sidebar";
import { useState } from "react";

const Hamburger = (props) => {
  const [toggled, setToggled] = useState();

  const handleToggle = () => {
    setToggled(!toggled);
  };
  return (
    <div>
      <input
        onClick={handleToggle}
        type="checkbox"
        className={classes.toggle1}
        id="toggle"
      />
      <label for="toggle" className={classes.hamburger1}>
        <div className={classes.top}></div>
        <div className={classes.middle}></div>
        <div className={classes.bottom}></div>
      </label>
      <div className={classes.menu1}>
        {toggled && <Sidebar className={classes.mobileSidebar} />}
      </div>
    </div>
  );
};

export default Hamburger;
