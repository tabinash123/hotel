import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";
import img5 from "../../assets/gallary/5.jpg";
import img6 from "../../assets/gallary/6.jpg";

const GallerySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
  font-family: 'Times New Roman', serif;
  background-color: #FFF8E1;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 5px;
  font-weight: normal;
  color: #D32F2F;
`;

const Divider = styled.div`
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 15px;
  &::before, &::after {
    content: "—";
    margin: 0 10px;
    color: #FFA000;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 0.9em;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  margin: 0 15px 10px;
  color: ${props => props.active ? '#D32F2F' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  padding: 5px 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.active ? '#D32F2F' : 'transparent'};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    // height: 180px;
  }
`;





const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Room', 'Swimming pool', 'Chef'];
  
  const images = [
    { src: img1, category: 'Room', title: 'Luxurious Suite' },
    { src: img2, category: 'Swimming pool', title: 'Infinity Pool' },
    { src: img3, category: 'Chef', title: 'Gourmet Dining' },
    { src: img4, category: 'Room', title: 'Mountain View Room' },
    { src: img5, category: 'Swimming pool', title: 'Poolside Relaxation' },
    { src: img6, category: 'Chef', title: 'Culinary Delights' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <GallerySection>
      <Title>Our Gallery</Title>
      <Divider>o</Divider>
      <Subtitle>When you host a party or family reunion, the special celebrations let you strengthen bonds with</Subtitle>
      
      <CategoryNav>
        {categories.map(category => (
          <CategoryButton 
            key={category} 
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryNav>
      
      <GalleryGrid>
        {filteredImages.map((img, index) => (
          <GalleryItem key={index}>
            <GalleryImage src={img.src} alt={img.title} />
           
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

export default Gallery;