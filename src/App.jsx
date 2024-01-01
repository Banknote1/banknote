import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Home/NavBar/NavBar'
import Home from './Home/LandingPage/Home';
function App() {
  return (
    <div className='bg' >
      <Header />
      <Routes>

        <Route path='/' element={<Home />} ></Route>

      </Routes>

    </div>
  );
}

export default App;
