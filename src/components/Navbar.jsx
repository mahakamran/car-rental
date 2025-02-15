import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[60px] bg-[#000d6b] flex items-center justify-between px-4 md:hidden relative">
        <div className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-md transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="w-full flex justify-end p-4">
          <FiX className="text-[#000d6b] text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
 
       <nav className="flex flex-col items-center mt-10">
          <NavLink to="/" className="text-[#000d6b] font-semibold text-xl py-11" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="text-[#000d6b] font-semibold text-xl  py-2" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/page2" className="text-[#000d6b] font-semibold text-xl py-11" onClick={toggleMenu}>
            Cars
          </NavLink>
          <NavLink to="/page3" className="text-[#000d6b]  font-semibold text-xl py-2" onClick={toggleMenu}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-[#000b64] w-full h-[80px] items-center justify-center gap-11">
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white">
          About
        </NavLink>
        <NavLink to="/page2" className="text-white">
          Cars
        </NavLink>
        <NavLink to="/page3" className="text-white">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default App;
