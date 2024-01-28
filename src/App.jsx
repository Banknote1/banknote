import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Home/NavBar/NavBar'
import './index.css'
import Home from './Home/LandingPage/Home';
import Accounting from './Home/FinancialServices/Accounting';
import FinancialServices from './Home/FinancialServices/FinancialServices';
import FinancialSectors from './Home/FinancialServices/FinancialSectors';
import SecrorsSlider from './Home/Sectors/SectorsSlider';
import Partners from './Home/Partners/Partners'
import Hero from './Home/Hero/Hero';
import Exporting from './Home/Exporting/Exporting'
import Carousel from './Home/LandingPage/Carousel';
function App() {


  return (
    <div className='app'>
      <Header />

      <Routes >
        <Route path='/' element={<Carousel />} ></Route>
        <Route path='/financialservices/' element={<FinancialServices />} ></Route>
        <Route path='/financialservices/aas' element={<Accounting />} ></Route>
        <Route path='/Sectors/weserve' element={<SecrorsSlider />} ></Route>
        <Route path='/partners' element={<Partners />} ></Route>
        <Route path='/finacialServices' element={<FinancialServices />}></Route>
        <Route path='/finacialSectors' element={<FinancialSectors />}></Route>
        <Route path='/Hero' element={<Hero />} ></Route>
        <Route path='/Exporting' element={<Exporting />} ></Route>

      </Routes>

    </div>
  );
}

export default App;
