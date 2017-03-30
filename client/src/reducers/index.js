import { combineReducers } from 'redux';

import destinations from './destinationsReducer';
import user from './userReducer';
import query from './queryReducer';

export default combineReducers({
  destinations,
  user,
  query,
});

