import axios from 'axios';

export function fetchFrommers(location) {
  return function (dispatch) {
    return axios.get('/api/frommers', {
      params: location })
      .then(response => dispatch({ type: 'FETCH_FROMMERS_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_FROMMERS_REJECTED', payload: err }));
  };
}
