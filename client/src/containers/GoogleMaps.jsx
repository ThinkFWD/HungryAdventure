import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { HotelPin, YelpPin, FlightPin } from '../components/Pins';
import { googleMaps } from '../keys/mapsKey';

class GoogleMaps extends Component {


  render() {
    if (this.props.locator === undefined) {
      return (
        <div>loading</div>
      );
    }
    return (
      <GoogleMapReact
        options={{ scrollwheel: false }}
        defaultCenter={{ lat: this.props.locator.latitude, lng: this.props.locator.longitude }}
        defaultZoom={11}
        bootstrapURLKeys={{ key: googleMaps() }}
      >
        {this.props.mapArray.map((elem, index) => {
          if (elem.latitude) {
            return (
              <FlightPin
                lat={elem.latitude}
                lng={elem.longitude}
                key={elem.city}
              />);
          } else if (elem.lat) {
            return (<HotelPin
              lat={elem.lat}
              lng={elem.lng}
              key={elem.id}
            />);
          }
          return (<YelpPin
            lat={elem.coordinates.latitude}
            lng={elem.coordinates.longitude}
            key={elem.name}
          />);
        })}
      </GoogleMapReact>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(GoogleMaps);
