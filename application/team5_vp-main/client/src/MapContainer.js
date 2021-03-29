import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
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
      initialCenter={{
        lat: 37.72424252726849,
        lng: -122.48015507898837,
      }}
    >
      <Marker onClick={onMarkerClick} name={props.name} />
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
