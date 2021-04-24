import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_letters.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/actions/searchActions";
library.add(faSearch, faCartPlus);

function Navbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  return (
    <div className='navbar navbar-light bg-light '>
      <div className='container'>
        <Link className='navbar-brand'>
          <img src={Logo} alt='logo' />
        </Link>
        <form className='d-flex container-sm '>
          <div className='dropdown me-3'>
            <Link
              to={{
                pathname: "/HP/search_result_menu",
                param1: (e) => e.target.value,
              }}
            >
              <select
                className='btn btn-secondary dropdown-toggle'
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              >
                <optgroup label='Cuisine'>
                  <option value='All'>All</option>
                  <option value='American'>American</option>
                  <option value='Italian'>Italian</option>
                  <option value='Korean'>Korean</option>
                  <option value='Chinese'>Chinese</option>
                </optgroup>
              </select>
            </Link>
          </div>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            onChange={(e) => setSearch(e.target.value)}
            maxLength='40'
          />
          <Link to={{ pathname: "/HP/search_result_menu", param1: search }}>
            <button
              className='btn btn-search btn-outline-success'
              type='submit'
              onClick={() => dispatch(setSearchTerm(search))}
            >
              <FontAwesomeIcon icon={faSearch} size='1x' />
            </button>
          </Link>
        </form>
        <nav className='nav py-2 '>
          <ul class='nav '>
            <li class='nav-item'>
              <Link
                class='nav-link nav-active active'
                aria-current='page'
                to='/HP/homepage'
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
              <Link to={{ pathname: "/HP/customerCart", param1: search }}>
                <button className='nav-link btn btn-link nav-active' to='#'>
                  <FontAwesomeIcon icon={faCartPlus} size='2x' />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
