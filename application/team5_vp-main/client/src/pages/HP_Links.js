import React from "react";
import { Link } from "react-router-dom";

function HP_Links() {
  return (
    <div>
      <header>
        <h1>
          Leave links to pages you create here so we can reach them easily:
        </h1>
        <p>You need to add routes in src/index.js for links to work also</p>
        <Link to='/'>Home</Link>
        <br></br>
        <div>
        <Link to='/HP/homepage'>HP homepage</Link>
      </div>
        <h2>Customer</h2>
        <Link to='/HP/CustomerViewRestaruantMenu'>
        CustomerViewRestaruantMenu
        </Link>
        <br></br>
        <Link to='/HP/customerCart'>
        CustomerCart
        </Link>
        <br></br>
<<<<<<< HEAD
=======
        <Link to='/HP/CustomerSignIn'>
        CustomerSignIn
        </Link>
        <br></br>
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
        <Link to='/HP/UserRegistration'>UserRegistration</Link>
        <br></br>
        <h2>Restaurant</h2>
        <Link to='/HP/RestaurantOrderPage'>RestaurantOrderPage</Link>
        <br></br>
        <Link to='/HP/RestaurantDeliveryOrderDetail'>Restaurant Delivery Order Detail</Link>
        <br></br>
        <Link to='/HP/RestaurantPickupOrderDetails'>Restaurant Pickup Order Details</Link>
        <br></br>
        <Link to='/HP/RestaurantRegistration'>RestaurantRegistration</Link>
        <br></br>
        <Link to='/HP/RestaurantMenu'>RestaurantMenu</Link>
        <br></br>
        <h2>Delivery</h2>
        <Link to='/HP/DelivererMainMenu'>DelivererMainMenu</Link>
        <br></br>
        <Link to='/HP/DeliveryOrderPage'>DeliveryOrderPage</Link>
        <br></br>
        <Link to='/HP/DeliveryOrderDetail'>DeliveryOrderDetail</Link>
        <br></br>
        <Link to='/HP/DeliveryRegistration'>DeliveryRegistration</Link>
        <br></br>
      </header>
     
    </div>
  );
}
export default HP_Links;
