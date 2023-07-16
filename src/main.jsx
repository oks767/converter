import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/settings.module.scss';
// import ConvertPage from './components/ConvertPage/ConvertPage';
import Home from './components/Home/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home heading='Total estimated value' />
  </React.StrictMode>
);
