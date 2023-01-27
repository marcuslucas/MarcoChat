import { useState } from "react";
import * as firebase from "firebase/app";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import classes from "./loginForm.module.css";

const firebaseConfig = {
  apiKey: "AIzaSyA4H07nHlUolJ2iNB4DQuGbWroCy25tWxA",
  projectId: "login-form-1063a",
  authDomain: "login-form-1063a.firebaseapp.com",
  storageBucket: "login-form-1063a.appspot.com",
  messagingSenderId: "973705468346",
  appId: "1:973705468346:web:fa0ae6fb6616293ef72583",
  measurementId: "G-2FCPT9MVML",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("success").catch((error) => {
            console.log(error);
          });
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
