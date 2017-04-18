import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Row } from 'react-bootstrap';
import { currentViator } from '../actions/currentStateAction';
import { viatorBudget } from '../actions/budgetAction';
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;


class ViatorEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: " hide",
      flag: true
    }
  }


  add = (event) => {
    this.props.currentViator({ event: event })
    setTimeout(() => {
      this.props.viatorBudget(this.props.current)
    }, 1000)
  }

  expand = () => {
    if (this.state.flag) {
      this.setState({show: ""});
      this.setState({flag: false});
    } else if (!this.state.flag) {
      this.setState({show: " hide"});
      this.setState({flag: true});
    }
    scroll.scrollMore(700, { delay : 100 });
  }

  render() {
    if (this.props.viator.events === undefined) {
      return (
        <div>No Viator Events</div>
      )
    }
    return (
      <div className="eventsContainer">
        <Row className="rowTitle">
          <Col sm={6}><h2>Experience</h2></Col>
          <Col sm={6}><div className="seeAll" onClick={() => this.expand()}>See all >></div></Col>
        </Row>
        {this.props.viator.events.map((event, index) => (
          <Col sm={6} md={3} key={index} className={"eventContainer" + ((index > 3) ? this.state.show : "")}>
          <img className="eventImg" src={event.image} onClick={() => this.add(event)}/>
          <div>
          <span className="price">${event.price}</span>
          <a href={`https://www.viator.com/${event.url}`}>{event.title}</a>
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