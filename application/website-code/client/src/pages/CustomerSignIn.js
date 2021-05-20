import React, { useEffect, useState } from "react";
import "../styling/Customer.css";
import { Link } from "react-router-dom";
import "../styling/Registration.css";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const CustomerSignIn = () => {
  const [email, setStateEmail] = React.useState("test@sfsu.edu");
  const [password, setStatePassword] = React.useState("123456");
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = async (event) => {
    const emailRegex = /^\"?[\w-_\.]*\"?@sfsu\.edu$/;
    event.preventDefault();
    const data = {
      email,
      password,
    };
    if (!emailRegex.test(email)) {
      console.log("Please use a sfsu email");
    } else {
      try {
        const res = await axios.post("/api/v1/auth/userLogin", data);
        // save user and token to localstorage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // save data to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        console.log("USER INFORMATION: ", res);

        //history.push("/HP/search_result_menu"); << login to this
        history.push("/HP/CustomerViewRestaruantMenu");
      } catch (err) {
        console.log(err);
      }
    }
  };

  // let tit = document.getElementById("title");
  //tit.innerText = "SignIn";

  return (
    // Need to start with a div to style more efficiently
    <div className='auth-form'>
      {/* If no bootstrap container form will be all the way to the left  */}
      <form className='formClass container' onSubmit={handleSubmit}>
        <h1 className='formH1Class'>Sign In </h1>

        <label className='labelClass'>
          Please enter your email:
          <input
            className='inputClass'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setStateEmail(e.target.value)}
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
            onChange={(e) => setStatePassword(e.target.value)}
            required
          />
        </label>
        {"\n"}

        <Link>Forgot your password?</Link>

        <button className='buttonClass'>Sign In</button>

        <h2 className='formH2Class'>Or </h2>

        <lable className='formP'>
          <p>Need a Account?</p>
          <Link to='/HP/UserRegistration'>Register now</Link>
        </lable>

        <Link className='linkClass' to='/HP/RestaurantSignIn'>
          Restaurant Sign In
        </Link>
        <Link className='linkClass' to='/HP/DeliverySignIn'>
          Delivery Sign In
        </Link>
      </form>
    </div>
  );
};

export default CustomerSignIn;
