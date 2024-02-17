import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate
import Header from './Home/NavBar/NavBar';
import Accounting from './Home/FinancialServices/Accounting';
import ParentFinancialServices from './Home/FinancialServices/ParentFinancialServices';
import ParentFinancialSectors from './Home/FinancialServices/ParentFinancialSectors';
import SectorsSlider from './Home/Sectors/SectorsSlider';
import Partners from './Home/Partners/Partners';
import Hero from './Home/Hero/Hero';
import Exporting from './Home/Exporting/Exporting'
import Carousel from './Home/LandingPage/Carousel';
import FAQs from './Home/FAQs/FAQs.jsx';
import MySlider from './Home/LandingPage/MySlider';
import Landing from './Mobile/Landing';
import PartnersDetails from './Home/Partners/PartnersDetails';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the selectedPage based on the current route
  const selectedPage = () => {
    const currentPath = location.pathname;

    if (currentPath === '/') return '/';
    if (currentPath.startsWith('/financialservices')) return '/financialservices/';
    if (currentPath.startsWith('/financialSectors')) return '/financialSectors';
    if (currentPath.startsWith('/partners')) return '/partners';

    if (currentPath === '/partners') return '/partners';
    if (currentPath === '/Hero') return '/Hero';
    if (currentPath === '/Exporting') return '/Exporting';
    if (currentPath === '/FAQs') return '/FAQs';

    return '/';
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial state based on viewport width

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update state on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);
  if (isMobile) {
    return (
      <div className='app'>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
    )
  } else {
    return (
      <div className='app'>
        <Header selectedPage={selectedPage()} />
        <RoutesWithTransition />
      </div>
    );
  }
}

function RoutesWithTransition() {
  const location = useLocation();
  // const location =useLocation(location)  

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
      <Route path='/financialservices' element={<ParentFinancialServices />} />
      <Route path='/financialservices/aas' element={<Accounting />} />
      <Route path='/financialSectors' element={<ParentFinancialSectors />} />
      <Route path='/financialSectors/weserve' element={<SectorsSlider />} />
      <Route path='/partners' element={<Partners />} />
      <Route path='/Hero' element={<Hero />} />
      <Route path='/PartnersDetails' element={<PartnersDetails />} />
      <Route path='/Exporting' element={<Exporting />} />
      <Route path='/FAQs' element={<FAQs />} />
    </Routes>
  );
}
export default App;