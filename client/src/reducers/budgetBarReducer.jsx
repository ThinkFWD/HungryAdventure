export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'DESTINATION_IMAGE_FULFILLED' : {
      return { ...state, destination: action.payload.destination };
    }
    case 'HOTEL_IMAGE_FULFILLED' : {
      return { ...state, hotel: action.payload.hotel };
    }
    case 'EVENTS_IMAGE_FULFILLED' : {
      return { ...state, events: action.payload.events };
    }
    case 'RESET': {
      return ({});
    }
  }
  return state;
}
