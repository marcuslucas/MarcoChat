import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthDetails from "../firebase/AuthDetails";
import { auth } from "../firebase/base";
import classes from "../styles/login.module.css";

const Login = (event) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");

  const signIn = (event) => {
    // console.log("Signed in");
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log("signed in");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <form className={classes.form} onSubmit={signIn}>
          <span className={classes.logo}>MarcoChat</span>
          <span className={classes.title}>Log in</span>
          {/* <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          /> */}
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
            Don't have an account yet? <Link to="/signup">Register</Link>
          </p>
        </form>
        <AuthDetails />
      </div>
    </div>
  );
};

export default Login;
