const dummyFlights = [{ price: 324,
  arrivalDate: '2017-04-10',
  departureDate: '2017-04-12',
  originTerminal: 'LGA',
  city: 'Toronto',
  country: 'Canada',
  IataCode: 'YYZ',
  carrier: 'WestJet',
  imageUrl:
  ['https://pixabay.com/get/eb34b90c2ff4073ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/eb35b90728f4033ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e83cb10f2ef1003ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e133b20b2afc1c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e133b20b2bf41c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg'] },
{ price: 791,
  arrivalDate: '2017-04-10',
  departureDate: '2017-04-12',
  originTerminal: 'EWR',
  city: 'Dublin',
  country: 'Ireland',
  IataCode: 'DUB',
  carrier: 'Lufthansa',
  imageUrl:
  ['https://pixabay.com/get/eb34b00729fc053ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e835b5062cf4023ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/ea32b40b29fd1c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e834b10e21f4093ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e834b10a21f41c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg'] },
{ price: 822,
  arrivalDate: '2017-04-10',
  departureDate: '2017-04-12',
  originTerminal: 'JFK',
  city: 'London',
  country: 'United Kingdom',
  IataCode: 'LGW',
  carrier: 'Norwegian',
  imageUrl:
  ['https://pixabay.com/get/ed31b0072df71c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/eb33b40c35fd0723cd0b410ce3494096ea6ae3d110b0194292f6c37b_640.jpg',
    'https://pixabay.com/get/ec36b10f2df11c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/eb34b90b20f4043ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e837b2062cf7083ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg'] },
{ price: 860,
  arrivalDate: '2017-04-10',
  departureDate: '2017-04-12',
  originTerminal: 'JFK',
  city: 'New Delhi',
  country: 'India',
  IataCode: 'DEL',
  carrier: 'Aeroflot',
  imageUrl:
  ['https://pixabay.com/get/ed37b30c2ff11c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e036b4092ce90825d0471401ef494390e37effd41db8104996f7c77ba5_640.jpg',
    'https://pixabay.com/get/e832b90a2df4003ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e133b10e28f71c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e134b9082ffc1c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg'] },
{ price: 901,
  arrivalDate: '2017-04-10',
  departureDate: '2017-04-12',
  originTerminal: 'JFK',
  city: 'Paris',
  country: 'France',
  IataCode: 'CDG',
  carrier: 'Norwegian',
  imageUrl:
  ['https://pixabay.com/get/e835b3072cf41c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e834b40929f0073ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e131b20d2afd1c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/ec36b10f2dfc1c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e83db20a2df5073ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg'] },
{ price: 966,
  arrivalDate: '2017-04-10',
  departureDate: '2017-04-12',
  originTerminal: 'JFK',
  city: 'Oslo',
  country: 'Norway',
  IataCode: 'OSL',
  carrier: 'Norwegian',
  imageUrl:
  ['https://pixabay.com/get/e832b3062ef6043ed95c4518b7484f93e671e2dc04b0154894f8c27ea1efb7_640.jpg',
    'https://pixabay.com/get/e037b40b29f71c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e035b90a2cf51c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e030b60d2bf01c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg',
    'https://pixabay.com/get/e037b30628f31c2ad65a5854e2454393e577ebc818b518409df3c67fa5ef_640.jpg'] },
{ price: 1428,
  carrierId: undefined,
  arrivalDate: '2017-04-10',
  departureDate: '2017-04-12',
  originTerminal: 'JFK',
  city: 'Bridgetown',
  country: 'Barbados',
  IataCode: 'BGI',
  imageUrl: ['https://pixabay.com/get/ee34b2082de90825d0471401ef494390e37effd41db8104996f7c77ba5_640.jpg'] }];

module.exports = dummyFlights;
