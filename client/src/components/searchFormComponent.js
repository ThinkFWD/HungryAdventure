import React, { PropTypes, Component } from 'react';



export default class searchForm extends Component {
  displayName: 'Form'

  propType: {
    children: PropTypes.node,
    values: PropTypes.object,
    update: PropTypes.func,
    reset: PropType.func,
    onSubmit: PropTypes.func
  }

  render () {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
};