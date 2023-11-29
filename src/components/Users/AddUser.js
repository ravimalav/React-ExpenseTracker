import Card from "../UI/Card";
import classes from "./User.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import React from "react";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message:
          "Please enter a valid name and age (values should be non-empty).",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid age!",
        message: "Please enter valid age (age should be >0).",
      });
      return;
    }
    props.addUserInList(enteredName, enteredAge);

    setEnteredAge("");
    setEnteredName("");
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
            value={enteredName}
            placeholder="username"
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age(Years):</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            placeholder="age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
