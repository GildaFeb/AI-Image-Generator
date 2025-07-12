import { Button } from '@/components/ui/button';
import React from 'react';

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-900">
      <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="order-2 xl:order-1">
          <img
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            src="/images/b5.jpg"
            alt="About Us"
            className="w-full sm:w-20% md:w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            loading="lazy"
          />
        </div>
        {/* Content */}
        <div className="order-1 xl:order-2 flex flex-col justify-center items-start">
          <div className="w-[80%] m-auto">
            <h1 className="capitalize text-lg font-semibold mb-4 text-gray-300">What we do</h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Create your own AI generated images with Imagen
            </h1>
            <p className="text-white text-sm lg:text-base mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className="mt-6 cursor-pointer bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:from-blue-600 hover:to-violet-700 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
