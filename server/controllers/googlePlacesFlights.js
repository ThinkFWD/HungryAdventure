const rp = require('request-promise');

module.exports = {
  getGoogleData: (req, res) => {
    const latitude = req.query.lat || 40.750712899999996;
    const longitude = req.query.long || -73.97659039999999;
    let options = {
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=25000&type=airport&key=${process.env.GOOGLE_MAPS}`,
      headers: {
        contentType: 'application/json',
      },
    }
    rp(options)
      .then((data) => {
        const googleAirports = {};
        const cleanData = JSON.parse(data)
        cleanData.results.forEach((obj) => {
          googleAirports[obj.name] = obj.geometry.location;
        })
        // res.json(googleAirports)

        //this.props.airport     => list of airports
        //this.props.geolocation => user location
        options = {
          url: `http://partners.api.skyscanner.net/apiservices/geo/v1.0?apiKey=prtl6749387986743898559646983194`,
          headers: {
            contentType: 'application/json',
          },
        }
        rp(options)
        .then((flightsInfo) => {
          const match = {};
          const cleanFlights = JSON.parse(flightsInfo)
          cleanFlights.Continents.forEach((country) => {
            country.Countries.forEach((city) => {
              city.Cities.forEach((airport1) => {
                airport1.Airports.forEach((locate) => {
                  for (let i = 0; i < locate.Location.length; i++){
                        let newLocate = locate.Location.split(" ")
                        match[locate.Id] = newLocate;
                        newLocate[0] = newLocate[0].slice(0,-1)
                        newLocate[0] = Number(newLocate[0]);
                        newLocate[1] = Number(newLocate[1])
                        newLocate.push(locate.CityId)

                  }
                })
              })
            })
          })
          const matchHelper = (lat1,lat2,lng1,lng2) => {
          let z = lat1 - lat2
          let yz = lng1 - lng2
            if  (z > .00 && z < .01 || z < -.00 && z > -.01) {
              if (yz > .00 && yz < .01 || yz < -.00 && yz > -.01) {
                return true
              } else {
                return false;
              }
            }
          }

          // res.json(googleAirports)
          let result = [];
          for (let key in googleAirports) {
            for (let key2 in match){
            //console.log(googleAirports[key].lat)
            //console.log(match[key2][1])
            if (matchHelper(googleAirports[key].lat, match[key2][1], googleAirports[key].lng, match[key2][0])) {
                result.push(match[key2][2])
              }
            }
          }
            res.json(result[0])
        })
      })
  }
}
