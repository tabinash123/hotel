import React from 'react';
import styled from 'styled-components';
import { Leaf, Hotel, Utensils, Wifi, MapPin } from 'lucide-react';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #f0f4f0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 75px 30px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  @media (min-width: 1024px) {
    padding: 100px 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex: 1;
    padding-right: 30px;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    padding-right: 60px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    flex: 1;
    padding: 40px;
    gap: 30px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const Button = styled.button`
  background-color: #B8860B;
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 14px 28px;
    font-size: 1.05rem;
  }

  @media (min-width: 1024px) {
    padding: 15px 30px;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: flex-start;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  background-color: #B8860B;
  border-radius: 50%;
  padding: 10px;
  margin-right: 15px;

  @media (min-width: 768px) {
    padding: 12px;
  }
`;

const FacilityInfo = styled.div`
  flex: 1;
`;

const FacilityName = styled.h3`
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 6px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 8px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const FacilityDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.92rem;
    line-height: 1.55;
  }

  @media (min-width: 1024px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const FacilitiesSection = () => {
  const facilities = [
    { name: 'Eco-Friendly Resort', icon: Leaf, description: 'Sustainable practices and nature conservation' },
    { name: 'Comfortable Rooms', icon: Hotel, description: '10 well-appointed rooms for a restful stay' },
    { name: 'Delicious Dining', icon: Utensils, description: 'On-site restaurant with local and international cuisine' },
    { name: 'Convenient Location', icon: MapPin, description: 'Just 1 km from Chitwan city center' },
    { name: 'Free Wi-Fi', icon: Wifi, description: 'Stay connected in rooms and public areas' },
  ];

  return (
    <Section>
      <LeftColumn>
        <Title>Experience Eco Adventure Resort</Title>
        <Description>
          Nestled in the heart of Chitwan, Nepal, Eco Adventure Resort offers a truly immersive experience for nature enthusiasts and adventure seekers. Our 1-star hotel combines comfort with eco-friendly practices, providing a perfect escape into the beauty of the natural world. Enjoy our serene surroundings, explore Chitwan National Park, and create unforgettable memories.
        </Description>
        <Button>Book Your Stay Now</Button>
      </LeftColumn>
      <RightColumn>
        {facilities.map((facility, index) => (
          <FacilityItem key={index}>
            <IconWrapper>
              <facility.icon size={24} color="white" />
            </IconWrapper>
            <FacilityInfo>
              <FacilityName>{facility.name}</FacilityName>
            </FacilityInfo>
          </FacilityItem>
        ))}
      </RightColumn>
    </Section>
  );
};

export default FacilitiesSection;