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
import Landing from './Mobile/Landing';
import PartnersDetails from './Home/Partners/PartnersDetails';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import IconsSocial from './Home/Social-icons/IconsSocial';
import Coming from './Home/Comingsoon/Coming'
// import './Mobile/partnersMobile.jsx'
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isComingSoon = location.pathname === '/Comingsoon';
  // Determine the selectedPage based on the current route
  const selectedPage = () => {
    const currentPath = location.pathname;
    console.log(currentPath);
    if (currentPath === '/') return '/';
    if (currentPath === '/partnersDetails') return '/partnersDetails';
    if (currentPath === '/financialservices/aas') return '/financialservices/aas';
    if (currentPath === '/financialSectors/weserve') return '/financialSectors/weserve';
    if (currentPath.startsWith('/financialservices')) return '/financialservices';
    if (currentPath.startsWith('/financialSectors')) return '/financialSectors';
    if (currentPath.startsWith('/partners')) return '/partners';
    // if (currentPath === '/Products') return '/Products';
    if (currentPath === '/partners') return '/partners';
    if (currentPath === '/Home') return '/Home';
    if (currentPath === '/Exporting') return '/Exporting';
    if (currentPath === '/FAQs') return '/FAQs';

    return '/';
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // Initial state based on viewport width

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Update state on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageid = params.get("pageid");
    if (pageid) {
      navigate(pageid); // Redirect to the page specified in pageid parameter
    }
    // www.banknoteconsult.com/?pageid=/partners
  }, [location.search, navigate]);


  if (isComingSoon) {
    return (
      <Routes>
        <Route path='/Comingsoon' element={<Coming />} />

      </Routes>

    )

  }

  else if (isMobile) {
    return (
      <div className='app'>
        <Header selectedPage={selectedPage()} />

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/financialservices' element={<Landing />} />
          <Route path='/financialservices/aas' element={<Accounting />} />
          <Route path='/financialSectors' element={<Landing />} />
          <Route path='/financialSectors/weserve' element={<SectorsSlider />} />
          <Route path='/partners' element={<Landing />} />
          <Route path='/PartnersDetails' element={<Landing />} />
          <Route path='/Exporting' element={<Landing />} />
          <Route path='/FAQs' element={<Landing />} />
          <Route path='/partnersMobile' element={<Landing />} />
          <Route path='/Home' element={<Landing />} />
        </Routes>
      </div>
    )
  }
  else {
    return (
      <div className='app'>
        <IconsSocial />
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

    </Routes >
  );
}
export default App;