import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantMenu from "./RestaurantMenu";

/*Some code magic would happen to see which user is logged in 
and create the correct RestaurantMenu and query our API*/
const ResMenuPage = () => {
  return (
    <div>
      <RestaurantMenu restaurantName="Mcdonalds"></RestaurantMenu>
    </div>
  );
}
export default ResMenuPage;