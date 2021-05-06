import React, { useState, useEffect }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { GoogleApiWrapper } from "google-maps-react";
import { Loader } from "@googlemaps/js-api-loader"
library.add(faMapMarkerAlt);

const SearchPage = (props) => {

  const [distance, setDistance] = useState('');

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyDgxMmRpNuAUHiSSHFCBhjRlQImItrHrsc",
      version: "weekly",
    });
    loader.load().then(() => {
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: ['SFSU, 94132'],
          destinations: [address],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.IMPERIAL
        }, (response, status) => {
          setDistance(response.rows[0].elements[0].distance.text)
        });
  
    });
    const { google } = props;
  }, []);

  const {
    restaurant_name,
    restaurant_logo,
    cuisine_type,
    address,
    dollar_sign,
  } = props;

  return (
    <div>
      <div className='card mb-4 shadow-sm'>
        <img
          src={restaurant_logo}
          className='card-img-top card-img'
          alt='logo'
        />
        <div className='card-body card-img'>
          <h5 className='card-title'>{restaurant_name}</h5>
          <h6>
            {dollar_sign} - {cuisine_type} - {distance}
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyDgxMmRpNuAUHiSSHFCBhjRlQImItrHrsc",
})(SearchPage);
