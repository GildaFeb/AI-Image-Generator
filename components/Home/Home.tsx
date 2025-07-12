import React from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'
import Pricing from './Pricing/Pricing'
import Review from './Review/Review'
import Faq from './Faq/Faq'

const Home = () => {
  return <div className="overflow-hidden">
    <Hero />
    <RecentImage/>
    <About />
    <Pricing />
    <Review />
    <Faq />
  </div>
}

export default Home