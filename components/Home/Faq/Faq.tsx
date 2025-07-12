import React from 'react';
import FaqCard from './FaqCard';

const Faq = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 item-center">
        <div>
          {/* Image */}
          <img
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            src="/images/faq.jpg"
            alt="FAQ"
            height={500}
            width={500}
            loading="lazy"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
        {/* Faq Card */}
        <div>
          <FaqCard />
        </div>
      </div>
    </div>
  );
};

export default Faq;
