import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import HP_Links from "./pages/HP_Links";
import Home from "./pages/Home/Home";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import ResMenuPage from "./pages/ResMenuPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/HP' component={Navbar} />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/HP_Pages' component={HP_Links} />
        <Route exact path='/HP/homepage' component={Home} />
        <Route exact path='/HP/RestaurantMenu' component={ResMenuPage} />
      </Switch>
      <Route path='/HP' component={Footer} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
