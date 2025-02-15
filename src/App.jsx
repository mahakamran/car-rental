import React from 'react';
import { FiPhone } from 'react-icons/fi';
import Page1 from './pages/page1';
import Navbar from './components/Navbar'
import {  Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
const App = () => {
  return (
    <>
<Navbar/>
<Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>

    </>
  )
}

export default App