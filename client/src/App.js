import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Poker from './components/Poker'
import Investing from './components/Investing'
import Sports from './components/Sports'

import { Navbar } from 'react-bootstrap'


const App = () => {

  return (

    <BrowserRouter>
      <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/interests" element={<Investing />} />
          <Route path="/poker" element={<Poker />} />
          {/* <Route path="/sports" element={<Sports />} /> */}
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  )
}
export default App