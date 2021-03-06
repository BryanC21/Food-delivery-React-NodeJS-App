import React from "react";
import "../styling/Registration.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeliveryRegistration() {
  const [username, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setAcceptedTerms] = React.useState(false);
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
      const res = await axios.post("/api/v1/auth/registerDeliverer", data);
      console.log("Deliverer REGISTRATION: ", res);
      toast(res.data.message);
      setTimeout(() => {
        history.push("/HP/DeliverySignIn");
      }, 2000);
    } catch (err) {
      toast(err.response.data.message);
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
          Please enter your password: (8 Characters Min. At least 1 letter and 1
          digit)
          <input
            className='inputClass'
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
          />
        </label>
        {"\n"}

        <input
          name='acceptedTerms'
          type='checkbox'
          onChange={(e) => setAcceptedTerms(e.target.value)}
          required
        />
        <label className='label labelClass'>
          I accept the terms of service
        </label>

        <button className='buttonClass'>Register</button>
      </form>

      <ToastContainer />
    </div>
  );
}
