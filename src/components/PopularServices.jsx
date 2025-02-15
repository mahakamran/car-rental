import React from 'react';
import { FaMapMarkerAlt, FaCity, FaCar, FaClock, FaMapSigns, FaPlane } from 'react-icons/fa';

const services = [
  {
    icon: <FaMapMarkerAlt className="text-orange-400 text-4xl mb-2" />,
    title: "City Transfer",
    description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub"
  },
  {
    icon: <FaCity className="text-orange-400 text-4xl mb-2" />,
    title: "Whole City Tour",
    description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub"
  },
  {
    icon: <FaCar className="text-orange-400 text-4xl mb-2" />,
    title: "Unlimited Miles Car Rental",
    description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub"
  },
  {
    icon: <FaClock className="text-orange-400 text-4xl mb-2" />,
    title: "Fast & Easy Booking",
    description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub"
  },
  {
    icon: <FaMapSigns className="text-orange-400 text-4xl mb-2" />,
    title: "Many Pickup Locations",
    description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub"
  },
  {
    icon: <FaPlane className="text-orange-400 text-4xl mb-2" />,
    title: "Airport Transfer",
    description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub"
  },
];

const PopularServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h4 className="text-orange-400 font-semibold text-lg">See our</h4>
        <h2 className="text-4xl text-[#0a1e3f] font-bold">Popular Services</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="text-left p-6 hover:shadow-lg rounded-lg transition-shadow duration-300"
          >
            <div>
              {service.icon}
            </div>
            <div>
              <h3 className="text-[16px] font-bold mt-7 text-[#0a1e3f] hover:text-orange-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-1 text-[14px] leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
