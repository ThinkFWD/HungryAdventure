import axios from 'axios'; // allows you to fire off an XHR (XMLHttpRequest) request

export function fetchDestinations() {
  return function (dispatch) {
    axios.get('http://rest.learncode.academy/api/test123/tweets')
      .then((response) => {
        dispatch({ type: 'FETCH_DESTINATION_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_DESTINATION_REJECTED', payload: err });
      });
  };
}
