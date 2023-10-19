import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './App.css'
import Navbar from './components/Navbar.jsx'

import HomeScreen from './screens/HomeScreen.jsx'
import ManufacturersScreen from './screens/ManufacturersScreen.jsx'
import DistributorsScreen from './screens/DistributorsScreen.jsx'

import Footer from './components/Footer'
import StarsCanvas from './components/StarCanvas'

import AboutUsScreen from './screens/AboutUsScreen.jsx'
import ContactUsFormScreen from './screens/ContactUsFormScreen.jsx'
import ConfirmationBox from './components/ConfirmationBox'
function App() {
  return (
    <div className="App" id="App">
      <Navbar />
      <div className="App-content">
        <Router>
          <Routes>
            <Route path="/" exact Component={HomeScreen}></Route>
            <Route path="/manufacturer" Component={ManufacturersScreen}></Route>
            <Route path="/buyer" Component={DistributorsScreen}></Route>
            <Route path="/about" Component={AboutUsScreen}></Route>
            <Route path="/contact" Component={ContactUsFormScreen}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  )
}

export default App
