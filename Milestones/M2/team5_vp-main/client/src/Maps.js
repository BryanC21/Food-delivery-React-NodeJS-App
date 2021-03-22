import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

/**
 * After VP: make this so I can pass a parameter of address to get that map
 */

const mapStyles = {
    margin: "auto",
    width: '50%',
    height: '50%'
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 37.72424252726849,
                        lng: -122.48015507898837
                    }
                }
            >

                <Marker
                    onClick={this.onMarkerClick}
                    name={'SFSU'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
                
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB-2B4T7YdkI-_RSKtU6IA_h5XHILEi7QY'
})(MapContainer);