export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_GEO_FULFILLED' : {
      return { ...state, locator: action.payload };
    }
    case 'FETCH_TERMINAL_FULFILLED' : {
      return { ...state, terminal: action.payload };
    }
  }
  return state;
}
