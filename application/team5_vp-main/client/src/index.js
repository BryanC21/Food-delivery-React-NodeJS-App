import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import HP_Links from "./pages/HP_Links";
import CustomerViewRestaruantMenu from "./pages/customerViewRestaruantMenu";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/HP_Pages' component={HP_Links} />
        <Route exact path='/CustomerViewRestaruantMenu' component={CustomerViewRestaruantMenu} />
      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
