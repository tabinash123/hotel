import React from 'react'
import RoomsSection from '../component/hompage/RoomsSection'
import Services from '../component/hompage/Services '
// import TestimonialComponent from './../component/hompage/TestimonialComponent';
import UnforgettableExperience from './../component/hompage/UnforgettableExperience';
import PhotoGallery from '../component/hompage/PhotoGallery';
import IntroductionSection from './../component/hompage/IntroductionSection';
import HeroComponent from '../component/hompage/HeroComponent.js';
import Faq from '../component/hompage/Faq.js';
import WhyChooseUs from '../component/hompage/WhyChooseUs;.js';
import HotelFeatures from '../component/hompage/HotelFeatures.js';
import Video from '../component/hompage/Video.js';
import Review from '../component/hompage/Review.js';


const Hompage = () => {
  return (
    <div> 
      <HeroComponent />
      {/* <HotelFeatures /> */}
      <IntroductionSection />
      <Services />
      <RoomsSection />
      <UnforgettableExperience />
      <Review />
      <WhyChooseUs />
      <Video />
      {/* <TestimonialComponent /> */}
      <Faq />
      <PhotoGallery />
    </div>
  )
}

export default Hompage