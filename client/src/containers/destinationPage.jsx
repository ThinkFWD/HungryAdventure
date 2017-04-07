import React, { Component } from 'react';
import { connect } from 'react-redux';

//+++++ Imported Components


class destinationPage extends Component {

  constructor (props){
  super(props);
}

  render() {
    return (<div>
        {/*< HEADERIMG />*/}
        {/*< INFO Component />*/}
        {/*< Weather Component />*/}
        {/*< Map Component />*/}
        <h1> HELLO WORLD </h1>
        <h1>{this.props.price}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({destination}) => ({
  ...destination,
});

export default connect(mapStateToProps, null )(destinationPage);
