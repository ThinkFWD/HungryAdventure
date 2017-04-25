export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_FULFILLED' : {
      return { ...state, weather: action.payload };
    }
  }
  return state;
}
