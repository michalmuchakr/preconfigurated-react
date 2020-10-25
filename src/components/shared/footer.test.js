import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer.jsx';

import {render, cleanup} from '@testing-library/react';

describe('buttons tests', () => {
  afterEach(cleanup);

  it('reders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
