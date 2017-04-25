import axios from 'axios';

export default function queryDB(profileObj) {
  return function (dispatch) {
    return axios.get('/api/dbQuery', {
      params: profileObj })
      .then(response => dispatch({ type: 'LOAD_PROFILE_FULFILLED', payload: response.data[0] }))
      .catch(err => dispatch({ type: 'LOAD_PROFILE_REJECTED', payload: err }));
  };
}
