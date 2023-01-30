import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/base";
import { db } from "../firebase/base";

import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/login.module.css";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const signUp = async (event) => {
    event.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: displayName });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });
      console.log(
        `Created account. Dis: ${res.user.displayName}, email: ${res.user.email}`
      );
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
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
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
        {error && <span>Something went wrong</span>}
        {/* <AuthDetails /> */}
      </div>
    </div>
  );
};

export default SignUp;
