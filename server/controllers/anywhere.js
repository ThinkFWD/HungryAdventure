const rp = require('request-promise');
const anywhereHelper = require('../helpers/anywhereHelper.js');
const dummyFlights = require('../dummy/dummyFlights.js');

module.exports = {
  getAnywhereDummy: (req, res) => {
    res.send(dummyFlights);
  },
  getAnywhere: (req, res) => {
    const departDate = req.query.departDate.slice(0, 10);
    const arrivalDate = req.query.arrivalDate.slice(0, 10);
    const cityId = req.query.cityId || 'NYCA';

    const options = {
      url: `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/${cityId}/anywhere/${departDate}/${arrivalDate}?apiKey=${process.env.SKYSCANNER_API}`,
      headers: {
        contentType: 'application/json',
      },
    };
    rp(options)
      .then((data) => {
        const parsedData = JSON.parse(data);
        const top = anywhereHelper.sortFunc(parsedData.Quotes);
        const filterTop = anywhereHelper.uniqueFunc(top);
        const top50 = filterTop.length >= 50 ? filterTop.slice(0, 50) : filterTop;
        const budgetTop = anywhereHelper.budgetFunc(top50, req.query.Budget);
        const finalarray = [];
        budgetTop.forEach(() => {
          finalarray.push({});
        });
        anywhereHelper.trimSkyBody(finalarray, budgetTop, parsedData);
        return finalarray;
      })
      .catch((err) => {
        throw err;
      })
      .then((flightResults) => {
        const pixFlights = [];
        const cache = [];
        const pix = [];
        const pixObject = {};
        flightResults.forEach((elem) => {
          if (elem.city && cache.indexOf(elem.city) === -1) {
            const options2 = {
              url: `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=${elem.city}&image_type=photo&orientation=horizontal&category=travel`,
              headers: {
                contentType: 'application/json',
              },
            };
            pixFlights.push(rp(options2));
          }
          if (elem.city) {
            if (cache.indexOf(elem.city) === -1) {
              cache.push(elem.city);
            }
          }
        });
        return Promise.all(pixFlights).then((values) => {
          values.forEach((eachPic, index) => {
            const pixParsed = JSON.parse(eachPic);
            const topimages = [];
            pixParsed.hits.forEach((elem, i) => {
              if (i > 4) {
                return;
              }
              topimages.push(elem.webformatURL);
            });
            pix.push(topimages);
            pixObject[cache[index]] = topimages;
          });
          flightResults.forEach((elem) => {
            const flight = Object.assign(elem);
            if (cache.indexOf(flight.city) !== -1) {
              flight.imageUrl = pixObject[flight.city];
            }
          });
          return flightResults;
        });
      })
      .catch((err) => {
        throw err;
      })
      .then((flightResults) => {
        const pixFlights = [];
        const cache = [];
        const pix = [];
        const pixObject = {};
        flightResults.forEach((elem) => {
          if (elem.imageUrl.length === 0 && cache.indexOf(elem.country) === -1) {
            const options3 = {
              url: `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=${elem.country}&image_type=photo&orientation=horizontal&category=travel`,
              headers: {
                contentType: 'application/json',
              },
            };
            pixFlights.push(rp(options3));
          }
          if (elem.imageUrl.length === 0) {
            if (cache.indexOf(elem.country) === -1) {
              cache.push(elem.country);
            }
          }
        });
        return Promise.all(pixFlights).then((values) => {
          values.forEach((eachPic, index) => {
            const pixParsed = JSON.parse(eachPic);
            const topimages = [];
            pixParsed.hits.forEach((elem, i) => {
              if (i > 4) {
                return;
              }
              topimages.push(elem.webformatURL);
            });
            pix.push(topimages);
            pixObject[cache[index]] = topimages;
          });
          flightResults.forEach((elem) => {
            const flight = Object.assign(elem);
            if (cache.indexOf(flight.country) !== -1) {
              flight.imageUrl = pixObject[flight.country];
            }
          });
          res.send(flightResults);
        });
      })
      .catch((err) => {
        throw err;
      });
  },
};
