import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './css/main.css';
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import reportWebVitals from './reportWebVitals';
// import Home from './pages/Home';
import App from './pages/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();