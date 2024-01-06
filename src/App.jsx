import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/LandingPage/Home';
import FinancialServices from './Home/FinancialServices/FinancialServices';
function App() {
  return (
    <div>

      <Routes >

        <Route path='/' element={<Home />} ></Route>
        <Route path='/finacialServices' element={<FinancialServices />}></Route>

      </Routes>

    </div>
  );
}

export default App;
