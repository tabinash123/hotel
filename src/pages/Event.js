import React from 'react'
import SaurahaEventsPage from './../component/events/SaurahaEventsPage';
import Hero from './../component/room/Hero';
import PhotoGallery from './../component/hompage/PhotoGallery';

const Event = () => {
  return (
      <div>
          <Hero />
      <SaurahaEventsPage />
      <PhotoGallery />
    </div>
  )
}

export default Event