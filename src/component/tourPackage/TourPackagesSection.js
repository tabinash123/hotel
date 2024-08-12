import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Calendar, Clock, Users, Map } from 'lucide-react';

import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";
import img5 from "../../assets/gallary/5.jpg";
import img6 from "../../assets/gallary/6.jpg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const IntroSection = styled.div`
  text-align: left;
  margin-bottom: 3rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #8B4513;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PackageImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PackageCard}:hover & {
    transform: scale(1.05);
  }
`;

const PackageInfo = styled.div`
  padding: 1.5rem;
`;

const PackagePrice = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  color: #2C3E50;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PackageName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2C3E50;
  font-weight: 600;
`;

const PackageDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const PackageFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid #ecf0f1;
  padding-top: 1rem;
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  width: 50%;
  margin-bottom: 0.5rem;
`;

const TourPackagesSection = () => {
  const tourPackages = [
    {
      name: 'Jeep Safari Adventure',
      image: img1,
      price: '$60',
      description: 'Embark on an exhilarating jeep safari through Chitwan National Park, encountering diverse wildlife in their natural habitat.',
      features: ['4 Hours', 'Morning', 'Max 8', 'Easy'],
    },
    {
      name: 'Canoe Ride & Jungle Walk',
      image: img2,
      price: '$40',
      description: 'Glide along the serene waters of the Rapti River, followed by an immersive guided walk through the lush jungle.',
      features: ['3 Hours', 'Morning', 'Max 10', 'Moderate'],
    },
    {
      name: 'Elephant Bathing Experience',
      image: img3,
      price: '$25',
      description: 'Participate in the joyful tradition of bathing elephants in the Rapti River, creating unforgettable memories.',
      features: ['1 Hour', 'Morning', 'Max 6', 'Easy'],
    },
    {
      name: 'Tharu Village Cultural Tour',
      image: img4,
      price: '$30',
      description: 'Immerse yourself in the rich traditions of the indigenous Tharu people, exploring their unique culture and lifestyle.',
      features: ['3 Hours', 'Evening', 'Max 12', 'Easy'],
    },
    {
      name: 'Bird Watching Expedition',
      image: img5,
      price: '$35',
      description: 'Join expert ornithologists on a fascinating journey to spot and identify the diverse avian species of Chitwan.',
      features: ['4 Hours', 'Morning', 'Max 8', 'Easy'],
    },
    {
      name: 'Sunset River Safari',
      image: img6,
      price: '$50',
      description: 'Cruise down the Rapti River at dusk, witnessing the magical transformation of the landscape as day turns to night.',
      features: ['2 Hours', 'Evening', 'Max 10', 'Easy'],
    },
  ];

  return (
    <Section>
      <IntroSection>
        <Subtitle>EXPLORE SAURAHA</Subtitle>
        <Title>Discover Chitwan's Natural Wonders</Title>
        <Description>
          Immerse yourself in the breathtaking beauty of Chitwan National Park through our carefully curated tour packages. 
          From thrilling wildlife encounters to serene cultural experiences, each adventure promises to create lasting memories 
          and showcase the exceptional biodiversity and rich heritage of this UNESCO World Heritage site.
        </Description>
      </IntroSection>
      <PackageGrid>
        {tourPackages.map((pkg, index) => (
          <PackageCard key={index}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <PackageImage src={pkg.image} alt={pkg.name} />
              <PackagePrice>{pkg.price}<sup>/person</sup></PackagePrice>
            </div>
            <PackageInfo>
              <PackageName>{pkg.name}</PackageName>
              <PackageDescription>{pkg.description}</PackageDescription>
              <PackageFeatures>
                <Feature>
                  <Clock size={16} style={{marginRight: '8px', color: '#8B4513'}} />
                  {pkg.features[0]}
                </Feature>
                <Feature>
                  <Calendar size={16} style={{marginRight: '8px', color: '#8B4513'}} />
                  {pkg.features[1]}
                </Feature>
                <Feature>
                  <Users size={16} style={{marginRight: '8px', color: '#8B4513'}} />
                  {pkg.features[2]}
                </Feature>
                <Feature>
                  <Map size={16} style={{marginRight: '8px', color: '#8B4513'}} />
                  {pkg.features[3]}
                </Feature>
              </PackageFeatures>
            </PackageInfo>
          </PackageCard>
        ))}
      </PackageGrid>
    </Section>
  );
};

export default TourPackagesSection;