import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css'
import reportWebVitals from './reportWebVitals';
import App from './pages/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


reportWebVitals();