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
        <Link to='/RestaurantMenu'>RestaurantMenu</Link>
      </header>
      <div>
        <Link to='/HP/homepage'>HP homepage</Link>
      </div>
    </div>
  );
}
export default HP_Links;
