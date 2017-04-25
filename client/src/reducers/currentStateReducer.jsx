import { skyscanner } from '../keys/skyscanner';

export default function reduce(state = {
  yelpEvents: [{
    image:'',
  }],
  viatorEvents: [],
  destination: {
    imageUrl: [],
  },
  hotel: {
    pictures: [],
  },
}, action) {
  switch (action.type) {
    case 'FETCH_CURRENTDES_FULFILLED' : {
      const url = `http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/US-en/${action.payload.originTerminal}/${action.payload.IataCode}/${action.payload.arrivalDate}/${action.payload.departureDate}?apiKey=${skyscanner()}`;
      const payload = {
        price: action.payload.price,
        arrivalDate: action.payload.arrivalDate,
        departureDate: action.payload.departureDate,
        originTerminal: action.payload.originTerminal,
        city: action.payload.city,
        country: action.payload.country,
        IataCode: action.payload.IataCode,
        carrier: action.payload.carrier,
        imageUrl: action.payload.imageUrl,
        url,
      };
      return { ...state, destination: payload };
    }
    case 'FETCH_CURRENTHOTEL_FULFILLED' : {
      if (state.hotel) {
        if (state.hotel.id === action.payload.id) {
          return { ...state, hotel: { pictures: [] } };
        }
      }
      return { ...state, hotel: action.payload };
    }
    case 'FETCH_CURRENTEVENTS_FULFILLED' : {
      for (let i = 0; i < state.yelpEvents.length; i += 1) {
        if (state.yelpEvents[i].id === action.payload.id) {
          state.yelpEvents.splice(i, 1);
          return { ...state, yelpEvents: state.yelpEvents };
        }
      }
      return { ...state, yelpEvents: state.yelpEvents.concat(action.payload) };
    }
    case 'FETCH_CURRENTVIAEVENT_FULFILLED' : {
      for (let i = 0; i < state.viatorEvents.length; i += 1) {
        if (state.viatorEvents[i].title === action.payload.title) {
          state.viatorEvents.splice(i, 1);
          return { ...state, viatorEvents: state.viatorEvents };
        }
      }
      return { ...state, viatorEvents: state.viatorEvents.concat(action.payload) };
    }
    case 'RESET' : {
      return { ...state, yelpEvents: [], viatorEvents: [] };
    }
  }
  return state;
}
