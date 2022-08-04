import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
// import Cookies from 'universal-cookie';

// const cookies = new Cookies(); 
// cookies.set(key1, value1, {secure: true, sameSite: 'none'});
// cookies.set(key2, value2, {secure: true, sameSite: 'none'});
let COOKIE_OPTIONS = { httpOnly: true, sameSite: 'None', secure: true };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


