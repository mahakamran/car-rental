import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="p-8 md:p-16 lg:flex lg:justify-between lg:items-start lg:gap-8">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-xl  text-blue-800 font-bold mb-4">Get In Touch</h2>
        <input type="text" placeholder="Your Name" className=" w-full lg:w-[700px] p-2 border border-gray-300 rounded mb-4" />
        <input type="email" placeholder="Email" className="w-full lg:w-[700px] p-2 border border-gray-300 rounded mb-4" />
        <textarea placeholder="Message" className="w-full lg:w-[700px] p-2 border border-gray-300 rounded mb-4 h-32 resize-none" />
        <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">Send Message</button>
      </div>

      <div className="lg:w-1/2 lg:ml-[40px] lg:mt-11 ">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2">123 ZindaBazar, Sylhet, Bangladesh</p>
        <p className="mb-2">Phone: +88683896366</p>
        <p className="mb-4">Email: example@gmail.com</p>

        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
        <div className="flex gap-4 lg:mt-5 mt-4">
          <Facebook className="text-blue-900 cursor-pointer" />
          <Instagram className="text-blue-900 cursor-pointer" />
          <Linkedin className="text-blue-900 cursor-pointer" />
          <Twitter className="text-blue-900 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
