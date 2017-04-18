const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const ports =  (process.env.PORT || 8888);

dotenv.config();

const pg = require('./config/database.js');

const app = express();
app.use(cors());
require('./config/routes.js')(app, express);

app.use(express.static(path.join(__dirname, './build')));
app.use(express.static(path.join(__dirname, './public')));


console.log('NEED TO CHECK OUT !!!!', path.join(__dirname, './public'));

app.get('*', (request, response) => {
  console.log('WE NEED TO SERVE', request.url);
  response.sendFile(path.resolve(`${__dirname}/../public`, 'index.html'));
});

const server = app.listen(ports, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, ports);
});
