import React from "react";
import classes from "./css/Home.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    history.replace("/contact-detail");
  };
  return (
    <>
      <div className={classes.container}>
        <p>
          {props.status
            ? "Winners never quit, Quiter never wins"
            : "Expense Tracker welcome you!"}
        </p>

        <div className={classes.box}>
          {props.isProfileUpdate
            ? props.status && props.isProfileUpdate
              ? "Your profile is up to date."
              : "Your profile is incomplete."
            : props.status && !props.isProfileUpdate
            ? "Your profile is 64% complete.A complete profile has more chance to land a job."
            : "Your profile is incomplete."}
          {!props.isProfileUpdate && (
            <button onClick={onClickHandler}>Complete now</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
