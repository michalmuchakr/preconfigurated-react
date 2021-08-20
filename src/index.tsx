import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'regenerator-runtime/runtime.js';
import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AppContext from './store/app-context';

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById('root'),
);
