import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./dashboard";

const App = () => (
  <Router>
    <Switch>
      <Route path="/app">
        <Dashboard />
      </Route>
      <Redirect to="/app" />
    </Switch>
  </Router>
);

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
