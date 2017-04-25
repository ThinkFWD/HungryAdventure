import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Row } from 'react-bootstrap';
import { currentHotel } from '../actions/currentStateAction';
import { hotelBudget } from '../actions/budgetAction';
import { hotelImage } from '../actions/budgetBarAction';
import { toggleHotels, toggleSelect } from '../actions/toggleAction';
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

class HotelEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: "See More >>",
    }
  }

  add = (hotel, props) => {
    this.props.currentHotel({ hotel });
    this.props.hotelBudget({
      id: hotel.id,
      hotel: hotel.price,
      budget: props.budget,
      arrivalDate: props.destination.arrivalDate,
      departureDate: props.destination.departureDate,
      });
    this.props.hotelImage({ hotel: hotel.pictures[0] });
  }

  toggle = ({ hotels }) => {
    this.props.toggleHotels({ hotels });
    scroll.scrollMore(500, { delay : 100 });
    this.state.flag === "See More >>" ? (this.setState({flag: "See Less <<"})) : (this.setState({flag: "See More >>"}));

  }
  select = (hotel, toggle) => {
    this.props.toggleSelect({ hotel, select: toggle.select })
  }
  clickHotel = (hotel, props) => {
    this.add(hotel, props);
    this.select(hotel, props.toggle);
  }

  render() {
    if (this.props.hotels.hotels === undefined) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        <div className='hotelContainer'>
          <Row className="rowTitle">
            <Col xs={6} md={6}><h2>Hotels</h2></Col>
            <Col xs={6} md={6}><div className="seeAll" onClick={()=> this.toggle(this.props.toggle)}>{this.state.flag}</div></Col>
          </Row>
    
          {this.props.hotels.hotels.map((hotel, index) => (
            <Col md={4}
              key={hotel.id}
              className={
                "pad"
                + ((index >= 3 && !this.props.toggle.hotels) ? " none" : "")
                + ((this.props.toggle.select === hotel.id)? " select" : "")
              }
              onClick={()=> {  this.clickHotel(hotel, this.props) }}
            >            
              <div className="event-card hotel portfolio-box">
                <img className="customImg" alt="" src={hotel.pictures[0]} />
                <div className ="portfolio-box-caption"><div className="iconWrapper"><span className="glyphicon glyphicon-shopping-cart" /></div></div>
                <div className='card-text hotel-text'>
                    <div className="hotelInfo">
                       <span className="infoSpacing">${hotel.price}</span>
                       <span className="infoSpacing">{hotel.hotel}</span>
                      {Array(Math.floor(hotel.rating)).fill(0).map((elem, i) =>
                        <span key={hotel.id + i} className="glyphicon glyphicon-star" />,
                      )}
                      <span className="glyphicons glyphicons-star" />
                    </div>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>
    );
  }
  }

const mapStateToProps = ({ hotels, destination, budget, toggle }) => ({
  hotels,
  destination,
  budget,
  toggle,
});
export default connect(mapStateToProps, { currentHotel, hotelBudget, hotelImage, toggleHotels, toggleSelect })(HotelEntry);
