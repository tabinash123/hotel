import React from 'react'
import RoomsSection from '../component/hompage/RoomsSection'
import Services from '../component/hompage/Services '
import Event from './../component/hompage/Event';
import UnforgettableExperience from './../component/hompage/UnforgettableExperience';
import PhotoGallery from '../component/hompage/PhotoGallery';
import VideoComponent from '../component/hompage/VideoComponent.js';


const Hompage = () => {
  return (
      <div>
      <RoomsSection />
      <Services />
      <Event />
      <VideoComponent />
      <UnforgettableExperience />
      <PhotoGallery />
    </div>
  )
}

export default Hompage