import React from 'react'
import Hero from '../component/about/Hero'
import HotelInfoComponent from '../component/about/HotelInfoComponent'
import HotelFeaturesComponent from '../component/about/HotelFeaturesComponent'
import TeamSection from '../component/about/TeamSection'
import RoomFacilities from '../component/about/RoomFacilities'
import TestimonialCarousel from './../component/hompage/TestimonialComponent';
import MissionVisionSection from './../component/about/MissionVision';

const About = () => {
  return (
    <div> 
      <Hero />
      <HotelInfoComponent />
      <MissionVisionSection />
      <HotelFeaturesComponent />
      <RoomFacilities />
      <TeamSection />
      <TestimonialCarousel />
    </div>
  )
}

export default About