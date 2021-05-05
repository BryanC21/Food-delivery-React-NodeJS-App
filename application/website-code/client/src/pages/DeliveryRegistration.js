import React, { Component } from "react";
import "../styling/Registration.css"
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function DeliveryRegistration() {
  const [username, setName] = React.useState("");
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
      const res = await axios.post("/api/v1/auth/registerDeliverer", data); //<<<<<<<<<<<
      console.log("Deliverer LOGIN: ", res);
      history.push("/HP/DelivererMainMenu");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // Need to start with a div to style more efficiently
    <div className='auth-form'>
      {/* If no bootstrap container form will be all the way to the left  */}
      <form className='formClass container' onSubmit={handleSubmit}>
        <h1 className='formH1Class'>Register To Be A Deliverer </h1>

        <label className='labelClass'>
          Please enter your name:
          <input
            className='inputClass'
            name='name'
            type='text'
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className='labelClass'>
          Please enter your email:
          <input
            className='inputClass'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className='labelClass'>
          Please enter your password:
          <input
            className='inputClass'
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {"\n"}

        <label className='labelClass'>
          <input
            className='inputClass'
            name='acceptedTerms'
            type='checkbox'
            onChange={(e) => setAcceptedTerms(e.target.value)}
            required
          />
          I accept the terms of service
        </label>

        <button className='buttonClass'>Register</button>
      </form>
    </div>
  );
}
