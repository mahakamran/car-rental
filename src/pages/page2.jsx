import React from 'react';
import driveImage from '../images/drive.jpg';
import Aboutus from '../components/AboutUs'
import Safe from '../components/SafeRideSection'
import BecomeDriver from '../components/BecomeDriver'
import TeamMembers from '../components/TeamMembers'
import Footer from '../components/Footer'
import HotOffer from '../components/HotOffers'
 
const About = () => {
  return (
    <>

    <section className="relative h-[300px] bg-cover bg-center text-white flex items-center justify-center " style={{ backgroundImage: `url(${driveImage})` }} >
      <div className="absolute inset-0 bg-[#1a2a6c] opacity-50"></div>
      <h1 className="relative text-4xl font-semibold">Car Listing</h1>
    </section>

<HotOffer/>
<Footer/>
    </>
  )
};

export default About;







































