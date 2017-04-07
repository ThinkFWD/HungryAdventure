import axios from 'axios';

export function fetchDestinations(searchObj) {
  return function (dispatch) {
    return axios.get('/api/anywhere', {
      params: searchObj })
      .then((response) => {
        return dispatch({ type: 'FETCH_DESTINATIONS_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        return dispatch({ type: 'FETCH_DESTINATIONS_REJECTED', payload: err });
      })
  };
}