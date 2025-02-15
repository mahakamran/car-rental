import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import img4 from '../images/bmw-offer.png'

const AboutUs = () => {
  return (
    <section className="py-20 bg-white mt-[100px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
        
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h4 className="text-orange-400 font-semibold text-lg mb-2">About Us</h4>
          <h2 className="text-4xl text-[#0a1e3f] font-bold mb-4">Welcome to car rent service</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit. Voluptatum blanditiis esse accusantium dignissimos labore laborum. 
            Veniam, corporis mollitia temporibus, in quaerat vero deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit neque 
            sit ad temporibus quam similique dolor ipsam praesentium sunt.
          </p>

          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-orange-400 mr-2" />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-orange-400 mr-2" />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="text-orange-400 mr-2" />
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <img 
            src={img4} 
            alt="Red Car" 
            className="w-[750px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
