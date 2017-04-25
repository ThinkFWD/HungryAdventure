import React, { Component } from 'react';
import { connect } from 'react-redux';

class FrommersInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.description}</div>
    );
  }
}

const mapStateToProps = ({ frommers }) => ({
  ...frommers,
});

export default connect(mapStateToProps, null)(FrommersInfo);
