import Card from "../UI/Card";
import classes from "./User.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import React from "react";
import { useRef } from "react";

const AddUser = (props) => {
  console.log("Ram");
  const inputNameRef = useRef();
  const inputAgeRef = useRef();
  const inputCollegeRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserAge = inputAgeRef.current.value;
    const enteredUserName = inputNameRef.current.value;
    const enteredUserCollegeName = inputCollegeRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid input!",
        message:
          "Please enter a valid name and age (values should be non-empty).",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid age!",
        message: "Please enter valid age (age should be >0).",
      });
      return;
    }
    props.addUserInList(
      enteredUserName,
      enteredUserAge,
      enteredUserCollegeName
    );
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
    inputCollegeRef.current.value = "";
  };
  const setErrorHandler = () => {
    setError(false);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          setError={setErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            ref={inputNameRef}
          />
          <label htmlFor="age">Age(Years):</label>
          <input id="age" type="number" placeholder="age" ref={inputAgeRef} />
          <label htmlFor="collegeName">College Name:</label>
          <input
            id="collegeName"
            type="text"
            placeholder="College Name"
            ref={inputCollegeRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
