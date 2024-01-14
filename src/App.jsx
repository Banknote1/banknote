import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Home/NavBar/NavBar'
import './index.css'
import MySlider from './Home/LandingPage/MySlider.jsx';
import Home from './Home/LandingPage/Home';
import Accounting from './Home/FinancialServices/Accounting';
import FinancialServices from './Home/FinancialServices/FinancialServices';
import FinancialSectors from './Home/FinancialServices/FinancialSectors';
import SecrorsSlider from './Home/Sectors/SectorsSlider';
import Partners from './Home/Partners/Partners'
function App() {


  return (
    <div className='app'>
      <Header />

      <Routes >

        <Route path='/' element={<MySlider />} ></Route>
        <Route path='/financialservices/' element={<FinancialServices />} ></Route>
        <Route path='/financialservices/aas' element={<Accounting />} ></Route>
        <Route path='/Sectors/weserve' element={<SecrorsSlider />} ></Route>
        <Route path='/partners' element={<Partners />} ></Route>
        <Route path='/' element={<MySlider />} ></Route>
        <Route path='/finacialServices' element={<FinancialServices />}></Route>
        <Route path='/finacialSectors' element={<FinancialSectors />}></Route>


      </Routes>

    </div>
  );
}

export default App;
