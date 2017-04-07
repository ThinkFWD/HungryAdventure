import React from 'react';
import DestinationEntry from './DestinationEntry';


const DestinationList = ({ destinations, redirect }) => (
  <div>
    <DestinationEntry redirect={redirect} />,
  </div>
);

export default DestinationList;
