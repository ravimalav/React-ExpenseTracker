import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  addToken: () => {},
});

export const AuthProvider = (props) => {
  const initialStatus = localStorage.getItem("token");
  const [token, setToken] = useState(initialStatus);
  const logInStatus = !!token;

  const addTokenHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const value = {
    token: token,
    isLoggedIn: logInStatus,
    addToken: addTokenHandler,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
