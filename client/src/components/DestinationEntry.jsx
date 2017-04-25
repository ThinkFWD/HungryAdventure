import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Carousel } from 'react-bootstrap';
import { destinationSet } from '../actions/destinationAction';
import { fetchGeo, fetchTerminal } from '../actions/geoAction';
import { fetchHotels } from '../actions/hotelAction';
import { flightBudget } from '../actions/budgetAction';
import { history, Link } from 'react-router-dom'
import { browserHistory } from 'react-router';
import { fetchEvents } from '../actions/yelpAction'
import { fetchWeather } from '../actions/weatherAction'
import { currentDestination } from '../actions/currentStateAction';
import { destinationImage } from '../actions/budgetBarAction';
import { fetchViator } from '../actions/viatorAction';
import { fetchFrommers } from '../actions/frommersAction';



class DestinationEntry extends Component {

constructor (props){
  super(props);
}

handleSelect = (destination, geo) => {
  this.props.destinationSet(destination);
  this.props.flightBudget({ price: destination.price, original: Number(this.props.budget.original) });
  this.props.fetchTerminal({ terminal: destination.IataCode })
  this.props.fetchGeo({ city: destination.city, country: destination.country })
    .then((result) => {
      this.props.fetchWeather({
        latitude: result.payload.latitude,
        longitude: result.payload.longitude,
        time: destination.arrivalDate,
      })
      this.props.fetchHotels({
        latitude: result.payload.latitude,
        longitude: result.payload.longitude,
      })
    });
  this.props.destinationImage({ destination: destination.imageUrl[0] })
  this.props.fetchEvents({ location: destination.city });
  this.props.fetchViator({ location: destination.city })
  this.props.currentDestination({ destination: destination });
  this.props.fetchFrommers({ location: destination.city });
  this.props.redirect('/destination');
}

getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


render () {


  return (
  <section className="no-padding" id="locations">
    {this.props.destinations.destinations.map((destination, index) => (
       <div className="col-lg-4 col-sm-6" key={destination.city+index}>
            <div className="event-card" onClick={ ()=> {this.handleSelect(destination, this.props.geo)}} >
                <img src={destination.imageUrl[this.getRandomInt(0,destination.imageUrl.length)]}
                  className="customImg" alt="Image not found" onError={(e)=>{e.target.src='https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg';}}/>
                  <div className="card-text"> ${destination.price} {destination.city} , {destination.country}</div>
            </div>
        </div>
      ))}
  </section>
    )
  }
}
const mapStateToProps = ({destinations, budget, geo, bar}) => ({
  destinations,
  budget,
  geo,
  bar,
});


export default connect(mapStateToProps , { destinationSet, browserHistory, fetchGeo, fetchTerminal, fetchHotels, flightBudget, fetchEvents, fetchWeather, currentDestination, destinationImage, fetchViator, fetchFrommers } )(DestinationEntry);
