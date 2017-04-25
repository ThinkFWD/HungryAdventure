import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { fetchWeather } from '../actions/weatherAction';

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.weather.weather === undefined) {
      return (
        <div>loading</div>
      );
    }
    const date = (new Date(this.props.destination.arrivalDate)).toString().slice(0, 15);
    const herojpg = this.props.destination.imageUrl[1] || this.props.destination.imageUrl[0];
    return (
      <div id="card" className="weather">
        <div className="city-selected">
          <article>
            <div className="info">
              <h5>{date}</h5>
              <h4 className="city">{this.props.destination.city}</h4>
              <h3>{this.props.weather.weather.highTemp}°F / {this.props.weather.weather.lowTemp}°F</h3>
              <br />
              <h6>{this.props.weather.weather.summary}</h6>
            </div>
          </article>
          <figure style={{ backgroundImage: `url(${herojpg})` }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(Weather);
