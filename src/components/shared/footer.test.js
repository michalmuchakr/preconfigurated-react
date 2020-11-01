import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer.jsx';

import {cleanup} from '@testing-library/react';

describe('buttons tests', () => {
  afterEach(cleanup);

  it('Readers without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
