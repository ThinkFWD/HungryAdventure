import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { fetchGeo } from '../actions/geoAction';
const  API = require('../keys/mapsKey.js');

const AnyReactComponent = ({ text }) => <div className="mapsText">{text}</div>;

export default class GoogleMaps extends Component {


   componentWillMount() {
    fetchGeo({location: 'paris'}, function({ latitude, longitude }){
      console.log(latitude, longitude)
    })
  };

  static defaultProps = {
    center: {lat: 40.7127837, lng: -74.0059413},
    zoom: 15
  };
  render() {

    return (
      <div className="maps">
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{key: API.googleMaps()}}
      >
        <AnyReactComponent
          lat={40.714392}
          lng={-74.006649}
          text={'THIS IS YOUR PLACE'}
        />

      </GoogleMapReact>
      </div>
    );
  }
}
