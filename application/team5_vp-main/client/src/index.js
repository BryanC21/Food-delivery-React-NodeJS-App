import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import HP_Links from "./pages/HP_Links";
import ResMenuPage from "./pages/ResMenuPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/HP_Pages' component={HP_Links} />
        <Route exact path='/RestaurantMenu' component={ResMenuPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
