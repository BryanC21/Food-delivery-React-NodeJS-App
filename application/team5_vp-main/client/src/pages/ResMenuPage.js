import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantMenu from "./RestaurantMenu";
import axios from 'axios';
import SearchPage from "./Search/SearchPage";

import {useSelector, useDispatch} from 'react-redux';
import { ReactReduxContext } from 'react-redux'

/*Some code magic would happen to see which user is logged in 
and create the correct RestaurantMenu and query our API*/

/*<div>
      <RestaurantMenu restaurantName={temp}></RestaurantMenu>
  </div> */

/* For Denny:
  - Make your own search handler page lol this is just reused cause i did something similar for my page
  - My idea is an in between component like I did here where ResMenuPage comes before RestaurantMenu
  - Make the axios call here
  - Move all the filtering stuff here too and use redux to get things like the dropdown search value in here
  - searchterm is in redux searchReducer
  - 
*/

const ResMenuPage = (props) => {

  const [temp, setTemp] = useState({})
  const searchTerm = useSelector(state => state.searchReducer.searchTerm)

  const getThing = async(s) => {
    const url = `/api/v1/search/items?search=${s}`;
    await axios.get(url)
      .then((response) => {
        console.log(response.data);
        setTemp(response.data.results[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getThing(searchTerm)
  }, [searchTerm]);


  return (
    <div>
      <h1>{searchTerm}</h1>
      <SearchPage {...temp}></SearchPage>
    </div>
  );
}
export default ResMenuPage;
