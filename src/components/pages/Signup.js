import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/base";
import { db } from "../firebase/base";

import { Link } from "react-router-dom";
import classes from "../styles/login.module.css";
import { doc, setDoc } from "firebase/firestore";

import AuthDetails from "../firebase/AuthDetails";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const signUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

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
      setSignedUp(true);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapperSignUp}>
        <form className={classes.form} onSubmit={signUp}>
          <span className={classes.logo}>MarcoChat</span>
          <span className={classes.title}>Create an account</span>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="Enter your email" />
          <input required type="password" placeholder="Enter your password" />
          <button disabled={loading} type="submit">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link className={classes.link} to="/login">
              Login
            </Link>
          </p>
        </form>
        {error && <span>Something went wrong</span>}
        {signedUp && <AuthDetails />}
      </div>
    </div>
  );
};

export default SignUp;
