import React from 'react';
import img1 from '../images/slider-2.jpg';
import img2 from '../images/toyota-offer-2 (1).png';
import PopularServices from '../components/PopularServices';
import AboutUs from '../components/AboutUs';
import HotOffers from '../components/HotOffers';
import BecomeDriver from '../components/BecomeDriver';
import Testimonials from '../components/Testimonials';
import BlogCards from '../components/BlogCards';
import Footer from '../components/Footer';

const Page1 = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='w-full h-[80vh] bg-red-800 absolute'>
        <img src={img1} className='w-full h-full object-cover' alt="Slider" />
      </div>
      <div className='w-full h-[80vh] bg-[#000c6470] relative'>
        <p className='text-gray-200 text-[22px] sm:text-[28px] pt-[120px] sm:pt-[150px] px-4 sm:pl-20'>
          For Rent $70 Per Day
        </p>
        <h2 className='text-white text-[36px] sm:text-[48px] font-semibold px-4 sm:pl-20 pt-2 leading-tight'>
          Reserve Now And Get 50% Off
        </h2>
        <button className='w-[140px] sm:w-[120px]  ml-6 lg:ml-0 mt-6 sm:mt-11 rounded-md h-[40px] text-[#000b64] bg-white text-[15px] font-semibold mx-auto sm:ml-20'>
          Reserve Now
        </button>
      </div>

      {/* Search Section */}
      <div className='w-[90%] sm:w-[85%] mx-auto h-auto sm:h-[260px] mt-[-50px] relative bg-white'>
        {/* Hide the white car on small screens */}
        <img src={img2} className='hidden sm:block absolute w-[450px] h-full object-cover' alt="Offer" />
        
        <div className='w-full sm:w-[450px] h-full sm:block hidden bg-[#f8b31dd8] ml-3 relative'>
          <h2 className='text-[30px] sm:text-[40px]  text-[#000b64] font-semibold pl-5 pt-14'>
            Find your best car
          </h2>
          <h2 className='text-[30px] sm:text-[40px] text-[#000b64] font-semibold pl-5'>
            here
          </h2>
        </div>
        
        <div className='mt-[80px] sm:mt-[-170px]  sm:ml-[500px] flex flex-col sm:flex-row gap-4 '>
        <h2 className='  lg:hidden block mt-11 pt-11 text-blue-900  font-semibold text-[17px]'>Find your best car here</h2>

          <input className='lg:w-[85%] w-50%  sm:w-[30%] lg:h-[40px] border-2 h-[35px]  border-gray-400 placeholder:text-gray-600 pl-4 font-semibold' type='text' placeholder='From address' />
          <input className='lg:w-[85%] w-50% sm:w-[30%] lg:h-[40px] border-2 h-[35px]  border-gray-400 placeholder:text-gray-600 pl-4 font-semibold sm:ml-7' type='text' placeholder='To address' />
          <input className='lg:w-[85%] w-50% sm:w-[30%] lg:h-[40px] h-[35px] border-2 border-gray-400 placeholder:text-gray-600 pl-4 font-semibold sm:ml-7' type='date' />
        </div>

        <div className='mt-4 sm:mt-[20px] sm:ml-[500px]   flex flex-col sm:flex-row gap-4'>
          <input className='lg:w-[85%] sm:w-[30%] w-50% lg:h-[40px] h-[35px] border-2 border-gray-400 placeholder:text-gray-600 pl-4 font-semibold' type='text' placeholder='-- -- --' />
          <input className='lg:w-[85%] sm:w-[30%] w-50% lg:h-[40px] h-[35px] border-2 border-gray-400 placeholder:text-gray-600 pl-4 font-semibold sm:ml-7' type='text' placeholder='AC Car' />
          <button className='lg:w-[85%]   rounded-[5px] w-50% sm:w-[30%] lg:h-[40px] h-[35px]  placeholder:text-gray-300 pl-4 sm:pl-20 bg-[#000b64] text-white font-semibold sm:ml-7' type='text' placeholder='Find Car' >
            Find Car
          </button>
        </div>
      </div>

      <AboutUs />
      <PopularServices />
      <HotOffers />
      <BecomeDriver />
      <Testimonials />
      <BlogCards />
      <Footer />
    </>
  );
}

export default Page1;
