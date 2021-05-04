import React, { Component } from "react";
import "../styling/Registration.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setIsLoggedIn } from "../redux/actions/customerActions"

function UserRegistration({ dispatch }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone_number, setPhone_Number] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    const emailRegex = /^\"?[\w-_\.]*\"?@sfsu\.edu$/;
    event.preventDefault();
    const data = {
      username,
      email,
      password,
      address,
      phone_number,
    };
    if (!emailRegex.test(email)) {
      console.log("Please use a sfsu email");
    } else {
      try {
        const res = await axios.post("/api/v1/auth/registerApprovedUser", data);
        console.log("RESTAURANT INFORMATION: ", res);
        dispatch(setIsLoggedIn(true));
        history.push("/HP/CustomerViewRestaruantMenu");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    // Need to start with a div to style more efficiently
    <div className='auth-form'>
      {/* If no bootstrap container form will be all the way to the left  */}
      <form className='formClass container' onSubmit={handleSubmit}>
        <h1 className='formH1Class'>Create Free Account</h1>

        <label className='labelClass'>
          Username:
          <input
            className='inputClass'
            name='name'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className='labelClass'>
          Email:
          <input
            className='inputClass'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className='labelClass'>
          Password:
          <input
            className='inputClass'
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className='labelClass'>
          Address:
          <input
            className='inputClass'
            name='address'
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label className='labelClass'>
          Phone number:
          <input
            className='inputClass'
            name='phone number'
            type='number'
            value={phone_number}
            onChange={(e) => setPhone_Number(e.target.value)}
            required
          />
        </label>

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

const mapStateToProps = (state) => {

  return {
    isLoggedIn: state.customerReducer.isLoggedIn,
    
  };
};

export default connect(mapStateToProps)(UserRegistration);
