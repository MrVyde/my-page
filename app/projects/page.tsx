 "use client" 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

function ResponsivePreviewCarousel() {
  return (
    <div className="max-w-md mx-auto my-6 bg-white border border-gray-400 rounded-xl shadow-md overflow-hidden">
      {/* Swiper Carousel */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="rounded-t-xl mt-6"
      >
        
        <SwiperSlide>
            {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/project1/laptop.png"
            alt="Laptop View"
            className="w-full h-64 object-contain mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
            {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/project1/tablet.png"
            alt="Tablet View"
            className="w-full h-64 object-contain mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
            {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/project1/phone.png"
            alt="Phone View"
            className="w-full h-64 object-contain mx-auto"
          />
        </SwiperSlide>
      </Swiper>

      {/* Description */}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Full-Stack E-Commerce App
        </h2>
        <p className="text-gray-800 mb-4 text-sm">
          A complete shopping experience with authentication, cart management, and Supabase integration.
          Built to demonstrate clean architecture, state management, and real-world e-commerce workflows.
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-4 text-3xl mb-6">
            <i className="devicon-react-original colored" title="React" />
            <i className="devicon-typescript-plain colored" title="TypeScript" />
            <i className="devicon-zustand-plain colored" title="Zustand" />
            <i className="devicon-react-original colored" title="React Query" />
            <i className="devicon-tailwindcss-plain colored" title="Tailwind CSS" />
            <i className="devicon-supabase-plain colored" title="Supabase" />
            <i className="devicon-nodejs-plain colored" title="Node.js (planned)" />
            <i className="devicon-javascript-plain colored" title="JWT (planned)" />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium transition"
          >
            Live Preview
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded font-medium transition flex items-center space-x-2"
            >
            <FaGithub className="text-lg" />
            <span>View Code</span>
           </a>
        </div>
      </div>
    </div>
  );
}

export default ResponsivePreviewCarousel;