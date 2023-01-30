import React, { useContext } from "react";
import classes from "../styles/home.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/base";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = (props) => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth);
    console.log("Signed out");
    navigate("/login");
  };

  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>MarcoChat</span>
      <div className={classes.user}>
        <span>{currentUser.displayName}</span>
        <button onClick={signUserOut}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
