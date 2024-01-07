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
<<<<<<< HEAD
        <Route path='/financialservices' element={<FinancialServices />} ></Route>
=======
        <Route path='/finacialServices' element={<FinancialServices />}></Route>

>>>>>>> 236c07eac71ccd4aae06a9d1ea3653d6dfaa7a47
      </Routes>

    </div>
  );
}

export default App;
