import React from 'react';
import ing from '../images/drive.jpg'

const SafeRideSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-8">
      <div className="md:w-1/2">
        <img src={ing} alt="Car Interior" className="rounded-xl shadow-lg w-full" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">We Are Committed To Provide Safe Ride Solutions</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsum.
        </p>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsum.
        </p>
        <div className="text-orange-500 font-semibold">
          <p className="flex items-center gap-2">
            <span className="text-lg">Need Any Help?</span>
          </p>
          <p className="text-xl">+00123456789</p>
        </div>
      </div>
    </section>
  );
};

export default SafeRideSection;
