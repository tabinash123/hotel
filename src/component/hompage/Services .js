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
  margin: 2rem auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    margin: 3rem auto;
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    margin: 4rem auto;
    padding: 0 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const FacilityCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    padding: 1.5rem;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  background-color: #c19a6b;
  border-radius: 4px;
  padding: 0.6rem;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

const FacilityContent = styled.div`
  flex: 1;
`;

const FacilityTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #333;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const FacilityDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
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
  const truncateDescription = (description, wordCount = 3) => {
    const words = description.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return description;
  };

  return (
    <FacilitiesSection>
      <Title>Our Facilities</Title>
      <FacilitiesGrid>
        {facilities.map((facility, index) => (
          <FacilityCard key={index}>
            <IconWrapper>
              <facility.icon style={{ fontSize: 20, color: 'white' }} />
            </IconWrapper>
            <FacilityContent>
              <FacilityTitle>{facility.title}</FacilityTitle>
              <FacilityDescription>
                {window.innerWidth <= 767
                  ? truncateDescription(facility.description)
                  : facility.description}
              </FacilityDescription>
            </FacilityContent>
          </FacilityCard>
        ))}
      </FacilitiesGrid>
    </FacilitiesSection>
  );
};

export default Facilities;