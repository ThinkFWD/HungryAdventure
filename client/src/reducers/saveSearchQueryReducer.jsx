export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SAVE_SEARCHQUERY_FULLFILLED': {
      return { ...state,
        seachQuery: action.payload,
      };
    }
  }
  return state;
}
