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
          <div className='col-sm-6'>
            <h1 className='h4 primary-color-font '>Cusines</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
