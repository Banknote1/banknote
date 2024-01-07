import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Home/NavBar/NavBar'
import Home from './Home/LandingPage/Home';
import FinancialServices from './Home/FinancialServices/FinancialServices';
function App() {
  return (
    <div className='bg' >
      <Header />
      <Routes>

        <Route path='/' element={<Home />} ></Route>
        <Route path='/financialservices' element={<FinancialServices />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
