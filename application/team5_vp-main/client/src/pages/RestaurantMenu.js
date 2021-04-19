import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RestaurantMenu = (props) => {
  const restaurantName = props.restaurantName
  return (
    <div>
      <header>
        <h1>Restaurant Menu for {restaurantName}</h1>
      </header>
      <section className='jumbotron bg-light'>
        <div className='container-fluid '>
          <div className='row'>
            <div className="col-md text-center">
              <button
                className='btn btn-primary '
                type='submit'
              >View All Orders</button>
            </div>
            <div className="col-md text-center">
              <h2>View Order's Status</h2>
              <p>Locate all your customer's orders in a click of a button</p>
            </div>
          </div>
        </div>
      </section>

      <section className='jumbotron bg-dark'>
      <div className='container-fluid '>
          <div className='row'>
            <div className="col-md text-center text-white">
              <h2>Add your latest menu</h2>
              <p>Upload your newest menu item to attract customers</p>
            </div>
            <div className="col-md text-center">
              <button
                className='btn btn-primary '
                type='submit'
              >Some form...</button>
            </div>
          </div>
        </div>
      </section>

      <section className='jumbotron bg-light'>
      <div className='container-fluid '>
          <div className='row'>
            <div className="text-center">
              <h2>View your menu</h2>
            </div>
            <div className="text-center">
              <p>Show their menu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RestaurantMenu;