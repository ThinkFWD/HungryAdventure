import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import { fetchDestinations } from '../actions/destinationsActions';
import { PageHeader } from 'react-bootstrap';

//Imported Component
import Search from './searchForm';


class Layout extends React.Component {

static propTypes =  {
    destinations: PropTypes.array, 
  }

submit = (values) => {
  console.log('------>', values)
  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push('/flights');
   })
}

  render () {
     return ( <div>
      <center>
      <PageHeader className='pageHeaderBorder'> Hungry Adventure </PageHeader>
      <Search onSubmit={this.submit} />
      </center>
      </div>
    );
  }
}

//Connects to store
const mapStateToProps = ({destinations}) => ({
 destinations: destinations.destinations
})

export default connect(mapStateToProps, { fetchDestinations })(Layout);