import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

