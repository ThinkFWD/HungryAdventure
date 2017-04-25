import { getDays } from '../../utils/calendarDates';

export function getBudget({ Budget }) {
  return { type: 'GET_BUDGET_FULFILLED', payload: Budget };
}

export function flightBudget({ price, original }) {
  return { type: 'FLIGHT_BUDGET_FULFILLED', payload: { original, flight: price } };
}

export function hotelBudget(props) {
  const id = props.id;
  const flight = props.budget.flight;
  const hotel = props.hotel;
  const original = Number(props.budget.original);
  const days = getDays(props.arrivalDate, props.departureDate);
  const newBudget = (hotel * days);
  return { type: 'HOTEL_BUDGET_FULFILLED', payload: { original, flight, id, hotel: newBudget } };
}
export function viatorBudget(events) {
  return { type: 'VIATOR_BUDGET_FULFILLED', payload: events };
}

export function yelpBudget(events) {
  return { type: 'YELP_BUDGET_FULFILLED', payload: events };
}

export function resetBudget() {
  return { type: 'RESET' };
}
