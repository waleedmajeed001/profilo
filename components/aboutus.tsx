"use client";

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-black">
      <header className="bg-black text-white text-center py-12">
      </header>

      <section className="text-center py-12 px-4" id='about'>
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Our mission is to build innovative, full-stack web applications that enhance user experience through cutting-edge technology and seamless performance.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110 ">
            <h3 className="text-xl font-bold">5+</h3>
            <p className="text-gray-400">Mounth of Experience</p>
          </div>
          <div className="transition transform hover:scale-110 ">
            <h3 className="text-xl font-bold">0+</h3>
            <p className="text-gray-400">Projects Delivered</p>
          </div>
        </div>
      </section>

      <section className="  py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          Revolutionizing the web development industry with scalable, optimized, and performance-driven full-stack solutions for every business need.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Technical Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">Frontend Development</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">Backend Development</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">API Development</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">TypeScript Expertise</h3>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 px-4">
        <h2 className="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600">
            <h3 className="text-xl font-bold">Advanced Web Technologies</h3>
            <p className="text-gray-700 mt-2">Utilizing the latest frameworks and libraries like React, Next.js, and Tailwind CSS for fast, scalable applications.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600">
            <h3 className="text-xl font-bold">Cloud Integration</h3>
            <p className="text-gray-700 mt-2">Seamless integration with cloud platforms such as AWS and Google Cloud for scalable hosting solutions.</p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Committed To Your Web Success</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">Expert in Full-Stack Web Development</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">Passionate About User-Centric Design</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">Proficient in Cutting-Edge Technologies</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg hover:scale-110 bg-gray-900 hover:bg-blue-600 transition-colors">
            <h3 className="text-xl font-bold">Committed to Quality and Timely Delivery</h3>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 hover:bg-blue-600 scale-90">
            <h3 className="text-xl font-bold">How do I get started with web development?</h3>
            <p className="mt-2 text-gray-700">You can start by learning the basics of frontend technologies like HTML, CSS, and JavaScript. Build projects to improve your skills!</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 hover:bg-blue-600 scale-90 mt-4">
            <h3 className="text-xl font-bold">What tools do you use for web development?</h3>
            <p className="mt-2 text-gray-700">We use modern tools like React, Next.js, Node.js, Tailwind CSS, and more to build efficient and scalable web applications.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 hover:bg-blue-600 scale-90 mt-4">
            <h3 className="text-xl font-bold">Do you offer ongoing support after launch?</h3>
            <p className="mt-2 text-gray-700">Yes, we offer ongoing support and maintenance to ensure your application stays up-to-date and secure.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
