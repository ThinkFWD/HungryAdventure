import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import destination from './destinationReducer';


const rootReducer = combineReducers ({
  destinations,
  destination,
  form: formReducer,
});

export default rootReducer;
