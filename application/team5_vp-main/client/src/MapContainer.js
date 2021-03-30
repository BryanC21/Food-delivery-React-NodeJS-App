import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
//const NodeGeocoder = require('node-geocoder');
//var geocoder = require('google-geocoder');
//const net = require('net');
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

/**
 * After VP: make this so I can pass a parameter of address to get that map
 */

const mapStyles = {
  margin: "auto",
  width: "40%",
  height: "30%",
  position: "relative",
  top: "53%",
  left: "30%",
};

function MapContainer(props) {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [latLon, setLatLon] = useState({ lat: 1, lng: 1 });

  const getCoordinates = async () => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${props.name}&key=AIzaSyDgxMmRpNuAUHiSSHFCBhjRlQImItrHrsc`;
    await axios
      .get(url)
      .then((response) => {
        console.log(JSON.stringify(response.data.results[0].geometry.location));
        setLatLon(response.data.results[0].geometry.location);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCoordinates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMarkerClick = (props, marker) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowInfoWindow(true);
  };

  const onClose = () => {
    if (showInfoWindow) {
      setShowInfoWindow(false);
      setActiveMarker(null);
    }
  };

  const { google } = props;

  return (
    <Map
      google={google}
      zoom={15}
      style={mapStyles}
      initialCenter={latLon}
      center={latLon}
    >
      <Marker onClick={onMarkerClick} name={props.name} position={latLon} />
      <InfoWindow
        marker={activeMarker}
        visible={showInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4 className='map-name'>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDgxMmRpNuAUHiSSHFCBhjRlQImItrHrsc",
})(MapContainer);
