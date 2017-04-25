const Xray = require('x-ray');
const xray = Xray();

module.exports = {
  scrape(req, res) {
    const city = req.query.location.replace(/ /g, '-');

    xray(`http://www.frommers.com/destinations/${city}`, '#shortened-intro p', [{
      description: '',
    }])((err, info) => {
      if (info[0] === undefined) {
        res.send("");
      } else {
        res.send(info[0].description);
      }
    });
  },
};
