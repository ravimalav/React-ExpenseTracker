import React, { useContext, useRef, useState } from "react";
import classes from "./Signup.module.css";
import AuthContext from "../../store/context-api/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onClickHandler = () => {
    setIsLoggedIn((isLoggedin) => !isLoggedin);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    let url;
    if (!isLoggedin && password !== confirmPasswordRef.current.value) {
      alert("pasword and conform passwor is not same");
    }
    if (isLoggedin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtBsLdNVtUh3yOGqGP2ZbFXcXM-Y8d0Dc`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtBsLdNVtUh3yOGqGP2ZbFXcXM-Y8d0Dc`;
    }
    try {
      const loginDetails = {
        email: emailRef.current.value,
        password: password,
        returnSecureToken: true,
      };
      const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(loginDetails),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log("data of authentication", data);
      if (isLoggedin && response.ok) {
        authCtx.addToken(data.idToken);
        history.replace("/home");
      } else {
        if (data && data.error) {
          isLoggedin && alert(`${response.status}`);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      console.log(err);
    }
    if (!isLoggedin) {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
    } else {
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div className={classes.outerdiv}>
      <div>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <h4>{isLoggedin ? "Login" : "SignUp"}</h4>
          <input type="email" placeholder="Email" required ref={emailRef} />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          {!isLoggedin && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              ref={confirmPasswordRef}
            />
          )}

          <button>{isLoggedin ? "Login" : "SignUp"}</button>
          {isLoggedin && <a href="">Forgot Password</a>}
        </form>
      </div>
      <button onClick={onClickHandler}>
        {isLoggedin ? "Dont't have an account?SignUp" : "Have an account?Login"}
      </button>
    </div>
  );
};

export default Signup;
