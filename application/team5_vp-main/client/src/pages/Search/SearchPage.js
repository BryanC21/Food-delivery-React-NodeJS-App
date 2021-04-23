import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faMapMarkerAlt);

const SearchPage = (props) => {
  const {
    restaurant_name,
    restaurant_logo,
    cuisine_type,
    address,
    dollar_sign,
  } = props;

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
          <h6>
            {dollar_sign} - {cuisine_type}
          </h6>
          <p className='card-text'>
            <FontAwesomeIcon
              className='primary-color-font'
              icon={faMapMarkerAlt}
              size='1x'
            />
            <span className='mx-2'>{address}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
