import React from "react";
import classes from "../styles/topbar.module.css";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Hamburger from "../ui/Hamburger";
import { useState, useEffect } from "react";

const Topbar = (props) => {
  const { data } = useContext(ChatContext);
  const talkingTo = data.user.displayName;
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
    <div classname={classes.topBarContainer}>
      <div className={classes.chatInfo}>
        {mobileView && <Hamburger />}
        <p>{!props.name ? "Select A Chat" : props.name}</p>
        <button>Hide Chat</button>
      </div>
    </div>
  );
};

// onClick={props.handleSwap}

export default Topbar;
