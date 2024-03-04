import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/global.css';
import './css/home.css';
import './css/about.css';
import './css/resume.css';
import './css/projects.css';
import './css/contact.css';
import './css/footer.css';

import reportWebVitals from './reportWebVitals';
import App from './pages/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='bola-nabil'>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();