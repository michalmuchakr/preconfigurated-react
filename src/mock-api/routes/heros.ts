import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import heroData from '../data/heroses';

const mock = new MockAdapter(axios, {
  delayResponse: 1000,
});

mock.onGet('/api/heroes').reply(() => [
  // status
  200,
  // body
  heroData,
  // headers
  {
    'Content-Type': 'application/json',
  },
]);
