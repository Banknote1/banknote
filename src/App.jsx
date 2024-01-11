import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import MySlider from './Home/LandingPage/MySlider.jsx';
import Home from './Home/LandingPage/Home';
import FinancialServices from './Home/FinancialServices/FinancialServices';
function App() {
  return (
    <div className='app' >

      <Routes >

        <Route path='/' element={<MySlider />} ></Route>
        <Route path='/finacialServices' element={<FinancialServices />}></Route>

      </Routes>

    </div>
  );
}

export default App;
