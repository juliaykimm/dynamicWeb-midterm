import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./container/Home";
import SGdata from "./container/SGdata";
import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
