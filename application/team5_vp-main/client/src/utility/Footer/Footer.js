import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer jumbotron jumbotron-fluid'>
      <div className='footer-content container'>
        <div className='row'>
          <div className='col-sm-6'>
            <h1 className='h4 primary-color-font logo-font'>
              StateUnii © 2020
            </h1>
            <div className='col'>
              <Link to='#' className='primary-color-font me-3'>
                Privacy
              </Link>
              <Link to='#' className='primary-color-font'>
                Terms
              </Link>
            </div>
          </div>
          <div className='col'>
            <h1 className='h4 primary-color-font '>Cusines</h1>
            <p className='lead primary-color-font'>Chinese</p>
            <p className='lead primary-color-font'>Italian</p>
            <p className='lead primary-color-font'>American</p>
            <p className='lead primary-color-font'>Korean</p>
          </div>
          <div className='col'>
            <h1 className='h4 primary-color-font '>Places to Eat</h1>
            <p className='lead primary-color-font'>Chinese Restaurant</p>
            <p className='lead primary-color-font'>Italian Restaurant</p>
            <p className='lead primary-color-font'>American Restaurant</p>
            <p className='lead primary-color-font'>Korean Restaurant</p>
          </div>
          <div className='col'>
            <h1 className='h4 primary-color-font '>Company</h1>
            <p className='lead primary-color-font'>About Us</p>
            <p className='lead primary-color-font'>Careers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
