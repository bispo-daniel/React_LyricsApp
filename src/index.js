import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// IMPORTANTE: Instalar extensão no browser para tratar o seguinte erro
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 