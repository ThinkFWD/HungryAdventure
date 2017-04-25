import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Row } from 'react-bootstrap';
import { currentViator } from '../actions/currentStateAction';
import { viatorBudget } from '../actions/budgetAction';
import Scroll from 'react-scroll';
import StarRatingComponent from 'react-star-rating-component';
const scroll = Scroll.animateScroll;


class ViatorEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: " hide",
      flag: "See More >>",
      added: [],
    }
  }
  
  check = (index) => {
    const first = this.state.added.indexOf(index);
    const last = this.state.added.lastIndexOf(index);
    if (first !== last) {
      this.state.added.splice(first, 1);
      this.state.added.pop();
      return this.state[index] = "";
    }
    this.state[index] = " select";
  }

  add = (event, index) => {
    this.props.currentViator({ event: event })
    setTimeout(() => {
      this.props.viatorBudget(this.props.current)
    }, 1000);
    this.state.added.push(index);
    this.check(index);
  }

  expand = () => {
    this.state.flag === "See More >>" ? (this.setState({flag: "See Less <<"}), this.setState({show: ""})) : (this.setState({flag: "See More >>"}), this.setState({show: " hide"}))
    scroll.scrollMore(500, { delay : 100 });
  }

  render() {
    if (this.props.viator.events === undefined) {
      return (
        <div />
      )
    }

    return (
      <div className="eventsContainer">
        <Row className="rowTitle">
          <Col md={6} xs={6}><h2>Experience</h2></Col>
          <Col md={6} xs={6}><div className="seeAll" onClick={() => this.expand()}>{this.state.flag}</div></Col>
        </Row>
        {this.props.viator.events.map((event, index) => (
          <Col md={6} md={3} key={index} className={"viatorContainer" + (!this.state[index] ? "" : this.state[index]) + ((index > 3) ? this.state.show : "")}>
          <div className="portfolio-box" onClick={() => this.add(event, index)}>
            <img className="eventImg" src={event.image} />
            <div className ="portfolio-box-caption"><span className="glyphicon glyphicon-shopping-cart" /></div> 
          </div>
          <div className="detailsContainer">
            <span className="price infoSpacing">${event.price}</span>
            <span><a className="infoSpacing textGrey" href={event.url}>{event.title}</a></span>
            <div>
              <a className="textGrey" href={event.reviews}>{event.count} Reviews</a>
              <StarRatingComponent
                name="rating"  
                starCount={5}
                value={event.rating}
              />
            </div>
          </div>
        </Col>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, { currentViator, viatorBudget })(ViatorEvents)