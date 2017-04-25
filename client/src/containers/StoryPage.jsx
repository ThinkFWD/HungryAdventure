import React, { Component } from 'react';
import { connect } from 'react-redux';
import DonutChart from 'react-donut-chart';
import { Col, Checkbox } from 'react-bootstrap';
import GoogleMaps from './GoogleMaps';
import { pinArray, yelpPrice } from '../../utils/storyPageHelpers';

class StoryPage extends Component {
   componentWillMount() {
    window.scrollTo(0, 0);
   }

  render() {
    const budget = ~~(this.props.budget.original);
    const flightCost = ~~(this.props.budget.flight) || 0;
    const hotelCost = ~~(this.props.budget.hotel) || 0;
    const activityCost = ~~(this.props.budget.viatorEvents) || 0;
    const foodCost = ~~(this.props.budget.yelpEvents) || 0;
    const totalBudget = ~~(budget - flightCost - hotelCost - activityCost - foodCost);
    const mapArray = pinArray(this.props);

    return (
      <div className="parallaxContainer">
        <section
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.props.destination.imageUrl[1] || this.props.destination.imageUrl[0]}) center center no-repeat fixed`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="storyCity">{this.props.destination.city}</h1>
          <div className="storyMap">
            <GoogleMaps locator={this.props.locator} mapArray={mapArray} />
          </div>
          <div className="blankContainer">
            <div className="container">
              <Col sm={10}>
                <div className="">
                  <h3 className="price-title text-aquamarine h3">Flight</h3>
                  <h3 className="text-white h3">${this.props.destination.price}</h3>
                  <div className="clearfix" />
                  <div className="text-white rule">
                    <p>{this.props.destination.originTerminal} to {this.props.destination.IataCode}</p>
                    <p>{this.props.destination.carrier}</p>
                    <p>{this.props.destination.arrivalDate} until {this.props.destination.departureDate}</p>
                  </div>
                  <a href={this.props.destination.url} rel="noopener noreferrer" target="_blank" className="btn-solid" style={{ borderRadius: '0' }}>Buy</a>

                </div>
              </Col>
            </div>
          </div>
          {this.props.hotel.url ?
            <div className="infoContainer" >
              <div className="container">
                <Col sm={10}>
                  <h3 className="price-title text-aquamarine h3">Hotel</h3>
                  <h3 className="text-white h3">${this.props.hotel.price}</h3>
                  <div className="clearfix" />
                  <div className="text-white rule">
                    <p>{this.props.hotel.hotel}</p>
                    <p>{this.props.hotel.neighborhood || this.props.destination.city}</p>
                    <p>{this.props.hotel.address}</p>
                  </div>
                  <a href={this.props.hotel.url} rel="noopener noreferrer" target="_blank" className="btn-solid" style={{ borderRadius: '0' }}>Buy</a>
           
                </Col>
              </div>
            </div>
          : <div /> }
          {this.props.yelpEvents.length > 0 ?
            <div className="blankContainer">
              <div className="container">
                <Col sm={10}>
                  <h3 className="price-title text-aquamarine h3">Restaurants</h3>
                  {this.props.yelpEvents.map((event, i) =>
                    <div key={event.name}>
                      <h3 className="text-white h3">~${yelpPrice(event.price)}</h3>
                      <div className="clearfix" />
                      <div className="text-white rule">
                        <p>{event.name}</p>
                        <p>{event.location.address1} {event.location.city} {event.location.state}, {event.location.country} {event.location.zip_code}</p>
                        <p>{event.phone}</p>
                      </div>
                      <a href={event.url} rel="noopener noreferrer" target="_blank" className="btn-solid" style={{ borderRadius: '0' }}>Link</a>
        
                      {i < this.props.yelpEvents.length - 1 ?
                        <div className="space" />
                        : <div /> }
                    </div>)}
                </Col>
              </div>
            </div>
          : '' }
          {this.props.viatorEvents.length > 0 ?
            <div className="infoContainer">
              <div className="container">
                <Col sm={10}>
                  <h3 className="price-title text-aquamarine h3">Events</h3>
                  {this.props.viatorEvents.map((event, i) =>
                    <div key={event.title}>
                      <h3 className="text-white h3">${event.price}</h3>
                      <div className="clearfix" />
                      <div className="text-white rule">
                        {event.title}
                      </div>
                      <a href={event.url} rel="noopener noreferrer" target="_blank" className="btn-solid" style={{ borderRadius: '0' }}>Buy</a>

                      {i < this.props.viatorEvents.length - 1 ?
                        <div className="space" />
                        : <div /> }
                    </div>)}
                </Col>
              </div>
            </div>
          : '' }
          <div className="blankContainer">
            <div className="container" style={{ textAlign: 'center' }}>
              <h3 className="h3">Budget</h3>
              <DonutChart
                data={[{ label: `Remaining ( $ ${totalBudget} )`,
                  value: totalBudget,
                  isEmpty: true,
                },
                { label: ` Hotel ( $ ${hotelCost} )`,
                  value: hotelCost },
                { label: ` Flight ( $ ${flightCost} )`,
                  value: flightCost },
                { label: `Attractions ( $ ${activityCost} )`,
                  value: activityCost },
                { label: `Food ( $ ${foodCost} )`,
                  value: foodCost,
                },
                ]} height={300} width={300} legend={false} className="storyDonut"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ current, geo, budget }) => ({
  ...current,
  ...geo,
  geo,
  budget,
  current,
});

export default connect(mapStateToProps, null)(StoryPage);
