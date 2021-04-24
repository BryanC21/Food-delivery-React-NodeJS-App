import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import HP_Links from "./pages/HP_Links";
import CustomerViewRestaruantMenu from "./pages/customerViewRestaruantMenu";
import CustomerSignIn from "./pages/CustomerSignIn";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import Home from "./pages/Home/Home";
import SearchMenu from "./pages/Search/SearchMenu";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import ResMenuPage from "./pages/ResMenuPage";
import DelivererMainMenu from "./pages/DelivererMainMenu";
import customerCart from "./pages/customerCart";
import RestaurantOrderPage from "./pages/RestaurantOrderPage";
import DeliveryOrderPage from "./pages/DeliveryOrderPage";
import DeliveryOrderDetail from './pages/DeliveryOrderDetail';
import RestaurantDeliveryOrderDetail from './pages/RestaurantDeliveryOrderDetail';
import RestaurantPickupOrderDetails from "./pages/RestaurantPickupOrderDetails";
import UserRegistration from './pages/UserRegistration'
import RestaurantRegistration from './pages/RestaurantRegistration'
import DeliveryRegistration from './pages/DeliveryRegistration'


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
            component={CustomerViewRestaruantMenu}
          />
          <Route
            exact
            path='/HP/customerCart'
            component={customerCart}
          />
          <Route
            exact
            path='/HP/CustomerSignIn'
            component={CustomerSignIn}
          />
          <Route
          exact path = '/HP/DelivererMainMenu'
          component={DelivererMainMenu}
          />
          <Route
            exact path = '/HP/DeliveryOrderDetail'
            component = {DeliveryOrderDetail}
          />
          <Route
            exact path = '/HP/RestaurantDeliveryOrderDetail'
            component = {RestaurantDeliveryOrderDetail}
          />
          <Route
            exact path = '/HP/RestaurantPickupOrderDetails'
            component = {RestaurantPickupOrderDetails}
          />
          <Route 
            exact path = '/HP/UserRegistration'
            component = {UserRegistration}
          />
          <Route 
            exact path = '/HP/RestaurantRegistration'
            component = {RestaurantRegistration}
          />
          <Route
            exact path = '/HP/DeliveryRegistration'
            component = {DeliveryRegistration}
          />
          <Route exact path='/HP/RestaurantOrderPage' component={RestaurantOrderPage} />
          <Route exact path='/HP/DeliveryOrderPage' component={DeliveryOrderPage} />
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
