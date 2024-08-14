import React from 'react';
import styled from 'styled-components';
import { Utensils, Dumbbell, Flower2, Shirt } from 'lucide-react';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FacilityCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  background-color: #B8860B;
  border-radius: 8px;
  padding: 10px;
  margin-right: 15px;
`;

const FacilityInfo = styled.div`
  flex: 1;
`;

const FacilityName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const FacilityDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
`;

const FacilitiesSection = () => {
  const facilities = [
    { name: 'Restaurant', icon: Utensils, description: 'Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim.' },
    // { name: 'Swimming Pool', icon: Swim, description: 'Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim.' },
    { name: 'Fitness Center', icon: Dumbbell, description: 'Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim.' },
    { name: 'Spa & Massage', icon: Flower2, description: 'Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim.' },
    // { name: 'Meeting Room', icon: PresentationChart, description: 'Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim.' },
    { name: 'Laundry Service', icon: Shirt, description: 'Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim.' },
  ];

  return (
    <Section>
      <Title>Our Facilities</Title>
      <FacilitiesGrid>
        {facilities.map((facility, index) => (
          <FacilityCard key={index}>
            <IconWrapper>
              <facility.icon size={24} color="white" />
            </IconWrapper>
            <FacilityInfo>
              <FacilityName>{facility.name}</FacilityName>
              <FacilityDescription>{facility.description}</FacilityDescription>
            </FacilityInfo>
          </FacilityCard>
        ))}
      </FacilitiesGrid>
    </Section>
  );
};

export default FacilitiesSection;