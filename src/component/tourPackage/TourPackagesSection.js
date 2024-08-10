import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Calendar, Clock, Users, Map } from 'lucide-react';

// Import images
import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";
import img5 from "../../assets/gallary/5.jpg";
import img6 from "../../assets/gallary/6.jpg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #f8f8f8;

  @media (max-width: 1024px) {
    padding: 50px 15px;
  }

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #C1A267;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
  font-weight: 300;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const PackageCategories = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.active ? '#C1A267' : '#2C3E50'};
  border-bottom: ${props => props.active ? '2px solid #C1A267' : 'none'};
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;

  &:hover {
    color: #C1A267;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const PackageImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PackageCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 220px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const PackageInfo = styled.div`
  padding: 25px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const PackagePrice = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 15px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 18px;
  color: #2C3E50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 8px 12px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
    top: 10px;
    left: 10px;
  }
`;

const PackageName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #2C3E50;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PackageDescription = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const PackageFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ecf0f1;
  padding-top: 20px;

  @media (max-width: 1024px) {
    padding-top: 15px;
  }

  @media (max-width: 768px) {
    padding-top: 10px;
    flex-wrap: wrap;
  }
`;

const Feature = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #7f8c8d;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 50%;
    margin-bottom: 5px;
  }
`;

const TourPackagesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const tourPackages = [
    {
      name: 'Jeep Safari Adventure',
      image: img1,
      price: '$60',
      description: 'Explore Chitwan National Park on an exciting jeep safari, spotting diverse wildlife including rhinos and tigers.',
      features: ['4 Hours', 'Morning/Afternoon', 'Max 8 People', 'Easy'],
      category: 'Wildlife'
    },
    {
      name: 'Canoe Ride & Jungle Walk',
      image: img2,
      price: '$40',
      description: 'Enjoy a serene canoe ride on the Rapti River, followed by a guided jungle walk to observe flora and fauna.',
      features: ['3 Hours', 'Morning', 'Max 10 People', 'Moderate'],
      category: 'Nature'
    },
    {
      name: 'Elephant Bathing Experience',
      image: img3,
      price: '$25',
      description: 'Interact with gentle giants and assist in their bathing routine in the Rapti River.',
      features: ['1 Hour', 'Morning', 'Max 6 People', 'Easy'],
      category: 'Wildlife'
    },
    {
      name: 'Tharu Village Tour',
      image: img4,
      price: '$30',
      description: 'Immerse yourself in the rich culture of the indigenous Tharu people, visit their traditional homes, and witness cultural performances.',
      features: ['3 Hours', 'Evening', 'Max 12 People', 'Easy'],
      category: 'Cultural'
    },
    {
      name: 'Bird Watching Tour',
      image: img5,
      price: '$35',
      description: 'Join expert guides on a bird watching expedition, observing various species in their natural habitat.',
      features: ['4 Hours', 'Early Morning', 'Max 8 People', 'Easy'],
      category: 'Nature'
    },
    {
      name: 'Sunset River Safari',
      image: img6,
      price: '$50',
      description: 'Cruise down the Rapti River on a boat safari, enjoying the sunset while spotting crocodiles and diverse birdlife.',
      features: ['2 Hours', 'Evening', 'Max 10 People', 'Easy'],
      category: 'Wildlife'
    },
  ];

  const filteredPackages = activeCategory === 'All' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.category === activeCategory);

  return (
    <Section>
      <Subtitle>EXPLORE SAURAHA</Subtitle>
      <Title>Discover the Natural Wonders of Chitwan with Our Curated Tour Packages</Title>
      <PackageCategories>
        {['All', 'Wildlife', 'Nature', 'Cultural'].map(category => (
          <CategoryButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </PackageCategories>
      <PackageGrid>
        {filteredPackages.map((pkg, index) => (
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
                  <Clock size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {pkg.features[0]}
                </Feature>
                <Feature>
                  <Calendar size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {pkg.features[1]}
                </Feature>
                <Feature>
                  <Users size={16} style={{marginRight: '8px', color: '#C1A267'}} />
                  {pkg.features[2]}
                </Feature>
                <Feature>
                  <Map size={16} style={{marginRight: '8px', color: '#C1A267'}} />
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