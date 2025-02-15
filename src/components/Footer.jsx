import React from 'react';
import { FaCar, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#042966] text-white py-10 mt-[50px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        
        {/* Rent Car Service */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FaCar className="text-white text-3xl" />
            <h2 className="text-2xl font-bold">Rent Car Service</h2>
          </div>
          <p className="text-gray-400 text-sm leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur, distinctio, itaque reiciendis ab cupiditate 
            harum ex quam veniam, omnis expedita animi quibusdam 
            obcaecati mollitia? 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-300">About</a></li>
            <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-300">Car Listing</a></li>
            <li><a href="#" className="hover:text-blue-300">Blog</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Head Office</h3>
          <ul className="text-sm space-y-6 text-gray-400">
            <li>123 Zindabazar, Sylhet, Bangladesh</li>
            <li>Phone: +0995345875365</li>
            <li>Email: <a href="mailto:muhib5532@gmail.com" className="hover:text-blue-300">muhib5532@gmail.com</a></li>
            <li>Office Time: 10am - 7pm</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Subscribe our newsletter</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-[#041b3b] text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="text-center text-gray-400 text-sm">
        © Copyright 2025, Developed by Muhibur Rahman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
