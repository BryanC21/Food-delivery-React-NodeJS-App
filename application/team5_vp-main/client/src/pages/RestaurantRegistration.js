import React, { Component } from "react";
import "../styling/Registration.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function RestaurantRegistration() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    try {
      const res = await axios.post("/api/v1/auth/registerRestaurant", data);
      console.log("RESTAURANT LOGIN: ", res);
      history.push("/HP/RestaurantSignIn");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // Need to start with a div to style more efficiently
    <div className='auth-form '>
      <form
        className='registrationFormContainer container d-flex flex-column  justify-content-center '
        onSubmit={handleSubmit}
      >
        <h1 className='formHeader'>Restaurant Owner Sign Up</h1>
        <label htmlFor='rname' className='formLabel'>
          Full Name
        </label>
        <input
          id='rname'
          className='formInput'
          name='restaurantName'
          type='text'
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor='email' className='formLabel'>
          Email
        </label>
        <input
          id='email'
          className='formInput'
          name='email'
          type='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password' className='formLabel'>
          Password
        </label>
        <input
          id='password'
          className='formInput'
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* <label htmlFor='passwordConfirm' className='formLabel'>
          Confirm Password
        </label>
        <input
          id='passwordConfirm'
          className='formInput'
          name='confirmPassword'
          type='password'
          required
        /> */}
        <button
          className='formButton  btn btn-outline-primary '
          name='signUpButton'
          type='submit'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
