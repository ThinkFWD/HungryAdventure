
module.exports = {
  getDestID: (id, data) => {
    let result = id;
    data.Places.forEach((elem) => {
      if (elem.PlaceId === id) {
        result = elem.IataCode;
      }
    });
    return result;
  },
  sortFunc: (array) => {
    const callback = (a, b) => a.MinPrice - b.MinPrice;
    return array.sort(callback);
  },
  uniqueFunc: (array) => {
    const cacheIds = [];
    const newArr = [];
    array.forEach((elem) => {
      if (cacheIds.indexOf(elem.OutboundLeg.DestinationId) === -1) {
        cacheIds.push(elem.OutboundLeg.DestinationId);
        newArr.push(elem);
      }
    });
    return newArr;
  },
  budgetFunc: (array, budget) => {
    let newArr = array.slice();
    for (let i = 0; i < newArr.length; i += 1) {
      if (Math.floor(newArr[i].MinPrice * 1.25) > budget) {
        newArr = newArr.slice(0, i);
      }
    }
    return newArr;
  },
  trimSkyBody: (finalarray, skyBody, data) => {
    const getOGID = (id, trimResults) => {
      const copyTrim = Object.assign(trimResults);
      data.Places.forEach((elem) => {
        if (elem.PlaceId === id) {
          delete (copyTrim.originId);
          copyTrim.originTerminal = elem.IataCode;
        }
      });
    };
    const getDesID = (id, trimResults) => {
      data.Places.forEach((elem) => {
        const copyTrim = Object.assign(trimResults);
        if (elem.PlaceId === id) {
          delete (copyTrim.destinationId);
          copyTrim.city = elem.CityName;
          copyTrim.country = elem.CountryName;
          copyTrim.IataCode = elem.IataCode;
        }
      });
    };
    const getCarID = (id, trimResults) => {
      const copyTrim = Object.assign(trimResults);
      data.Carriers.forEach((elem) => {
        if (elem.CarrierId === id) {
          delete (copyTrim.carrierId);
          copyTrim.carrier = elem.Name;
        }
      });
    };
    skyBody.forEach((elem, i) => {
      const trimResults = finalarray[i];
      trimResults.price = Math.floor(elem.MinPrice * 1.25);
      trimResults.carrierId = elem.OutboundLeg.CarrierIds[0];
      trimResults.originId = elem.OutboundLeg.OriginId;
      trimResults.destinationId = elem.InboundLeg.OriginId;
      trimResults.arrivalDate = elem.OutboundLeg.DepartureDate.slice(0, 10);
      trimResults.departureDate = elem.InboundLeg.DepartureDate.slice(0, 10);
      getOGID(trimResults.originId, trimResults);
      getDesID(trimResults.destinationId, trimResults);
      getCarID(trimResults.carrierId, trimResults);
    });
    return finalarray;
  },
};
