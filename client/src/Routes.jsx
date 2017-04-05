import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Destinations from './containers/Destinations';
import GoogleMaps from './containers/GoogleMaps';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Layout} />
      <Route path="/flights" component={Destinations} />
      <Route path='/maps' component={GoogleMaps} />
    </div>
  </Router>
);

export default Routes;
