import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/base";
import AuthDetails from "../firebase/AuthDetails";
import { Link } from "react-router-dom";
import classes from "../styles/login.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapperSignUp}>
        <form className={classes.form} onSubmit={signUp}>
          <span className={classes.logo}>MarcoChat</span>
          <span className={classes.title}>Create an account</span>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
        <AuthDetails />
      </div>
    </div>
  );
};

export default SignUp;
