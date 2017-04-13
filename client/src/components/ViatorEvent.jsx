import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentViator } from '../actions/currentState';


class ViatorEvent extends Component {
  constructor(props) {
    super(props)
  }

  add = (event) => {
    this.props.currentViator({ event: event })
  }

  render() {
    const link = `https://www.viator.com/${this.props.event.url}`
    return (
      <div>
        <button onClick={ ()=> this.add(this.props.event) }>Add</button>
        <h1>{this.props.event.title}</h1>
        <h6>$ {this.props.event.price}</h6>
        <img src={this.props.event.image} />
        <a href={link}>Link</a>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, { currentViator })(ViatorEvent);