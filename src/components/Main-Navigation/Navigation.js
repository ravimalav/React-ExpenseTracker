import React from "react";

import classes from "./Navigation.module.css";

import image from "../../store/image/backimage.jpg";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <h3>Expese Tracker</h3>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
