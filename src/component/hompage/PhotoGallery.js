import React from 'react';
import styled from 'styled-components';

import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";
import img5 from "../../assets/gallary/5.jpg";
import img6 from "../../assets/gallary/6.jpg";

const GallerySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const GalleryGrid = styled.div`
  display: grid;
  gap: 20px;
      grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <GallerySection>
      <Title>Our Gallery</Title>
      <GalleryGrid>
        {images.map((img, index) => (
          <GalleryImage key={index} src={img} alt={`Gallery image ${index + 1}`} />
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

export default Gallery;