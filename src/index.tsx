// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// bootstrap imports
import 'bootstrap/js/src/modal';

// application
import App from './App';
import './scss/index.scss';

// get the root element
let rootEl = document.getElementById('root');

// if it's null, there was none
if(rootEl === null) {
  // create a root div
  rootEl = document.createElement('div');
  // set id to "root"
  rootEl.id = 'root';
  // append it to document
  document.body.appendChild(rootEl);
}

// render application
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
