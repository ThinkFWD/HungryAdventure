//+++++ REACT SPECIFIC/REDUX
import React, { PropTypes } from 'react';

//+++++ STYLE
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import classNames from 'classnames';


//+++++ Methods

//@-- Performs comparison to determine if prop
//@-- of the context form field component has changed. 
const shouldFormFieldUpdate = (nextprops) => {
  let keys = Object.keys(this.props),
    nextKeys = Object.keys(nextProps);

  if (keys.length !== nextKeys.length) {
  	return true;
  }

  let nextHasOwnProperty = Object.prototype.hasOwnProperty.bind(nextProps);
  for (let i = 0; i < keys.length; i++) {
  	let key = keys[i];
  	if (!nextHasOwnProperty(key) || 
  	  key === 'field' ? !fieldShallowEquals(this.props[key], nextProps[key]) 
  	    : this.props[key] !== nextProps[key]) {
      return true
    }
  }
  return false
}

export default class FormField extends React.Component {
  static propTypes =  {
  	field: PropTypes.object, 
    inputClass: PropTypes.string, 
    inputProps: PropTypes.object, 
    label: PropTypes.string,

  }

  getDefaultProps() {
    return {
      field: {},
      inputProps: {},
    };
  }

  render() {
    const { field, inputClass, inputProps, label } = this.props;
    const error = field.touched && field.error;
    return(<Col sm={6}>
      <Row className={classNames('form-group', { 'has-error': error})}>
        <Col sm={4} className="control-label">
          <label htmlFor={inputProps.id}>{label}</label>
        </Col>
        <Col sm={8} className={inputClass}>
          {this.props.children}
          {error && <p className="help-block" style={{marginBottom: 0}}>{error}</p>}
        </Col>
      </Row>
    </Col>
     );
  }
}

