import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ImageSlider from './ImageSlider'

const RecentImage = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
        {/* Heading */}
        <SectionHeading heading="Recent Images" />
        
        {/* Slider */}
        <div className="w-[90%] md:w-[80%] mx-auto mt-16" data-aos="fade-right"
        data-aos-anchor-placement="top-center">
            <ImageSlider />
        </div>
    </div>
    
  )
}

export default RecentImage