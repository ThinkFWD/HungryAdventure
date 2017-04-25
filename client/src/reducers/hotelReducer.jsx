export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_HOTELS_FULFILLED' : {
      return { ...state, hotels: action.payload };
    }
  }
  return state;
}
