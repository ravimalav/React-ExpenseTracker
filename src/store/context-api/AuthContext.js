import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  isProfileUpdated: false,
  addToken: () => {},
  setProfileStatus: () => {},
});

export const AuthProvider = (props) => {
  const initialStatus = localStorage.getItem("token");
  const initialProfileStatus = localStorage.getItem("profileStatus");
  const [token, setToken] = useState(initialStatus);
  const [profileStatus, setProfileStatus] = useState(initialProfileStatus);
  const logInStatus = !!token;

  const addTokenHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const setProfileStatusHandler = (status) => {
    localStorage.setItem("profileStatus", status);
    setProfileStatus(status);
  };

  const value = {
    token: token,
    isLoggedIn: logInStatus,
    addToken: addTokenHandler,
    isProfileUpdated: profileStatus,
    setProfileStatus: setProfileStatusHandler,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
