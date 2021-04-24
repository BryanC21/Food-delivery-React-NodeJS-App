import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_letters.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/actions/searchActions";
import axios from "axios";
import { Dropdown } from "react-bootstrap";

library.add(faSearch, faCartPlus);

function Navbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [loadCuisineType, setLoadCuisineType] = useState([]);

  useEffect(() => {
    loadAllRestaurants();
  }, []);

  const loadAllRestaurants = async () => {
    const url = "/api/v1/restaurants/getAllCuisineType";
    axios.get(url).then((res) => {
      const { restaurants } = res.data;
      console.log(restaurants);
      setLoadCuisineType(restaurants);
    });
  };

  const LoadCuisineTypeCuisine = ({ cuisine_type }) => {
    return <option value={cuisine_type}>{cuisine_type}</option>;
  };

  return (
    <div className='navbar navbar-light bg-light '>
      <div className='container'>
        <Link className='navbar-brand' to='/HP/homepage'>
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
                <optgroup>
                  <option value='Cuisines'>Cuisine</option>
                  {loadCuisineType.map((restaurant, id) => (
                    <LoadCuisineTypeCuisine {...restaurant} key={id} />
                  ))}
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
        <nav className='nav '>
          <Dropdown className='dropdown'>
            <Dropdown.Toggle
              variant='btn btn btn-outline-primary my-3 '
              id='dropdown-basic'
            >
              Login
            </Dropdown.Toggle>
            <ul className='nav '>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <span className='primary-color-font me-3' to='#'>
                    Login
                  </span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className='primary-color-font me-3' to='#'>
                    Restaurant Login
                  </span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className='primary-color-font me-3' to='#'>
                    Deliverer Login
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </ul>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              variant='btn btn btn-outline-primary my-3 '
              id='dropdown-basic'
            >
              Register
            </Dropdown.Toggle>
            <ul className='nav '>
              <Dropdown.Menu>
                <Dropdown.Item to='#'>
                  <span className='primary-color-font me-3'>
                    Register For Free
                  </span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className='primary-color-font me-3' to='#'>
                    Restaurant Register
                  </span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className='primary-color-font me-3' to='#'>
                    Deliverer Register
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </ul>
          </Dropdown>
          <ul className='py-3'>
            <Link to={{ pathname: "/HP/customerCart", param1: search }}>
              <button className='nav-link btn btn-link nav-active' to='#'>
                <FontAwesomeIcon icon={faCartPlus} size='2x' />
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
