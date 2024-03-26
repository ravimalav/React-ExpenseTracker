import React, { useContext, useRef, useEffect } from "react";
import Home from "./Home";
import classes from "./css/ContactDetail.module.css";
import AuthContext from "../../store/context-api/AuthContext";

const ContactDetails = () => {
  const authCtx = useContext(AuthContext);
  const nameRef = useRef();
  const urlRef = useRef();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const updatedDetails = {
        idToken: authCtx.token,
        displayName: nameRef.current.value,
        phtoUrl: "https://identitytoolkit.com",
        returnSecureToken: true,
      };
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDtBsLdNVtUh3yOGqGP2ZbFXcXM-Y8d0Dc`,
        {
          method: "POST",
          body: JSON.stringify(updatedDetails),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log("data from backend", data);
      if (data && data.error) {
        throw new Error("Http error when profile is updated", data.error);
      } else if (response.status === 200) {
        console.log("status is green");
        authCtx.setProfileStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDtBsLdNVtUh3yOGqGP2ZbFXcXM-Y8d0Dc`,
        {
          method: "POST",
          body: JSON.stringify({ idToken: authCtx.token }),
          headers: { "Content-type": "application/json" },
        }
      );
      const data = await response.json();
      if (response.status === 200 && data.custom.Auth === true) {
        console.log("status is greeeennn");
        authCtx.setProfileStatus(true);
        console.log("status is green");
      } else if (data.error) {
        throw new Error("can't get user details", data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <>
      <Home status={true} isProfileUpdate={authCtx.isProfileUpdated} />

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
