export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_HOTELS_FULLFILLED': {
      return { ...state,
        hotels: action.payload,
      };
    }
    case 'TOGGLE_SELECT_FULLFILLED': {
      if (state.select === action.payload) {
        return { ...state,
          select: undefined,
        };
      }
      return { ...state,
        select: action.payload,
      };
    }
  }
  return state;
}
