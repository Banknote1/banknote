import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import HorizontalSlider from './Home/LandingPage/HorizontalSlider';
import IconsSocial from './Home/Social-icons/IconsSocial';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <IconsSocial />

    {/* <HorizontalSlider /> */}
    <App />
  </BrowserRouter>
);
