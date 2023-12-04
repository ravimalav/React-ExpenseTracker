import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Navigation = (props) => {
  const cntx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {cntx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cntx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cntx.isLoggedIn && (
          <li>
            <button onClick={cntx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
