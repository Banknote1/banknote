import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Home/NavBar/NavBar';
import Accounting from './Home/FinancialServices/Accounting';
import FinancialServices from './Home/FinancialServices/FinancialServices';
import FinancialSectors from './Home/FinancialServices/FinancialSectors';
import SectorsSlider from './Home/Sectors/SectorsSlider';
import Partners from './Home/Partners/Partners';
import Hero from './Home/Hero/Hero';
import Exporting from './Home/Exporting/Exporting'
import Carousel from './Home/LandingPage/Carousel';
import FAQs from './Home/FAQs/FAQs.jsx';


function App() {
  const navigate = useNavigate();

  // Determine the selectedPage based on the current route
  const selectedPage = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/') return '/';
    if (currentPath.startsWith('/financialservices')) return '/financialservices/';
    if (currentPath.startsWith('/financialSectors')) return '/financialSectors';
    if (currentPath === '/partners') return '/partners';
    if (currentPath === '/Hero') return '/Hero';
    if (currentPath === '/Exporting') return '/Exporting';
    if (currentPath === '/FAQs') return '/FAQs';

    return '/';
  };

  return (
    <div className='app'>
      {/* Pass the selectedPage to the NavBar component */}
      <Header selectedPage={selectedPage()} />

      <Routes>
        <Route path='/' element={<Carousel />} />
        <Route path='/financialservices/' element={<FinancialServices />} />
        <Route path='/financialservices/aas' element={<Accounting />} />
        <Route path='/financialSectors/weserve' element={<SectorsSlider />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/financialServices' element={<FinancialServices />} />
        <Route path='/financialSectors' element={<FinancialSectors />} />
        <Route path='/Hero' element={<Hero />} />
        <Route path='/Exporting' element={<Exporting />} />
        <Route path='/FAQs' element={<FAQs />} />
      </Routes>
    </div >
  );
}

export default App;
