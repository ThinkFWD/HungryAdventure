//+++++ REACT SPECIFIC/REDUX
import React, { PropTypes } from 'react';

//+++++ PLUGIN
import DataTimePicker from 'react-widgets/lib/DateTimePicker';

//+++++ COMPONENT
import FormField from './FormField';

export default class DataInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired
  }

  shouldComponentUpdate : FormField.shouldFormFieldUpdate;

  render () {
    let {field, label, afterChange, ...inputProps } = this.props;
    
    if (afterChange) {
      onChange = function (...args) {
      	field.onChange(...args)
      	afterChange(...args)
      }
    }
    return
    <FormField field={field} inputProps={inputProps} label={label}>
      <DateTimePicker
        {...inputProps}
        format="dd/MM/yyyy"
        name={field.name}
        onChange={onChange}
        time={false}
        value={field.value}
      />
    </FormField>
  }
}