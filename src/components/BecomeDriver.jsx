import React from 'react';
import background from '../images/drive.jpg';
import car from '../images/toyota-offer-2 (1).png';

const BecomeDriver = () => {
  return (
    <section 
      className="relative lg:w-[1610px]  w-[500px] ml-[-105px] h-[340px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#062963] opacity-90 "></div>
      
      {/* Content Container */}
      <div className="relative max-w-[1300px] w-full mx-auto flex justify-between items-center h-full px-4">
        
        {/* Car Image First */}
        <img 
          src={car} 
          alt="Car" 
          className="h-[350px] object-contain hidden sm:block"
        />

        {/* Text Content */}
        <div className="text-white mt-[-100px]">
<h2 className='lg:text-[40px] text-[17px]  pl-40  pt-11   lg:pt-0 lg:pl-0  font-semibold'>Do You Want to Earn With Us? So </h2>
<h2 className='lg:text-[40px]  text-[17px]   pl-52 pt-3 lg:pl-0   font-semibold'>Don't Be Late</h2>
          <button className="lg:mt-4 bg-white ml-[200px] mt-5  text-[#0a1e3f] lg:ml-11 lg:py-2 py-2 lg:px-6 px-2 rounded font-semibold hover:bg-gray-100 transition">
            Become a Driver
          </button>
        </div>
      </div>
    </section>
  );
};

export default BecomeDriver;
