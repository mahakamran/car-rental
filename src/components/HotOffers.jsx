import React from 'react';
import { FaCar, FaCog, FaGasPump } from 'react-icons/fa';
import nissanImage from '../images/nissan-offer.png';
import toyotaImage from '../images/offer-toyota.png';
import bmwImage from '../images/bmw-offer.png';

const cars = [
  {
    name: "Tesla Malibu",
    price: "$50.00 / Day",
    model: "Model 3",
    transmission: "Automatic",
    mileage: "20kmpl",
    image: nissanImage
  },
  {
    name: "Toyota Aventador",
    price: "$50.00 / Day",
    model: "Model-2022",
    transmission: "Automatic",
    mileage: "20kmpl",
    image: toyotaImage
  },
  {
    name: "BMW X3",
    price: "$65.00 / Day",
    model: "Model-2022",
    transmission: "Automatic",
    mileage: "20kmpl",
    image: bmwImage
  }
];

const HotOffers = () => {
  return (
    <>
      <section className="py-20 bg-white mt-[100px]">
        <div className="container mx-auto text-center mb-10">
          <h4 className="text-orange-400 font-semibold text-lg">Come with</h4>
          <h2 className="text-4xl text-[#0a1e3f] font-bold">Hot Offers</h2>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {cars.map((car, index) => (
            <div 
              key={index} 
              className="border rounded-[7px] border-gray-300 shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-52 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl sm:text-2xl text-[#0a1e3f] font-bold">{car.name}</h3>
                <p className="text-blue-950 text-lg font-semibold">{car.price}</p>
                
                <div className="flex justify-center items-center flex-wrap space-x-4 mt-4 text-gray-600">
                  <span className="flex items-center">
                    <FaCar className="text-orange-400 mr-1 " />
                    {car.model}
                  </span>
                  <span className="flex items-center">
                    <FaCog className="text-orange-400 mr-1" />
                    {car.transmission}
                  </span>
                  <span className="flex items-center">
                    <FaGasPump className="text-orange-400 mr-1" />
                    {car.mileage}
                  </span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="bg-[#0a1e3f] text-white py-2 px-8 rounded-md hover:bg-blue-900 transition">
                    Rent
                  </button>
                  <button className="bg-orange-400 text-white py-2 px-8 rounded-md hover:bg-orange-500 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {cars.map((car, index) => (
            <div 
              key={index} 
              className="border rounded-[7px] border-gray-300 shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-52 object-contain p-4"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl sm:text-2xl text-[#0a1e3f] font-bold">{car.name}</h3>
                <p className="text-blue-950 text-lg font-semibold">{car.price}</p>

                <div className="flex justify-center items-center flex-wrap space-x-4 mt-4 text-gray-600">
                  <span className="flex items-center">
                    <FaCar className="text-orange-400 mr-1 " />
                    {car.model}
                  </span>
                  <span className="flex items-center">
                    <FaCog className="text-orange-400 mr-1" />
                    {car.transmission}
                  </span>
                  <span className="flex items-center">
                    <FaGasPump className="text-orange-400 mr-1" />
                    {car.mileage}
                  </span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="bg-[#0a1e3f] text-white py-2 px-8 rounded-md hover:bg-blue-900 transition">
                    Rent
                  </button>
                  <button className="bg-orange-400 text-white py-2 px-8 rounded-md hover:bg-orange-500 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HotOffers;
