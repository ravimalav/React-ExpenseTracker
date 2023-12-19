import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className={`${classes.button} ${props.className} `}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
