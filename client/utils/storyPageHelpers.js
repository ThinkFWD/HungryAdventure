module.exports = {
  pinArray: ({ hotel, yelpEvents, geo: { terminal } }) => {
    const results = [];
    if (terminal) results.push(terminal);
    if (hotel) {
      if (hotel.lat && hotel.lng) results.push(hotel);
    }
    if (yelpEvents) {
      yelpEvents.forEach((event) => {
        if (event.coordinates) results.push(event);
      });
    }
    return results;
  },
  yelpPrice: (bling) => {
    if (bling) {
      const len = bling.length;
      if (len <= 1) {
        return 10;
      } else if (len === 2) {
        return 20;
      } else if (len === 3) {
        return 45;
      }
      return 100;
    }
    return 10;
  },
};
