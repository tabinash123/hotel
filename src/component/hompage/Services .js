import React from 'react';
import styled from 'styled-components';
import { Utensils, Bath, Waves, Dumbbell, Wifi, Car } from 'lucide-react';

const ServiceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 0.9em;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.85em;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    max-width: 100%;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const IconWrapper = styled.div`
  background-color: #e0e0e0;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const ServiceTitle = styled.h4`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.8em;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;

const services = [
  { title: "Restaurant", icon: Utensils,  },
  { title: "Spa Center", icon: Bath, },
  { title: "Swimming Pool", icon: Waves},
  { title: "Fitness Center", icon: Dumbbell, },
  { title: "High Speed Wifi", icon: Wifi, },
  { title: "Car Parking", icon: Car, },
];

const HotelServices = () => {
  return (
    <ServiceSection>
      <Title>Services</Title>
      <Subtitle>For Vacation.</Subtitle>
      <Description>Continually productize compelling quality for packed in business consulting elated Setting up to website and creating pages.</Description>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <IconWrapper>
              <service.icon size={30} color="#333" />
            </IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
          </ServiceItem>
        ))}
      </ServicesGrid>
    </ServiceSection>
  );
};

export default HotelServices;