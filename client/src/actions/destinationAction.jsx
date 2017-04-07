
export function destinationSet({
  price,
  arrivalDate,
  departureDate,
  originTerminal,
  city,
  country,
  IataCode,
  carrier,
  imageUrl }) {
  return function (dispatch) {
    console.log('PRICE--->', price);
    return dispatch({ type: 'SET_DESTINATION',
    payload: {
      price,
      arrivalDate,
      departureDate,
      originTerminal,
      city,
      country,
      IataCode,
      carrier,
      imageUrl,
    },
  });
}}
