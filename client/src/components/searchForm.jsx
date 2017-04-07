import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import DropdownList from '../../../node_modules/react-widgets/lib/DropdownList'
import DateTimePicker from '../../../node_modules/react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from '../../../node_modules/react-widgets/lib/localizers/moment'
import { BrowserRouter as Router, Link } from 'react-router-dom'
//import '../../../node_modules/react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment)

const colors = [ { color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' } ]


const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />

let ReactWidgetsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="budget">Budget</label>
        <Field name="budget" component="input" type="text"/>
      </div>
      <div>
        <label>Start Date</label>
        <Field
          name="start_date"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>
       <div>
        <label>Arrival Date</label>
        <Field
          name="arrival_date"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}><Link to='/work'> Submit </Link></button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}

ReactWidgetsForm = reduxForm({
  form: 'reactWidgets'  // a unique identifier for this form
})(ReactWidgetsForm)

// (state, action,)
export default connect (null, null)(ReactWidgetsForm)

