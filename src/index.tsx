import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AppContext from './store/app-context';
import 'styles/main.scss';

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById('root'),
);
