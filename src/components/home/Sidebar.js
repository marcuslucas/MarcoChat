import React from "react";
import classes from "../styles/home.module.css";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
import { useState, useEffect } from "react";

const Sidebar = (props) => {
  const [mobileView, setMobileView] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileView(false);
        // console.log("not mobile");
      } else if (window.innerWidth < 900) {
        setMobileView(true);
        // console.log("this is mobile");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={classes.sidebar}>
      {!mobileView && <Navbar />}
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
