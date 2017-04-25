export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_FROMMERS_FULFILLED': {
      return { ...state, description: action.payload };
    }
  }
  return state;
}
