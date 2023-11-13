import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/header/Header';
import Banner from './Components/banner/Banner';
import { Route,Routes } from 'react-router-dom';
import Footer from './Components/footer/Footer';
import Home from './Components/Home/Home';

function App() {

  return (
    <div className=' bg-black'>
      <Header />
      <Routes>
        
        <Route path="/" element={<Banner />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
