const rp = require('request-promise');

module.exports = {
  getWeather: (req, res) => {
    const latitude = req.query.latitude || 43.644;
    const longitude = req.query.longitude || -79.391;
    const date = req.query.time || '2017-04-05';
    const timeofDay = 'T16:00:00';
    // const time = req.query.time || '2017-04-05T16:00:00';
    // const date = time.slice(0, 10) || '2017-04-05';
    // const timeofDay = time.slice(10) || 'T16:00:00';
    const weatherObj = {};
    const options = {
      url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${latitude},${longitude},${date}${timeofDay}`,
      headers: {
        contentType: 'application/json',
      },
    };
    rp(options)
    .then((result) => {
      const parsedResult = JSON.parse(result);
      weatherObj.highTemp = Math.round(parsedResult.daily.data[0].temperatureMax);
      weatherObj.lowTemp = Math.round(parsedResult.daily.data[0].temperatureMin);
      weatherObj.summary = parsedResult.daily.data[0].summary;
      weatherObj.date = date;
      weatherObj.timeofDay = timeofDay;
      res.send(weatherObj);
    });
  },
};
