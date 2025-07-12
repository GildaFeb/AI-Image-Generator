import { Check } from 'lucide-react';
import React from 'react';
import PriceCard from './PriceCard';

const Pricing = () => {
  return (
    <div className="w-[80%] m-auto grid grid-cols-1 xl:grid-cols-2 gap-10 item-center pt-16 pb-16">
      {/* Content */}
      <div>
        <h1 className="uppercase text-white mb-6 font-bold">Flexible & Affordable</h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Pricing</h1>
        <p className="text-white text-sm lg:text-base mb-6">
          Choose a plan that fits your needs. We offer flexible pricing options to suit everyone,
          from individuals to businesses.
        </p>
        <div className="mt-8">
          <div className="flex item-center space-x-3 mb-3">
            <Check className="w-5 h-5 text-green-500" />
            <p className="text-white text-sm lg:text-base">Unlimited Image Generation</p>
          </div>

          <div className="flex item-center space-x-3 mb-3">
            <Check className="w-5 h-5 text-green-500" />
            <p className="text-white text-sm lg:text-base">Access to Premium Features</p>
          </div>
          <div className="flex item-center space-x-3 mb-3">
            <Check className="w-5 h-5 text-green-500" />
            <p className="text-white text-sm lg:text-base">Priority Support</p>
          </div>
        </div>
      </div>
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* <div>
                <PriceCard price="4" user="1" type="Bronze Pack"/>
            </div> */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <PriceCard price="8" user="3" type="Silve Pack" />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <PriceCard price="10" user="7" type="Golden Pack" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
