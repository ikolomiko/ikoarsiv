import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

fetch('./data.json')
  .then(data => data.json())
  .then(data => {
    ReactDOM.render(
      <React.StrictMode>
        <App StockData={data} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch(err => console.error(err));

