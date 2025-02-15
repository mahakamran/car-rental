import React from 'react'
import driveImage from '../images/drive.jpg';
import Contact from '../components/ContactSection'
import Footer from '../components/Footer'

const page3 = () => {
  return (
<>

    
        <section className="relative h-[300px] bg-cover bg-center text-white flex items-center justify-center " style={{ backgroundImage: `url(${driveImage})` }} >
          <div className="absolute inset-0 bg-[#1a2a6c] opacity-50"></div>
          <h1 className="relative text-4xl font-semibold">Contact</h1>
        </section>
        <Contact/>
        <Footer/>
</>
  )
}

export default page3