import React from 'react';
import styled from 'styled-components';
import { Binoculars, Trees, Users, Utensils } from 'lucide-react';

const IntroductionContainer = styled.section`
  background-color: #f4efe1;
  padding: 60px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const HotelName = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 30px;
  font-style: italic;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureIcon = styled.div`
  background-color: #c19a6b;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SaurahaHotelIntroduction = () => {
  return (
    <IntroductionContainer>
      <HotelName>Chitwan Jungle Lodge</HotelName>
      <Tagline>Experience the Wild Heart of Nepal</Tagline>
      <Description>
        Welcome to Chitwan Jungle Lodge, your gateway to the natural wonders of Sauraha and Chitwan National Park.
        Nestled on the edge of the lush jungle, our hotel offers a perfect blend of comfort, adventure, and
        authentic Nepalese hospitality. Immerse yourself in the rich biodiversity, vibrant Tharu culture, and
        unforgettable wildlife experiences that make Sauraha a truly unique destination.
      </Description>
      <FeatureGrid>
        <FeatureItem>
          <FeatureIcon>
            <Binoculars size={30} />
          </FeatureIcon>
          <FeatureTitle>Wildlife Safari</FeatureTitle>
          <FeatureDescription>Guided tours to spot rhinos, tigers, and exotic birds</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>
            <Trees size={30} />
          </FeatureIcon>
          <FeatureTitle>Jungle Proximity</FeatureTitle>
          <FeatureDescription>Located at the doorstep of Chitwan National Park</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>
            <Users size={30} />
          </FeatureIcon>
          <FeatureTitle>Cultural Experiences</FeatureTitle>
          <FeatureDescription>Tharu village visits and traditional dance performances</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>
            <Utensils size={30} />
          </FeatureIcon>
          <FeatureTitle>Local Cuisine</FeatureTitle>
          <FeatureDescription>Authentic Nepalese and Tharu dishes at our restaurant</FeatureDescription>
        </FeatureItem>
      </FeatureGrid>
    </IntroductionContainer>
  );
};

export default SaurahaHotelIntroduction;