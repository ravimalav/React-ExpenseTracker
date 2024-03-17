import React, { useContext, useRef } from "react";
import Home from "./Home";
import classes from "./css/ContactDetail.module.css";
import AuthContext from "../../store/context-api/AuthContext";

const ContactDetails = () => {
  const authCtx = useContext(AuthContext);
  const nameRef = useRef();
  const urlRef = useRef();
  const onSubmitHandler = async () => {
    try {
      const updatedDetails = {
        idToken: authCtx.token,
        displayName: "ravi malav",
        phtoUrl: "https://identitytoolkit.com",
        email: nameRef.current.value,
        returnSecureToken: true,
      };
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDtBsLdNVtUh3yOGqGP2ZbFXcXM-Y8d0Dc`,
        {
          method: "post",
          body: JSON.stringify(updatedDetails),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("jai siyaram", response);
      const data = await response.json();
      console.log("data from backend", data);
      if (data && data.error) {
        throw new Error("Http error when change for email", data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Home status={true} />

      <div className={classes.container}>
        <div className={classes.box}>
          <h2>Contact Detail</h2>
          <button>cancel</button>
        </div>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <input type="text" placeholder="name" ref={nameRef} />
          <input type="url" placeholder="Profile photo url" ref={urlRef} />
          <button>update</button>
        </form>
      </div>
    </>
  );
};

export default ContactDetails;
