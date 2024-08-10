import React from 'react'
import RoomsSection from '../component/hompage/RoomsSection'
import Services from '../component/hompage/Services '
import TestimonialComponent from './../component/hompage/TestimonialComponent';
import UnforgettableExperience from './../component/hompage/UnforgettableExperience';
import PhotoGallery from '../component/hompage/PhotoGallery';
// import VideoComponent from '../component/hompage/VideoComponent.js';
import IntroductionSection from './../component/hompage/IntroductionSection';
import HeroComponent from '../component/hompage/HeroComponent.js';


const Hompage = () => {
  return (
    <div>
      <HeroComponent />
      <IntroductionSection />
      <RoomsSection />
      <Services />
      <UnforgettableExperience />
      <TestimonialComponent />
      {/* <VideoComponent /> */}
      <PhotoGallery />
    </div>
  )
}

export default Hompage