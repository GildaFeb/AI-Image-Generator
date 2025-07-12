'use client';
import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Define the responsive breakpoints for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ImageSlider = () => {
  return (
    <Carousel
      arrows={true}
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
    >
      {[
        'b1.jpg',
        'b2.jpg',
        'b3.jpg',
        'b6.jpg',
        'b7.jpg',
        'b8.jpg',
        'b9.jpg',
        'b10.jpg',
        ,
        'p1.jpg',
        'p2.jpg',
        'p3.jpg',
        'p4.jpg',
      ].map((image, index) => (
        <div key={index} className="flex justify-center items-center p-4">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]  overflow-hidden rounded-lg shadow-lg">
            <img
              src={`/images/${image}`}
              alt={`Recent Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
