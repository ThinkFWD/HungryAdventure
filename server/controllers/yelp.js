const rp = require('request-promise');

module.exports = {
  getEvents(req, res) {
    const where = req.query.location || 'new york';
    const options = {
      uri: `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${where}`,
      headers: {
        Authorization: process.env.YELP,
      },
      json: true,
    };

    rp(options)
    .then(response => res.send(response))
    .catch(err => res.send(err));
  },
};
