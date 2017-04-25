
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
  };
}
