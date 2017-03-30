import React from 'react';
import { connect } from 'react-redux'; 

import actions from '../actions/queryAction';

import { fetchUser } from '../actions/userAction';
import { fetchDestinations } from '../actions/destinationsActions';

@connect((store) => {
  return {
  	user: store.user.user,
  	userFetched: store.user.fetched,
  	destinations: store.destinations.destinations,
  }
})

export default class Layout extends React.Component {
  //Loads Immediately
  componentWillMount(){
  	this.props.dispatch(fetchUser()) 
  }

 fetchDestinations(){
  	this.props.dispatch(fetchDestinations())
  }

  render () {
  	const { user, destinations } = this.props;

  	if(!destinations.length) {
  		return <button onClick={this.fetchDestinations.bind(this)}>load destinations</button>
  	} else {
      const mappedDestinations = destinations.map(destination => <li>{destination.text}</li>)

      return <div>
      <h1> {user.name} </h1>
        <ul>{mappedDestinations}</ul>
      </div>
    }
  }
}