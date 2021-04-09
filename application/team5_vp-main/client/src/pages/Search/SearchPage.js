import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = (props) => {
  const { restaurant_name, restaurant_logo, address } = props;

  return (
    <div className='col-sm-6'>
      <div className='card mb-4 shadow-sm'>
        <img
          src={restaurant_logo}
          className='card-img-top card-img'
          alt='logo'
        />
        <div className='card-body card-img'>
          <h5 className='card-title'>{restaurant_name}</h5>
          <p className='card-text'>{address}</p>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
