import React from "react";
import "../styling/Registration.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//loader css

export default function RestaurantRegistration() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [] = React.useState(false);
  const [, setLoading] = React.useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      username,
      email,
      password,
    };

    try {
      const res = await axios.post("/api/v1/auth/registerRestaurant", data);
      console.log("RESTAURANT LOGIN: ", res);
      toast(`${res.data.message}`);
      setTimeout(() => {
        history.push("/HP/RestaurantSignIn");
      }, 2000);
    } catch (err) {
      toast(err.response.data.message);
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
          Password:
          (8 Characters Min. At least 1 letter and 1 digit)
        </label>
        <input
          id='password'
          className='formInput'
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

        />

        <button
          className='formButton  btn btn-outline-primary '
          name='signUpButton'
          type='submit'
        >
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
