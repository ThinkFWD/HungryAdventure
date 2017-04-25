const flightController = require('../controllers/flights.js');
const anywhereController = require('../controllers/anywhere.js');
const geocoderController = require('../controllers/geocoder.js');
const hotelController = require('../controllers/hotels.js');
const weatherController = require('../controllers/weather.js');
const databaseController = require('../controllers/database.js');
const yelpController = require('../controllers/yelp.js');
const viatorController = require('../controllers/viator.js');
const frommersController = require('../controllers/frommers.js');
const googlePlacesController = require('../controllers/googlePlacesFlights');

module.exports = (app) => {
  app.get('/api/flights', flightController.getFlights);
  app.get('/api/geocoder', geocoderController.location);
  app.get('/api/weather', weatherController.getWeather);
  app.get('/api/yelp', yelpController.getEvents);
  app.get('/api/dbQuery', databaseController.getProfile);
  app.get('/api/viator', viatorController.scrape);
  app.get('/api/frommers', frommersController.scrape);
  app.get('/api/google', googlePlacesController.getGoogleData);
  app.get('/api/terminal', geocoderController.getTerminal);

  // Activate for testing
  // app.get('/api/anywhere', anywhereController.getAnywhereDummy);
  // app.get('/api/hotels', hotelController.getHotelsDummy);

  // //Live
  app.get('/api/anywhere', anywhereController.getAnywhere);
  app.get('/api/hotels', hotelController.getHotels);

  app.get('/api/google', googlePlacesController.getGoogleData);

  // Analysis
  app.get('/api/dbSearchQuerySave', databaseController.saveQuery);
};
