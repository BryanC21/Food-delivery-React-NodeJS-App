import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../images/logo_letters.png";
import axios from "axios";
import SearchPage from "../../pages/Search/SearchPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import {useSelector, useDispatch} from 'react-redux';
import {setSearchTerm} from '../../redux/actions/searchActions';

library.add(faSearch, faCartPlus);

function Navbar() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [loadRestaurants, setLoadRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("All");

  useEffect(() => {
    loadAllRestaurants();
  }, []);

  const loadAllRestaurants = async () => {
    const url = "/api/v1/restaurants/getAllRestaurants";
    await axios.get(url).then((response) => {
      const { restaurants } = response.data;
      setLoadRestaurants(restaurants);
    });
  };

  // using the search button
  const setFilter = () => {
    if (searchType === "All") {
      setFilterRestaurant(
        loadRestaurants.filter((restaurants) =>
          restaurants.restaurant_name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    } else {
      setFilterRestaurant(
        loadRestaurants.filter(
          (restaurants) =>
            restaurants.cuisine_type
              .toLowerCase()
              .includes(searchType.toLowerCase()) &&
            restaurants.restaurant_name
              .toLowerCase()
              .includes(search.toLowerCase())
        )
      );
    }
  };
  const handleSearches = async (e) => {
    //e.preventDefault();
    /*const url = `/api/v1/search/items?search=${search.toLowerCase()}`;
    await axios
      .get(url)
      .then((response) => {
        setFilter(response.data);
        console.log(response.data);
        history.push("/HP/search_result");
        filterRestaurant.map((restaurant, id) => (
          <SearchPage key={id} {...restaurant} />
        ));
      })
      .catch((error) => {
        console.log(error);
      });*/
      
  };

  const handleSelector = (event) => {
    // console.log(event.target.value)
    setSearchType(event.target.value);
  };

  return (
    <div className='navbar navbar-light bg-light '>
      <div className='container'>
        <Link className='navbar-brand'>
          <img src={Logo} alt='logo' />
        </Link>
        <form className='d-flex container-sm '>
          <div className='dropdown me-3'>
            <select
              className='btn btn-secondary dropdown-toggle'
              onChange={handleSelector}
            >
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
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to={{pathname: '/HP/RestaurantMenu', param1: search }}>
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
