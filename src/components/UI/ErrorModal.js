import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.setError} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.setError}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop setError={props.setError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          setError={props.setError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
