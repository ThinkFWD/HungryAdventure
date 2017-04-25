import axios from 'axios';

export function fetchWeather(weatherObj) {
  return function (dispatch) {
    return axios.get('/api/weather', {
      params: weatherObj })
      .then((response) => {
        return dispatch({ type: 'FETCH_WEATHER_FULFILLED', payload: response.data });
      })
      .catch(err => dispatch({ type: 'FETCH_WEATHER_REJECTED', payload: err }));
  };
}
