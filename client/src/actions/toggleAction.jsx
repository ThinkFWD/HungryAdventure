export function toggleHotels({ hotels }) {
  const bool = (hotels === undefined || hotels === false);
  return { type: 'TOGGLE_HOTELS_FULLFILLED', payload: bool };
}

export function toggleSelect({ hotel }) {
  return { type: 'TOGGLE_SELECT_FULLFILLED', payload: hotel.id };
}
