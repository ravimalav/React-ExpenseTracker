import React from "react";

import Navigation from "../Main-Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};

export default Layout;
