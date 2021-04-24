import React, { useEffect, useState } from "react";
import "../styling/Customer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Register.css";


const CustomerSignIn = () => {
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
  
    const handleSubmit = (event) => {
      console.log(`
       
        Email: ${email}
        Password: ${password}
       
      `);
  
      event.preventDefault();
    };
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


            <Link>Forgot your password?</Link>
    
        
    
            <button className='buttonClass'>Sign In</button>

            <h2 className='formH2Class'>Or </h2>

            <lable className = 'formP'>
            <p>Need a Account?</p><Link to = '/HP/UserRegistration'>Register now</Link>
            </lable>

            <button className='buttonClass'to = '/HP/UserRegistration'>Restaurant Sign In</button>
            <button className='buttonClass'>Delivery Sign In</button>
          </form>
        </div>

);

    /*
    return (
        <div>
            <div className='form'>
                <h1 className='head'>Sign In</h1>
                
                <input className='inputField' name='Email' placeholder='Email' type='text' required/>
                <input className='inputField' name='Password' placeholder='Password' type='text' required/>
                
                <p className='text'>Forgot your password?</p>
                <div>

                    <button className='Customer-button'>Sign In</button>
                </div>

                <p className='text'>Need an account? Register now</p>
                <p className='center-text'>OR</p>
                <Link class='nav-link btn btn btn-outline-primary me-3' to='#'>
                    Restaurant Sign In
              </Link>
                <Link class='nav-link btn btn btn-outline-primary me-3' to='#'>
                    Deliverer Sign In
              </Link>

            </div>










        </div>



    );*/
}

export default CustomerSignIn