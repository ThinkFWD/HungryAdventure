export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_AIRPORTS_FULFILLED' : {
      return { ...state, airportCode: action.payload };
    }
  }
  return state;
}
