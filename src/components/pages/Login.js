import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase/base";
import classes from "../styles/login.module.css";

const Login = (event) => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
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

            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"

            // onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
          <p>
            Don't have an account yet? <Link to="/signup">Register</Link>
          </p>
          {err && <span>Something went wrong</span>}
        </form>
        {/* <AuthDetails /> */}
      </div>
    </div>
  );
};

export default Login;
