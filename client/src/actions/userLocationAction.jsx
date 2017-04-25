import axios from 'axios';

export function getGoogleData(airportObj) {
  return function (dispatch) {
    return axios.get('/api/google', {
      params: airportObj })
      .then((response) => {
        return dispatch({ type: 'FETCH_AIRPORTS_FULFILLED', payload: response.data });
      })
      .catch(err => dispatch({ type: 'FETCH_AIRPORTS_REJECTED', payload: err }));
  };
}
