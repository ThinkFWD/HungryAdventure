export default function reducer(state = {
  price: 0,
  arrivalDate: '',
  departureDate: '',
  originTerminal: '',
  city: '',
  country: '',
  IataCode: '',
  carrier: '',
  imageUrl: '',
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'SET_DESTINATION': {
      return { ...state,
        fetching: false,
        fetched: true,
        price: action.payload.price,
        arrivalDate: action.payload.arrivalDate,
        departureDate: action.payload.departureDate,
        originTerminal: action.payload.originTerminal,
        city: action.payload.city,
        country: action.payload.country,
        IataCode: action.payload.IataCode,
        carrier: action.payload.carrier,
        imageUrl: action.payload.imageUrl,
      };
    }
  }
  return state;
}
