import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import im from '../images/blog-1.jpg';
import img from '../images/blog-2.jpg';
import imge from '../images/blog-3.jpg';

const blogs = [
  {
    id: 1,
    title: 'The best way to drive cars',
    description: 'Dolor labore lorem no accumsan sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    image: im,
    author: 'Muhib',
    date: '12 Dec, 2020',
    time: '9pm'
  },
  {
    id: 2,
    title: 'If your car battery is down',
    description: 'Dolor labore lorem no accumsan sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    image: img,
    author: 'Muhib',
    date: '12 Dec, 2020',
    time: '9pm'
  },
  {
    id: 3,
    title: 'The best way to give trip',
    description: 'Dolor labore lorem no accumsan sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    image: imge,
    author: 'Muhib',
    date: '12 Dec, 2020',
    time: '9pm'
  }
];

const BlogCards = () => {
  return (
    <section className="py-10 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold">Explore our blogs</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Latest Blogs</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-blue-900 pt-4 font-bold text-lg md:text-xl">{blog.title}</h3>
              <p className="text-gray-600 text-sm pt-3 mb-3">{blog.description}</p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">Read More</a>
              <div className="flex flex-wrap items-center pt-5 text-gray-600 text-xs mt-4 space-x-4">
                <span className="flex items-center"><User className="w-4 h-4 mr-1" />{blog.author}</span>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{blog.date}</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{blog.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCards;
