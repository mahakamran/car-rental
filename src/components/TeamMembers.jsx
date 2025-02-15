import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import img from '../images/ava-1.jpg'
import img1 from '../images/ava-2.jpg'
import img2 from '../images/ava-3.jpg'
import img3 from '../images/ava-4.jpg'
import img4 from '../images/ava-4.jpg'

const members = [
  { id: 1, name: 'Jhon Doe', experience: '5 years of experience', image: img },
  { id: 2, name: 'David Lisa', experience: '5 years of experience', image: img1 },
  { id: 3, name: 'Hilton King', experience: '5 years of experience', image: img2 },
  { id: 4, name: 'Jhon Doe', experience: '5 years of experience', image: img4 },
];

const TeamMembers = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-orange-500 text-xl font-semibold">Experts</h2>
        <h3 className="text-4xl font-bold text-blue-900">Our Members</h3>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <div key={member.id} className="relative group bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={member.image} alt={member.name} className="w-full h-[250px] object-cover" />

            <div className="absolute inset-0 bg-blue-800 bg-opacity-10 flex items-center justify-center space-x-4 
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:bg-opacity-30 group-hover:translate-y-0 
              transition-all duration-500 ease-in-out">
              <a href="#" className="text-white text-xl"><FaFacebookF /></a>
              <a href="#" className="text-white text-xl"><FaTwitter /></a>
              <a href="#" className="text-white text-xl"><FaLinkedinIn /></a>
              <a href="#" className="text-white text-xl"><FaInstagram /></a>
            </div>

            <div className="p-4 text-center">
              <h4 className="text-blue-800 text-lg font-bold">{member.name}</h4>
              <p className="text-gray-600">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
