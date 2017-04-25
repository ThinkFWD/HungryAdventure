export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_EVENTS_FULFILLED' : {
      return { ...state, events: action.payload };
    }
  }
  return state;
}
