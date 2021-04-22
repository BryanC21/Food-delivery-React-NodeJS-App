import React, { Component } from "react";
import "./Register.css";

export default function RestaurantRegistration() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Name:  ${name}
      Email: ${email}
      Password: ${password}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  };

  return (
    // Need to start with a div to style more efficiently
    <div>
      <form className = "registrationFormContainer" onSubmit={handleSubmit}>
        <h1 className = "formHeader">Restaurant Sign Up</h1>
          <label className = "formLabel">
            Restaurant Name: 
            <input
            className = "formInput"
            name = "restaurantName"
            type = "text"
            placeholder = "Restaurant Name"
            required
            >
            </input>
          </label>
          <label className = "formLabel">
            Address: 
          
            <input
            className = "formInput"
            name = "address"
            type = "text"
            placeholder = "Address"
            required
            >
            </input>
          </label>
          <label className = "formLabel">
            Email: 
            <input
            className = "formInput"
            name = "email"
            type = "email"
            placeholder = "Email"
            required
            >
            </input>
          </label>
          <label className = "formLabel">
            Password: 
            <input
            className = "formInput"
            name = "password"
            type = "password"
            placeholder = "Password"
            required
            >
            </input>
          </label>
          <label className = "formLabel">
            Confirm Password: 
            <input
            className = "formInput"
            name = "confirmPassword"
            type = "password"
            placeholder = "Confirm Password"
            required
            >
            </input>
          </label>
          <label className = "formLabel">
            Restaurant Description 
            <input
            className = "formInput"
            name = "restaurantDescription"
            type = "text"
            placeholder = "Restaurant Description"
            required
            >
            </input>
          </label>
        <button
          className = "formButton"
        >
            Upload Logo
        </button>

        <button
          className = "formButton"
          name = "signUpButton"
          type = "submit"
        >
            Sign Up 
        </button>

        <p style={{textAlign:"center",fontWeight:"bold"}}>
          OR
        </p>

        <button
          className = "formButton"
        >
            New User Sign Up
        </button>

        <button
          className = "formButton"
        >
            Deliverer Sign Up
        </button>

      </form>
    </div>
  );
}
