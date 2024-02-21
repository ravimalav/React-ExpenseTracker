import React, { useRef, useState } from "react";
import classes from "./Signup.module.css";

const Signup = () => {
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
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      alert("pasword and conform passwor is not same");
    } else {
      const loginDetails = {
        email: emailRef.current.value,
        password: password,
      };
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtBsLdNVtUh3yOGqGP2ZbFXcXM-Y8d0Dc`,
          {
            method: "post",
            body: JSON.stringify(loginDetails),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data of authentication", data);
      } catch (err) {}
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
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
        </form>
      </div>
      <button onClick={onClickHandler}>
        Have an account?{isLoggedin ? "SignUp" : "Login"}
      </button>
    </div>
  );
};

export default Signup;
