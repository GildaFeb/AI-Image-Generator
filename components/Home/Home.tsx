'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import RecentImage from './RecentImage/RecentImage';
import About from './About/About';
import Pricing from './Pricing/Pricing';
import Review from './Review/Review';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      // If you want to dynamically import AOS (optional)
      // const AOS = (await import('aos')).default;

      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
      <Pricing />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
