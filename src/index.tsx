import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';

let rootEl = document.getElementById('root');

if(rootEl === null) {
  rootEl = document.createElement('div');
  rootEl.id = 'root';
  document.body.appendChild(rootEl);
}

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
