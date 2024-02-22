import React from "react";
import Layout from "./components/Layout/Layout";
import Signup from "./components/pages/Signup";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
