import React from 'react';
import styled from 'styled-components';

import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";
import img5 from "../../assets/gallary/5.jpg";
import img6 from "../../assets/gallary/6.jpg";
import img7 from "../../assets/gallary/4.jpg";
import img8 from "../../assets/gallary/8.jpg";
import img9 from "../../assets/gallary/9.jpg";

const GalleryContainer = styled.div`
  padding: 20px;
  margin: 0 auto;

  /* Large screens (4 images per row) */
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    max-width: calc(4 * 300px + 3 * 16px); /* Adjust to align images at center */
  }

  /* Tablet screens (3 images per row) */
  @media (min-width: 768px) and (max-width: 1199px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: calc(3 * 300px + 2 * 16px); /* Adjust to align images at center */
  }

  /* Mobile screens (2 images per row) */
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    max-width: calc(2 * 200px + 1 * 8px); /* Adjust to align images at center */
  }
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <GalleryContainer>
      {images.map((img, index) => (
        <ImageContainer key={index}>
          <Image src={img} alt={`Gallery image ${index + 1}`} />
        </ImageContainer>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
