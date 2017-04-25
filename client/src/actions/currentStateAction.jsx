export function currentDestination({ destination }) {
  return { type: 'FETCH_CURRENTDES_FULFILLED', payload: destination };
}

export function currentHotel({ hotel }) {
  return { type: 'FETCH_CURRENTHOTEL_FULFILLED', payload: hotel };
}

export function currentEvents({ event }) {
  return { type: 'FETCH_CURRENTEVENTS_FULFILLED', payload: event };
}

export function currentViator({ event }) {
  return { type: 'FETCH_CURRENTVIAEVENT_FULFILLED', payload: event };
}

export function reset() {
  return { type: 'RESET' }
}
