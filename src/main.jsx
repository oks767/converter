import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/settings.module.scss';
import ConvertPage from './components/ConvertPage/ConvertPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/convert',
    element: <ConvertPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home heading='Total estimated value' /> */}
    {/* <Routes /> */}
    {/* <ConvertPage /> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);
