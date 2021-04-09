import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import HP_Links from "./pages/HP_Links";
import customerViewRestaruantMenu from "./pages/customerViewRestaruantMenu";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import Home from "./pages/Home/Home";
import SearchMenu from "./pages/Search/SearchMenu";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import ResMenuPage from "./pages/ResMenuPage";

const store = createStore(rootReducer, applyMiddleware(thunk)); //save fake data for customerVieRestaurantMenu

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path='/HP' component={Navbar} />
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/HP_Pages' component={HP_Links} />
          <Route
            exact
            path='/HP/CustomerViewRestaruantMenu'
            component={customerViewRestaruantMenu}
          />
          <Route exact path='/HP/homepage' component={Home} />
          <Route exact path='/HP/search_result_menu' component={SearchMenu} />
          <Route exact path='/HP/RestaurantMenu' component={ResMenuPage} />
        </Switch>
        <Route path='/HP' component={Footer} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
