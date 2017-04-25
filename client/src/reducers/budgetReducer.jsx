export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'GET_BUDGET_FULFILLED' : {
      return { ...state,
        original: action.payload,
        loading: true };
    }
    case 'FLIGHT_BUDGET_FULFILLED' : {
      return { ...state, flight: action.payload.flight };
    }
    case 'HOTEL_BUDGET_FULFILLED' : {
      if (state.id === action.payload.id) {
        return { ...state, hotel: 0, id: undefined };
      }
      return { ...state, hotel: action.payload.hotel, id: action.payload.id };
    }
    case 'VIATOR_BUDGET_FULFILLED' : {
      let viatorTotal;
      if (action.payload.viatorEvents.length === 1) {
        viatorTotal = action.payload.viatorEvents[0].price;
      } else if (action.payload.viatorEvents.length === 0) {
        viatorTotal = 0;
      } else {
        viatorTotal = action.payload.viatorEvents.reduce((a, b) => a + b.price, 0);
      }
      return { ...state, viatorEvents: viatorTotal };
    }
    case 'YELP_BUDGET_FULFILLED' : {
      let yelpTotal;
      const converted = [];
      if (action.payload.yelpEvents.length === 0) {
        yelpTotal = 0;
      } else {
        action.payload.yelpEvents.forEach((event) => {
          if (event.price === '$') {
            converted.push(10);
          } else if (event.price === '$$') {
            converted.push(20);
          } else if (event.price === '$$$') {
            converted.push(45);
          } else {
            converted.push(100);
          }
        });
        yelpTotal = converted.reduce((a, b) => a + b);
      }
      return { ...state, yelpEvents: yelpTotal };
    }
    case 'RESET': {
      return { ...state, flight: undefined, hotel: undefined, yelpEvents: undefined, viatorEvents: undefined };
    }
  }
  return state;
}
