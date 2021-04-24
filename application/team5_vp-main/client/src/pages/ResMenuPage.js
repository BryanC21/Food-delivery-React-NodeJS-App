import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantMenu from "./RestaurantMenu";

const ResMenuPage = () => {
  return (
    <div>
      <RestaurantMenu restaurantName={"BestBreakfast"}></RestaurantMenu>
    </div> 
  );
}
export default ResMenuPage;
