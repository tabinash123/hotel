import React from 'react'
import RoomsSection from '../component/hompage/RoomsSection'
import Services from '../component/hompage/Services '
import TestimonialComponent from './../component/hompage/TestimonialComponent';
import UnforgettableExperience from './../component/hompage/UnforgettableExperience';
import PhotoGallery from '../component/hompage/PhotoGallery';
import IntroductionSection from './../component/hompage/IntroductionSection';
import HeroComponent from '../component/hompage/HeroComponent.js';
import WhyChooseUs from '../component/hompage/WhyChooseUs;.js';


const Hompage = () => {
  return (
    <div> 
      <HeroComponent />
      <IntroductionSection />
      <RoomsSection />
      <Services />
      <UnforgettableExperience />
      <TestimonialComponent />
      <WhyChooseUs />
      <PhotoGallery />
    </div>
  )
}

export default Hompage