import React, { useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "User_Input") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.isValid };
  }
  return { value: "", isValid: null };
};

const passwordReducer = (prevState, action) => {
  if (action.type === "User_Password") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "Input_Blur") {
    return { value: prevState.value, isValid: prevState.isValid };
  }
  return { value: "", isValid: null };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const authCntx = useContext(AuthContext);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("jai shree krishn");
  //     setFormIsValid(
  //       enteredEmail.includes("@") &&
  //         enteredPassword.trim().length > 6 &&
  //         enteredCollegeName.trim().length > 0
  //     );
  //   }, 500);
  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword, enteredCollegeName]);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "User_Input", val: event.target.value });
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "User_Password", val: event.target.value });
    setFormIsValid(
      emailState.value.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "Input_Blur" });
    // setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "Input_Blur" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCntx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailState}
          id={"email"}
          value={emailState.value}
          type={"email"}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          isValid={passwordState}
          id={"password"}
          value={passwordState.value}
          type={"password"}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
