import React from "react";
import Chat from "../home/Chat";
import Sidebar from "../home/Sidebar";
import classes from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
