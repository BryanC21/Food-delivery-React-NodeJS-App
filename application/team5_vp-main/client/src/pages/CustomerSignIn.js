import React, { useEffect, useState } from "react";
import "../styling/Customer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const CustomerSignIn = () => {
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



    );
}

export default CustomerSignIn