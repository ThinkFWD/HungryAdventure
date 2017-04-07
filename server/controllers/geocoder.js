const NodeGeocoder = require('node-geocoder');

module.exports = {
  location(req, res) {
    const location = req.query.location;
    const options = {
      provider: 'google',
      httpAdapter: 'https',
      api_key: process.env.GOOGLE_MAPS,
    }

    const geocoder = NodeGeocoder(options);

    geocoder.geocode(location)
      .then(result => res.send(result))
      .catch(err => res.send(err));
  }
}