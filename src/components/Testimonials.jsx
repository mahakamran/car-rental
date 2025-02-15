import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import person1 from '../images/ava-1.jpg';
import person2 from '../images/ava-2.jpg';
import person3 from '../images/ava-3.jpg';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeat ab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit?",
    image: person1,
    name: "Jhon Doe",
    role: "Customer"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeat ab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit?",
    image: person2,
    name: "Jhon Doe",
    role: "Customer"  
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeat ab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit?",
    image: person3,
    name: "Jhon Doe",
    role: "Customer"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center mb-10">
        <h4 className="text-orange-400 font-semibold text-lg">Our clients says</h4>
        <h2 className="text-4xl text-[#0a1e3f] font-bold">Testimonials</h2>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-md p-6 text-center">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex  mt-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16  object-cover mr-4"
                  />
                  <div className="text-left">
                    <h4 className="text-blue-950 font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
