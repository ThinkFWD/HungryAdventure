export default function reducer(state = {
  destinations: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_DESTINATION_TOGGLE': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_DESTINATIONS_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_DESTINATIONS_FULFILLED': {
      return { ...state,
        fetching: false,
        fetched: true,
        destinations: action.payload,
      };
    }
  }
  return state;
}
