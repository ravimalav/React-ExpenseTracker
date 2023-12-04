import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, passwordc, collegeName) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInStatus = localStorage.getItem("loggedInStatus");
    console.log("jai siyaram");
    if (userLoggedInStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("loggedInStatus", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("loggedInStatus", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
