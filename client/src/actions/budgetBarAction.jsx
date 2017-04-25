export function destinationImage(props) {
  return { type: 'DESTINATION_IMAGE_FULFILLED', payload: props };
}

export function hotelImage(props) {
  return { type: 'HOTEL_IMAGE_FULFILLED', payload: props };
}

export function eventsImage(props) {
  return { type: 'EVENTS_IMAGE_FULFILLED', payload: props };
}

export function resetBudget() {
  return { type: 'RESET' };
}
