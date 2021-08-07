//IMPORTING DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";

//IMPORTING COMPONENTS
import Home from "./Home";
import Countries from "./Countries";
import ErrorPage from "../src/Components/Error";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
