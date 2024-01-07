import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Home/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <>
    <BrowserRouter>
      <App />
      <overlay /> {/* Render the Overlay component */}
    </BrowserRouter>
  
  </>,
=======
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>
>>>>>>> 236c07eac71ccd4aae06a9d1ea3653d6dfaa7a47
);
