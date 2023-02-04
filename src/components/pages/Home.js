import React from "react";
import Chat from "../home/Chat";
import Sidebar from "../home/Sidebar";
import classes from "../styles/home.module.css";

import { useState, useEffect } from "react";

const Home = () => {
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
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        {!mobileView && <Sidebar />}
        <Chat />
      </div>
    </div>
  );
};

export default Home;
