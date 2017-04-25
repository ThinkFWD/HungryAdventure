module.exports = {
  trimHotelBody: (data) => {
    const hotelResults = [];
    const listings = data.search_results;
    listings.forEach((elem) => {
      const list = {};
      if (elem.listing.star_rating !== null && elem.listing.star_rating > 4) {
        list.hotel = 'airbnb';
        list.address = elem.listing.public_address;
        list.id = elem.listing.id;
        list.lat = elem.listing.lat;
        list.lng = elem.listing.lng;
        list.neighborhood = elem.listing.neighborhood;
        list.rating = elem.listing.star_rating;
        list.price = elem.pricing_quote.rate_with_service_fee.amount;
        list.url = `https://www.airbnb.com/rooms/${elem.listing.id}`;
        list.pictures = elem.listing.picture_urls;
        hotelResults.push(list);
      }
    });
    return hotelResults;
  },
  sortLowestPrice: (data) => {
    const callback = (a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return priceA - priceB;
    };
    return data.sort(callback);
  },
};
