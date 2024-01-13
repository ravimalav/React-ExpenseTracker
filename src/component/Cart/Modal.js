import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import { Fragment } from "react";

const targetPortal = document.getElementById("overlay");
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const OverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <BackDrop onClose={props.onClose} />,
        targetPortal
      )}
      {ReactDom.createPortal(<OverLay>{props.children}</OverLay>, targetPortal)}
    </Fragment>
  );
};
export default Modal;
