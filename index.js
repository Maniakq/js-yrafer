// Import stylesheets
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;