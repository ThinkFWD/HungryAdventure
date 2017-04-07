import axios from 'axios';

export function fetchGeo(placeObj, callback) {
  axios.get('/api/geocoder', {
    params: placeObj })
  .then(response => callback(response.data[0]))
  .catch(err => callback(err));
}

