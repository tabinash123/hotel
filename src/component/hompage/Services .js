import React from 'react';
import styled from 'styled-components';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const FacilitiesSection = styled.section`
  // background-color: #f4efe1;
  padding: 80px 20px;
  text-align: center;
    font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0c2e1c;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: -0.5px;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 50px;
  font-style: italic;
  font-weight: 300;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
    grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

const FacilityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  background-color: #B8860B;
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const FacilityTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 12px;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FacilityDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const facilities = [
  {
    icon: RestaurantIcon,
    title: "Restaurant",
    description: "Savor exquisite local and international cuisine in our elegant dining room."
  },
  {
    icon: PoolIcon,
    title: "Swimming Pool",
    description: "Relax and unwind in our refreshing pool surrounded by lush gardens."
  },

  {
    icon:   SpaIcon,
    title: "Spa & Massage",
    description: "Indulge in rejuvenating treatments and massages for ultimate relaxation."
  },
  {
    icon:   MeetingRoomIcon,
    title: "Meeting Room",
    description: "Host successful events in our modern, fully-equipped meeting spaces."
  },
  {
    icon:   LocalLaundryServiceIcon,
    title: "Laundry Service",
    description: "Enjoy the convenience of our prompt and efficient laundry service."
  }
];

const Facilities = () => {
  return (
    <FacilitiesSection>
      <Title>Our Facilities</Title>
      <Subtitle>Discover comfort and luxury in every corner of our resort</Subtitle>
      <FacilitiesGrid>
        {facilities.map((facility, index) => (
          <FacilityCard key={index}>
            <IconWrapper>
              <facility.icon size={35} />
            </IconWrapper>
            <FacilityTitle>{facility.title}</FacilityTitle>
            <FacilityDescription>{facility.description}</FacilityDescription>
          </FacilityCard>
        ))}
      </FacilitiesGrid>
    </FacilitiesSection>
  );
};

export default Facilities;