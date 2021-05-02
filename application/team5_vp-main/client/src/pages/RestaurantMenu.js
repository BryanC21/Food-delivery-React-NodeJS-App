import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";

const RestaurantMenu = (props) => {
  const restaurantName = props.restaurantName;

  const [foodName, setFoodName] = React.useState("");
  const [cuisineType, setCuisineType] = React.useState("");
  const [pricing, setPricing] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div>
      {/*FRONTEND TODO*/}
      {/* Style this form w/o using needing to use <br/> b/c there's a better approach*/}
      {/* Hint: Display flex, flex-direction: column  Ex:RestaurantRegistration.js*/}
      {/* Might need to separate label/input as their own */}
      <section className='jumbotron bg-dark '>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md text-center text-white align-self-center'>
              <h2>Add your latest menu</h2>
              <p>Upload your newest menu item to attract customers</p>
            </div>
            <div className='col-md text-white text-center '>
              <form
                className='container border rounded'
                style={{ paddingBottom: "20px", paddingTop: "20px" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <label>
                  Food Name:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Cuisine Type:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={cuisineType}
                    onChange={(e) => setCuisineType(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Price:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={pricing}
                    onChange={(e) => setPricing(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Description:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <br />
                <br />
                <div className='text-center'>
                  <button className='btn btn-primary'>Submit Menu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RestaurantMenu;
