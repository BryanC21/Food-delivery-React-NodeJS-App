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
    <div className='auth-form '>
      <form
        className='registrationFormContainer container d-flex flex-column  justify-content-center '
        onSubmit={handleSubmit}
      >
        <h1 className='formHeader'>Restaurant Sign Up</h1>
        <label htmlFor='rname' className='formLabel'>
          Restaurant Name
        </label>
        <input
          id='rname'
          className='formInput'
          name='restaurantName'
          type='text'
          required
        />

        <label htmlFor='address' className='formLabel'>
          Address
        </label>
        <input
          id='address'
          className='formInput'
          name='address'
          type='text'
          required
        />

        <label htmlFor='email' className='formLabel'>
          Email
        </label>
        <input
          id='email'
          className='formInput'
          name='email'
          type='email'
          required
        />

        <label htmlFor='password' className='formLabel'>
          Password
        </label>
        <input
          id='password'
          className='formInput'
          name='password'
          type='password'
          required
        />

        <label htmlFor='passwordConfirm' className='formLabel'>
          Confirm Password
        </label>
        <input
          id='passwordConfirm'
          className='formInput'
          name='confirmPassword'
          type='password'
          required
        />

        <label id='rdes' className='formLabel'>
          Restaurant Description
        </label>
        <input
          id='rdes'
          className='formInput'
          name='restaurantDescription'
          type='text'
          required
        />

        <button className='formButton formUploadButton'>Upload Logo</button>

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
