import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDestinations } from '../actions/destinationsActions';
import DestinationList from '../components/DestinationList';
import Search from './searchForm';


class Destinations extends Component {
// toHistory = (url) => {
//   this.props.history.push(url);
// }

submit = (values) => {
  console.log('------>', values)
  console.log('HISTORY', this.props.history)
  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push('/flights');
   })


}
  render() {
    return (
      <div>
        <Search onSubmit={this.submit}/>
        <h1 className="title"> Hungry Adventure </h1>
        <DestinationList destinations={this.props.destinations} redirect={(url)=>{this.props.history.push(url)}}/>
      </div>
    );
  }
}

const mapStateToProps = ({destinations}) => ({
  destinations: destinations,
});

export default connect(mapStateToProps, {fetchDestinations})(Destinations);
