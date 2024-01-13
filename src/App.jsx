import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Home/NavBar/NavBar'
import Home from './Home/LandingPage/Home';
import Accounting from './Home/FinancialServices/Accounting';
import FinancialServices from './Home/FinancialServices/FinancialServices';
import SecrorsSlider  from './Home/Sectors/SectorsSlider';
import Partners from './Home/Partners/Partners'
function App() {
  

  return (
    <div>
    <Header />

      <Routes >

        <Route path='/' element={<Home />} ></Route>
        <Route path='/financialservices/' element={<FinancialServices />} ></Route>
        <Route path='/financialservices/aas' element={<Accounting />} ></Route>
        <Route path='/Secrors/weserve' element={<SecrorsSlider />} ></Route>
        <Route path='/partners' element={<Partners />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
