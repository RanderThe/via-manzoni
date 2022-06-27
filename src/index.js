import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import './assets/fonts/Great_Vibes/GreatVibes-Regular.ttf';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
