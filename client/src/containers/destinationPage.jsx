import React, { Component } from 'react';
import { connect } from 'react-redux';
// +++++ Imported Components
import { Link } from 'react-router-dom';
import { Col, Button, Modal } from 'react-bootstrap';
import GoogleMaps from './GoogleMaps';
import HotelList from '../components/HotelList';
import Weather from '../components/weather';
import BudgetBar from '../components/budgetBar';
import FrommersInfo from './FrommersInfo';
import ViatorEvents from './ViatorEvents';
import YelpEvents from './YelpEvents';
import Auth from './FacebookAuth';
import { pinArray } from '../../utils/storyPageHelpers';

// Charts
import DonutChart from 'react-donut-chart';

class destinationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
     showModal: false,
     title: `${this.props.current.destination.city}, ${this.props.current.destination.country}`,
     info: "",
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  more(list) {
    if(list.city) {
      return (
        <div>
          <h4>Terminal: {list.originTerminal}</h4>
          <h4>Price: ${list.price}</h4>
          <h4>Arrival: {list.arrivalDate}</h4>
          <h4>Departure: {list.departureDate}</h4>
          <h4><a href={list.url} target="_blank">More Info</a></h4>
        </div>
      )
    } else if (list.hotel) {
      return (
        <div>
          <h4>Hotel: {list.hotel}</h4>
          <h4>Pirce: ${list.price}</h4>
          <h4>Address: {list.address}</h4>
          <h4><a href={list.url} target="_blank">More Info</a></h4>
        </div>
      )
    } else if (Array.isArray(list) && list[0].name) {
        return list.map((event, i) => (
          <div key={i}>
            <h6>{event.name}</h6>
            <h6>{event.categories[0].title}</h6>
            <h6>Price: {event.price}</h6>
            <h6>Rating: {event.rating}</h6>
            <h6><a href={event.url} target="_blank">More Info</a></h6>
            < br/>
          </div>
        ))
    } else if (Array.isArray(list) && list[0].title) {
        return list.map((event, i) => (
          <div key={i}>
            <h6>{event.title}</h6>
            <h6>Price: ${event.price}</h6>
            <h6>Rating: {event.rating}</h6>
            <h6><a href={event.url } target="_blank">More Info</a></h6>
            < br/>
          </div>
        ))
    }
  }

  open(obj) {
    this.setState({ showModal: true });
    this.setState({info: this.more(obj) });
  }

  close() {
    this.setState({ showModal: false });
  }

  loadDestination = () => {
    if(this.props.current.destination.imageUrl.length > 0){
      return <div onClick={() => this.open(this.props.current.destination)}><img className="circleAdd circleAddDest" style={{ marginTop: '9vw',}} src={this.props.current.destination.imageUrl[0]}></img></div>
    }
  }

  loadHotel = () => {
    if(this.props.current.hotel.pictures.length > 0){
      return <div onClick={() => this.open(this.props.current.hotel)}><img className="circleAdd circleAddHotel" style={{ marginTop: '17vw',}} src={this.props.current.hotel.pictures[0]}></img></div>
    }
  }

  loadEvents = () => {
    if(this.props.current.viatorEvents.length > 0){
        return <div onClick={() => this.open(this.props.current.viatorEvents)}><img className="circleAdd circleAddEvent" style={{ marginTop: "25vw",}} src={this.props.current.viatorEvents[0].image}></img></div>
    }
  }

 loadFood = () => {
    if(this.props.current.yelpEvents.length > 0){
        return <div onClick={() => this.open(this.props.current.yelpEvents)}><img className="circleAdd circleAddFood" style={{ marginTop: "33vw",}} src={this.props.current.yelpEvents[0].image_url}></img></div>
    }
  }

  render() {
    const budget = ~~(this.props.budget.original);
    const flightCost = ~~(this.props.budget.flight) || 0;
    const hotelCost = ~~(this.props.budget.hotel) || 0;
    const activityCost = ~~(this.props.budget.viatorEvents) || 0;
    const foodCost = ~~(this.props.budget.yelpEvents) || 0;
    const totalBudget = ~~(budget - flightCost - hotelCost - activityCost - foodCost);
    const mapArray = pinArray(this.props);

    return (<div>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.info}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Link to="/storypage"><div className="circle"><div className="checkoutbutton glyphicon glyphicon-shopping-cart" /></div></Link>
      {this.loadDestination()}
      {this.loadHotel()}
      {this.loadEvents()}
      {this.loadFood()}
      <div
        className="hero" style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${this.props.destination.imageUrl[0]}) no-repeat center center fixed`,
          height: '60%',
          backgroundSize: 'cover',
        }}
      >
        <div className="titleContainer">
          <div className="mobileTitle">
            <h1>Hungry Adventure</h1>
            <hr className="pageHr" />
            <p className="pageTitle">{this.props.destination.city}, {this.props.destination.country}</p>
          </div>
        </div>
      </div>

      <div className="pageContainer">
        <Col sm={4} xs={12} className="weatherPadding mobileSpacing"> <Weather /></Col>
        <Col sm={4} xs={12} className="donut mobileSpacing"> <DonutChart
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
          ]} height={200} width={200} legend={false} className="donutAlign"
        /></Col>
        <Col sm={4} xs={12} className="mobileSpacing fromContainer"><FrommersInfo /></Col>
      </div>

      <Col sm={12} xs={12} className="mapsPadding">
        <div className="maps">
          <GoogleMaps key={Math.random()} locator={this.props.geo.locator} mapArray={mapArray} />
        </div>
      </Col>
      <HotelList hotels={this.props.hotels} destination={this.props.destination} />
      <ViatorEvents />
      <YelpEvents />
      <div className="spaceMe" />
    </div>
    );
  }
}

const mapStateToProps = ({ geo, hotels, destination, budget, current }) => ({
  geo,
  hotels,
  destination,
  budget,
  current,
  ...current,
});

export default connect(mapStateToProps, null)(destinationPage);
