import React, { useEffect, useState } from "react";
import "../styling/Customer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../styling/Registration.css"
import "./Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";




const DeliverySignIn = () => {
    
    const [email, setStateEmail] = React.useState("");
    const [password, setStatePassword] = React.useState("");

    const history = useHistory();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
        email,
        password,
      };
     
        try {
          const res = await axios.post("/api/v1/auth//delivererLogin", data);
          console.log("RESTAURANT INFORMATION: ", res);
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
            <h1 className='formH1Class'>Delivery Sign In </h1>
    
         
    
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
                onChange={(e) =>setStatePassword(e.target.value)}
                required
              />
            </label>
            {"\n"}


            <Link>Forgot your password?</Link>
    
        
    
            <button className='buttonClass'>Sign In</button>

            <h2 className='formH2Class'>Or </h2>

            <lable className = 'formP'>
            <p>Need a Delivery Account?</p><Link to = '/HP/DeliveryRegistration'>Register now</Link>
            </lable>

            <Link className='linkClass' to = '/HP/CustomerSignIn' >Customer Sign In</Link>
            <Link className='linkClass' to = '/HP/RestaurantSignIn' >Restaurant Sign In</Link>
            
          </form>
          
        </div>
       

);


}



export default DeliverySignIn