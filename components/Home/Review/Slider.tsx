'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Slider = () => {
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
      <div>
        <ReviewCard
          image="/images/p1.jpg"
          name="Shairmaine C"
          role="IT Programmer"
          review={'Lorem itsum lorem itsum'}
        />
      </div>

      <div>
        <ReviewCard
          image="/images/p2.jpg"
          name="Arthur T."
          role="IT Manager"
          review={'Lorem itsum lorem itsum'}
        />
      </div>

      <div>
        <ReviewCard
          image="/images/p3.jpg"
          name="Berna B."
          role="SalesForce Manager"
          review={'Lorem itsum lorem itsum'}
        />
      </div>
    </Carousel>
  );
};

export default Slider;
