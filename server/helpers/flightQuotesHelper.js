module.exports = {
  trimSkyBody: (skyBody, budget) => {
    let trimResults = {};
    let min = 0;
    skyBody.Quotes.forEach((skyElem) => {
      if (skyElem.InboundLeg && skyElem.OutboundLeg && skyElem.MinPrice > min) {
        trimResults.price = skyElem.MinPrice;
        trimResults.carrierId = skyElem.OutboundLeg.CarrierIds[0];
        trimResults.originId = skyElem.OutboundLeg.OriginId;
        trimResults.destinationId = skyElem.InboundLeg.OriginId;
        trimResults.arrivalDate = skyElem.OutboundLeg.DepartureDate.slice(0, 10);
        trimResults.departureDate = skyElem.InboundLeg.DepartureDate.slice(0, 10);
        min = skyElem.MinPrice;
      }
    });
    const checkBudget = (price) => {
      if (budget !== undefined) {
        if (price > budget) {
          trimResults = {};
        }
      }
    };
    const getOGID = (id) => {
      skyBody.Places.forEach((elem) => {
        if (elem.PlaceId === id) {
          delete (trimResults.originId);
          trimResults.originTerminal = elem.IataCode;
        }
      });
    };
    const getDesID = (id) => {
      skyBody.Places.forEach((elem) => {
        if (elem.PlaceId === id) {
          delete (trimResults.destinationId);
          trimResults.destinationTerminal = elem.IataCode;
          trimResults.location = elem.CityName;
        }
      });
    };
    const getCarID = (id) => {
      skyBody.Carriers.forEach((elem) => {
        if (elem.CarrierId === id) {
          delete (trimResults.carrierId);
          trimResults.carrier = elem.Name;
        }
      });
    };
    checkBudget(trimResults.price);
    if (trimResults) {
      getOGID(trimResults.originId);
      getDesID(trimResults.destinationId);
      getCarID(trimResults.carrierId);
    }
    return trimResults;
  },
  sortLowestPrice: (flightResults) => {
    const callback = (a, b) => {
      const priceA = a[Object.keys(a)[0]].price;
      const priceB = b[Object.keys(b)[0]].price;
      return priceA - priceB;
    };
    return flightResults.sort(callback);
  },
};
