import React from "react";

const RestaurantInfo = (props) => {
  //   const restaurantName = props.restaurantName;

  const [restaurantName, setRestaurantName] = React.useState("");
  const [restaurantAddress, setRestaurantAddress] = React.useState("");
  const [cuisineType, setCuisineType] = React.useState("");
  const [pricing, setPricing] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [logo, setLogo] = React.useState("");

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
              <h2>Restaurant Set Up </h2>
              <p>Set up your restaurant to add your menus</p>
            </div>
            <div className='col-md text-white text-center '>
              <form
                className='container border rounded'
                style={{ paddingBottom: "20px", paddingTop: "20px" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <label>
                  Restaurant Name:
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                  />
                </label>
                <label>
                  Address:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={restaurantAddress}
                    onChange={(e) => setRestaurantAddress(e.target.value)}
                  />
                </label>
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
                {/*FRONTEND TODO*/}
                {/* FRONTEND:  Change this to A dropdown so owner can choose dollarsign from $ to $$$ */}
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
                <label> Upload logo </label>
                <button className='formButton formUploadButton'>Upload</button>
                <br />
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
export default RestaurantInfo;
