import React from 'react';
import styled from 'styled-components';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const FacilitiesSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  font-weight: normal;
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const FacilityCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  background-color: #c19a6b;
  border-radius: 4px;
  padding: 0.75rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FacilityContent = styled.div`
  flex: 1;
`;

const FacilityTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
`;

const FacilityDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const facilities = [
  {
    icon: RestaurantIcon,
    title: "Restaurant",
    description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
  },
  {
    icon: PoolIcon,
    title: "Swimming Pool",
    description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
  },
  {
    icon: FitnessCenterIcon,
    title: "Fitness Center",
    description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
  },
  {
    icon: SpaIcon,
    title: "Spa & Massage",
    description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
  },
  {
    icon: MeetingRoomIcon,
    title: "Meeting Room",
    description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
  },
  {
    icon: LocalLaundryServiceIcon,
    title: "Laundry Service",
    description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
  }
];

const Facilities = () => {
  return (
    <FacilitiesSection>
      <Title>Our Facilities</Title>
      <FacilitiesGrid>
        {facilities.map((facility, index) => (
          <FacilityCard key={index}>
            <IconWrapper>
              <facility.icon style={{ fontSize: 24, color: 'white' }} />
            </IconWrapper>
            <FacilityContent>
              <FacilityTitle>{facility.title}</FacilityTitle>
              <FacilityDescription>{facility.description}</FacilityDescription>
            </FacilityContent>
          </FacilityCard>
        ))}
      </FacilitiesGrid>
    </FacilitiesSection>
  );
};

export default Facilities;