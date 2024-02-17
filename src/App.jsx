// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; import Header from './Home/NavBar/NavBar';
import Accounting from './Home/FinancialServices/Accounting';
import FinancialServices from './Home/FinancialServices/FinancialServices';
import FinancialSectors from './Home/FinancialServices/FinancialSectors';
import SectorsSlider from './Home/Sectors/SectorsSlider';
import Partners from './Home/Partners/Partners';
import Hero from './Home/Hero/Hero';
import Exporting from './Home/Exporting/Exporting'
import Carousel from './Home/LandingPage/Carousel';
import FAQs from './Home/FAQs/FAQs.jsx';
import PartnersDetails from './Home/Partners/PartnersDetails';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function App() {
  const location = useLocation();

  // Determine the selectedPage based on the current route
  const selectedPage = () => {
    const currentPath = location.pathname;

    if (currentPath === '/') return '/';
    if (currentPath.startsWith('/financialservices')) return '/financialservices/';
    if (currentPath.startsWith('/financialSectors')) return '/financialSectors';
    if (currentPath.startsWith('/partners')) return '/partners';
    if (currentPath === '/Hero') return '/Hero';
    if (currentPath === '/Exporting') return '/Exporting';
    if (currentPath === '/FAQs') return '/FAQs';
    if (currentPath === '/Products') return '/Products';

    return '/';
  };

  return (
    <div className='app'>
      <Header selectedPage={selectedPage()} />
      <RoutesWithTransition />
    </div>
  );
}

function RoutesWithTransition() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={{ enter: 1000, exit: 1000 }} classNames={{
        enter: 'slide-enter',
        enterActive: 'slide-enter-active',
        exit: 'slide-exit',
        exitActive: 'slide-exit-active',
      }}
        unmountOnExit>
        <Routes1 location={location} />
      </CSSTransition>
    </TransitionGroup>
  );
}

function Routes1({ location }) {
  return (
    <Routes location={location}>
      <Route path='/' element={<Carousel />} />
      <Route path='/financialservices' element={<FinancialServices />} />
      <Route path='/financialservices/aas' element={<Accounting />} />
      <Route path='/financialSectors' element={<FinancialSectors />} />
      <Route path='/financialSectors/weserve' element={<SectorsSlider />} />
      <Route path='/partners' element={<Partners />} />
      <Route path='/Hero' element={<Hero />} />
      <Route path='/Exporting' element={<Exporting />} />
      <Route path='/FAQs' element={<FAQs />} />
      <Route path='/PartnersDetails' element={<PartnersDetails />} />
      <Route path='/Products' element={<></>} />
    </Routes>
  );
}

export default App;
