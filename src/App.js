import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SGdata from "./container/SGdata";
import "./App.css";

import Home from "./container/Home";

function App() {
  console.log("are u here?");
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
