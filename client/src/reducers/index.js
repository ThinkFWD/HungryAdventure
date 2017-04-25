import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import destination from './destinationReducer';
import geo from './geoReducer';
import hotels from './hotelReducer';
import budget from './budgetReducer';
import bar from './budgetBarReducer';
import yelp from './yelpReducer';
import profile from './facebookReducer';
import weather from './weatherReducer';
import current from './currentStateReducer';
import saveQuery from './saveSearchQueryReducer';
import viator from './viatorReducer';
import toggle from './toggleReducer';
import frommers from './frommersReducer';
import airportCode from './userLocationReducer';


const appReducer = combineReducers({
  destinations,
  profile,
  destination,
  geo,
  hotels,
  budget,
  bar,
  yelp,
  current,
  form: formReducer,
  weather,
  saveQuery,
  viator,
  toggle,
  frommers,
  airportCode
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
