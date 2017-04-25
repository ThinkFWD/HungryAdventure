import React from 'react';
import DestinationEntry from './DestinationEntry';


const DestinationList = ({ destinations, redirect }) => (
  <div>
  <center>
    <DestinationEntry redirect={redirect} />
    </center>
  </div>
);

export default DestinationList;
