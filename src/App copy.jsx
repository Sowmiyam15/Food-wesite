import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ResponsiveCard from './assets/ResponsiveCard'

import Nav from './components/navbar';
import Home from './components/home';

import Services from "./components/services";
import Career from "./components/career";

import About from './components/about';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Swiggy from './components/swiggy';

const App = ()=> {
  return (
    <>
    
 <Router>
<Nav/>
{/* <Swiggy/> */}


{/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>  */}
     
     <Footer/>
    </>
  )
}

export default App;
