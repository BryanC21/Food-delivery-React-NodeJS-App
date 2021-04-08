import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_letters.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSearch, faCartPlus);

function Navbar() {
  return (
    <div className='navbar navbar-light bg-light '>
      <div className='container'>
        <Link className='navbar-brand'>
          <img src={Logo} alt='logo' />
        </Link>
        <form className='d-flex container-sm '>
          <div className='dropdown me-3'>
            <select className='btn btn-secondary dropdown-toggle'>
              <optgroup label='Cuisine'>
                <option value='All'>All</option>
                <option value='American'>American</option>
                <option value='Italian'>Italian</option>
                <option value='Korean'>Korean</option>
                <option value='Chinese'>Chinese</option>
              </optgroup>
            </select>
          </div>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />

          <button className='btn btn-search btn-outline-success' type='submit'>
            <FontAwesomeIcon icon={faSearch} size='1x' />
          </button>
        </form>
        <nav className='nav py-2 '>
          <ul class='nav '>
            <li class='nav-item'>
              <Link
                class='nav-link nav-active active'
                aria-current='page'
                to='#'
              >
                Home
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link btn btn btn-outline-primary me-3' to='#'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link  btn btn-primary me-3' to='#'>
                Register
              </Link>
            </li>
            <li className='nav-item'>
              <button className='nav-link btn btn-link nav-active' to='#'>
                <FontAwesomeIcon icon={faCartPlus} size='2x' />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
