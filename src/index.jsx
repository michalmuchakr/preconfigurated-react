import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import AppContext from './app-context.jsx';
import 'styles/main.scss';

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById('root'),
);
