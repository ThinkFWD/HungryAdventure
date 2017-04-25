import axios from 'axios';

export function fetchHotels(placeObj) {
  return function (dispatch) {
    return axios.get('/api/hotels', {
      params: placeObj })
      .then(response => dispatch({ type: 'FETCH_HOTELS_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_HOTELS_REJECTED', payload: err }));
  };
}
