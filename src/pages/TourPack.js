import React from 'react'
import Hero from '../component/tourPackage/Hero'
import TourPackagesSection from '../component/tourPackage/TourPackagesSection'
import PhotoGallery from './../component/hompage/PhotoGallery';

const TourPack = () => {
  return (
      <div>
          <Hero />
      <TourPackagesSection />
      <PhotoGallery />
    </div>
  )
}

export default TourPack