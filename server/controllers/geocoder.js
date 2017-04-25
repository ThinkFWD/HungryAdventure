const NodeGeocoder = require('node-geocoder');

module.exports = {
  location(req, res) {
    const city = req.query.city;
    const country = req.query.country;
    const options = {
      provider: 'google',
      httpAdapter: 'https',
      api_key: process.env.GOOGLE_MAPS,
    };

    const geocoder = NodeGeocoder(options);

    geocoder.geocode(`${city} ${country}`)
      .then(result => res.send(result))
      .catch(err => res.send(err));
  },
  getTerminal(req, res) {
    const terminal = req.query.terminal;
    const options = {
      provider: 'google',
      httpAdapter: 'https',
      api_key: process.env.GOOGLE_MAPS,
    };

    const geocoder = NodeGeocoder(options);

    geocoder.geocode(terminal)
      .then(result => res.send(result))
      .catch(err => res.send(err));
  },
};
