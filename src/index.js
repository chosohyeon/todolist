import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import App from './Todo_basic03';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <App /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);